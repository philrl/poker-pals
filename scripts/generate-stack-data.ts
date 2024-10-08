import { Database } from "duckdb-async";
import { readdir } from "fs/promises";
import { z } from "zod";

const DIR = "./scripts/data/";

const pokerNowFormatSchema = z.object({
  entry: z.string(),
  at: z.date().or(z.string().datetime()),
  order: z.bigint().or(z.string()),
});

const duckDbRowsSchema = z.array(pokerNowFormatSchema);

type StackData = {
  stacks: { [name: string]: number };
  at: Date | string;
};

type Pot = {
  name: string;
  pot: number;
};

type Exit = {
  name: string;
  at: Date | string;
};

type GameData = {
  stacks: StackData[];
  hands: number;
  flops: number;
  turns: number;
  rivers: number;
  allIns: number;
  largestPots: Pot[];
  exits: Exit[];
  players: string[];
  potsWon: Record<string, number>;
};

async function getStacks(db: Database, csvFilePath: string) {
  const rows = await db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like 'Player stacks:%' order by at`,
  );
  const pokerNowRows = duckDbRowsSchema.parse(rows);
  return pokerNowRows.map(({ entry, at }) => {
    return entry
      .substring('"Player stacks:'.length)
      .split("|")
      .reduce<StackData>(
        (prev: StackData, curr: string) => {
          const [, name, amount] =
            /#\d+ "(.*) @ .{10}" \((\d+)\)/.exec(curr.trim()) || [];
          prev.stacks[name] = parseInt(amount, 10);
          return prev;
        },
        { at, stacks: {} },
      );
  });
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

async function getCollectedPots(
  db: Database,
  csvFilePath: string,
): Promise<z.infer<typeof duckDbRowsSchema>> {
  const rows = await db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like '%collected%' order by at`,
  );
  return duckDbRowsSchema.parse(rows);
}

async function getLargestPots(n: number, db: Database, csvFilePath: string) {
  const pokerNowRows = await getCollectedPots(db, csvFilePath);
  return pokerNowRows
    .map(({ entry }) => {
      const [, name, pot] =
        /"(\w+) @ \S{10}" collected (\d+) from pot.*/.exec(entry) || [];
      return { name, pot: parseInt(pot, 10) };
    })
    .toSorted((a, b) => b.pot - a.pot)
    .slice(0, n);
}

async function getHandsWon(db: Database, csvFilePath: string) {
  const pokerNowRows = await getCollectedPots(db, csvFilePath);
  return pokerNowRows.reduce((prev: Record<string, number>, { entry }) => {
    const [, name] =
      /"(\w+) @ \S{10}" collected (\d+) from pot.*/.exec(entry) || [];

    prev[name] ? (prev[name] += 1) : (prev[name] = 1);
    return prev;
  }, {});
}

async function getExitTimes(db: Database, csvFilePath: string) {
  const rows = await db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like '%quits the game with a stack of 0.' order by at`,
  );
  const pokerNowRows = duckDbRowsSchema.parse(rows);
  return pokerNowRows
    .map(({ entry, at }) => {
      const [, name] =
        /The player "(\S+) @ \S{10}" quits the game with a stack of 0./.exec(
          entry,
        ) || [];
      return { name, at };
    })
    .toSorted((a, b) => {
      const aDate = typeof a.at === "string" ? new Date(a.at) : a.at;
      const bDate = typeof b.at === "string" ? new Date(b.at) : b.at;
      return bDate.valueOf() - aDate.valueOf();
    });
}

async function getPlayers(
  db: Database,
  csvFilePath: string,
): Promise<Set<string>> {
  const rows = await db.all(
    `select * from read_csv_auto( '${csvFilePath}' ) where entry like '%joined the game with a stack of%' order by at`,
  );
  const pokerNowRows = duckDbRowsSchema.parse(rows);

  const players = new Set<string>();
  pokerNowRows.forEach(({ entry }) => {
    const [, name] =
      /The player "(\S+) @ \S{10}" joined the game with a stack of \d+/.exec(
        entry,
      ) || [];
    players.add(name);
  });
  return players;
}

function makeOutput(data: Record<string, GameData>): string {
  return `// THIS FILE WAS AUTO GENERATED. EDIT AT YOUR OWN RISK
export type PlayerStackData = {
  stacks: { [name: string]: number };
  at: Date | string;
};

export type Pot = {
  name: string;
  pot: number;
};

export type Exit = {
    name: string;
    at: Date | string;
}

export type GameData = {
  stacks: PlayerStackData[];
  hands: number;
  flops: number;
  turns: number;
  rivers: number;
  allIns: number;
  largestPots: Pot[];
  exits: Exit[];
  players: string[];
  potsWon: Record<string, number>
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
    const stacks = await getStacks(db, DIR + file);
    const hands = await getHands(db, DIR + file);
    const flops = await getFlops(db, DIR + file);
    const turns = await getTurns(db, DIR + file);
    const rivers = await getRivers(db, DIR + file);
    const allIns = await getAllins(db, DIR + file);
    const largestPots = await getLargestPots(10, db, DIR + file);
    const exits = await getExitTimes(db, DIR + file);
    const players = await getPlayers(db, DIR + file);
    const potsWon = await getHandsWon(db, DIR + file);

    output[file.split(".")[0]] = {
      stacks,
      hands,
      flops,
      turns,
      rivers,
      allIns,
      largestPots,
      exits,
      potsWon,
      players: Array.from(players),
    };
  }
  return output;
}

generateStackData()
  .then((output) => {
    return Bun.write(Bun.stdout, makeOutput(output));
  })
  .catch(console.error);
