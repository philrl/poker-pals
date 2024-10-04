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

type GameData = {
  stacks: StackData[];
  hands: number;
  flops: number;
  turns: number;
  rivers: number;
  allIns: number;
};
const duckDbRowsSchema = z.array(pokerNowFormatSchema);

async function getStacks(db: Database, csvFilePath: string) {
  return db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like 'Player stacks:%' order by at`,
  );
}

async function getHands(db: Database, csvFilePath: string) {
  const [{ hands }] = await db.all(
    `select count(*) as hands from  read_csv_auto( '${csvFilePath}' ) where entry like '-- starting hand%'`,
  );
  return z.number().parse(parseInt(hands, 10));
}

async function getFlops(db: Database, csvFilePath: string): Promise<number> {
  const [{ flops }] = await db.all(
    `select count(*) as flops from  read_csv_auto( '${csvFilePath}' ) where entry like 'Flop:%'`,
  );

  return z.number().parse(parseInt(flops, 10));
}

async function getTurns(db: Database, csvFilePath: string): Promise<number> {
  const [{ turns }] = await db.all(
    `select count(*) as turns from  read_csv_auto( '${csvFilePath}' ) where entry like 'Turn:%'`,
  );

  return z.number().parse(parseInt(turns, 10));
}

async function getRivers(db: Database, csvFilePath: string): Promise<number> {
  const [{ rivers }] = await db.all(
    `select count(*) as rivers from  read_csv_auto( '${csvFilePath}' ) where entry like 'River:%'`,
  );

  return z.number().parse(parseInt(rivers, 10));
}

async function getAllins(db: Database, csvFilePath: string): Promise<number> {
  const [{ allIns }] = await db.all(
    `select count(*) as allIns from  read_csv_auto( '${csvFilePath}' ) where entry like '%all in%'`,
  );

  return z.number().parse(parseInt(allIns, 10));
}

function makeOutput(data: Record<string, GameData>): string {
  return `// THIS FILE WAS AUTO GENERATED. EDIT AT YOUR OWN RISK
export type PlayerStackData = {
  name: string;
  amount: number;
  at: Date | string;
};
export type GameData = {
  stacks: StackData[];
  hands: number;
  flops: number;
  turns: number;
  rivers: number;
  allIns: number;
};
export type Games = Record<string, GameData>

export const data: Games = ${JSON.stringify(data, null, 2)};
`;
}

async function generateStackData(): Promise<Record<string, GameData>> {
  const files = await readdir(DIR);
  const db = await Database.create(":memory:");
  const output: Record<string, GameData> = {};
  for (const file of files) {
    const rows = await getStacks(db, DIR + file);
    const hands = await getHands(db, DIR + file);
    const flops = await getFlops(db, DIR + file);
    const turns = await getTurns(db, DIR + file);
    const rivers = await getRivers(db, DIR + file);
    const allIns = await getAllins(db, DIR + file);
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
    output[file.split(".")[0]] = {
      stacks: parsedData,
      hands,
      flops,
      turns,
      rivers,
      allIns,
    };
  }
  return output;
}

generateStackData()
  .then((output) => {
    return Bun.write(Bun.stdout, makeOutput(output));
  })
  .catch(console.error);
