import { Database } from "duckdb-async";
import { readdir } from "fs/promises";
import { z } from "zod";

const DIR = "./scripts/data/";

const pokerNowFormatSchema = z.object({
  entry: z.string(),
  at: z.date().or(z.string().datetime()),
  order: z.bigint().or(z.string()),
});

type StackData = {
  name: string;
  amount: number;
  at: Date | string;
};
const duckDbRowsSchema = z.array(pokerNowFormatSchema);

async function queryFile(db: Database, csvFilePath: string) {
  return db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like 'Player stacks:%' order by at`,
  );
}

function makeOutput(data: Record<string, StackData[]>): string {
  return `// THIS FILE WAS AUTO GENERATED. EDIT AT YOUR OWN RISK
export type PlayerStackData = {
  name: string;
  amount: number;
  at: Date | string;
};
export type Games = Record<string, PlayerStackData[]>

export const data: Games = ${JSON.stringify(data, null, 2)};
`;
}

async function generateStackData(): Promise<Record<string, StackData[]>> {
  const files = await readdir(DIR);
  const db = await Database.create(":memory:");
  const output: Record<string, StackData[]> = {};
  for (const file of files) {
    const rows = await queryFile(db, DIR + file);
    const pokerNowRows = duckDbRowsSchema.parse(rows);
    const parsedData = pokerNowRows.flatMap(({ entry, at }) => {
      return entry
        .substring('"Player stacks:'.length)
        .split("|")
        .map((str) => {
          const [, name, amount] =
            /#\d+ "(.*) @ .{10}" \((\d+)\)/.exec(str.trim()) || [];
          return { name, amount: parseInt(amount, 10), at };
        });
    });
    output[file.split(".")[0]] = parsedData;
  }
  return output;
}

generateStackData()
  .then((output) => {
    return Bun.write(Bun.stdout, makeOutput(output));
  })
  .catch(console.error);
