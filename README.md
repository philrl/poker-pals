# Poker Now Chip Stack Chart

## Requirements

- bun ([bun.sh](https://bun.sh))

## To run locally

`bun install`

`bun run dev`

## To deploy

`bun run deploy`

## Built with

- Recharts
- React
- Vite
- Bun
- DuckDB (for parsing and querying csv files)

## To add new poker now file

- Download Full log from Poker Now room
- Strip it of your hands (if your going to make the log public)
  `grep -v "Your hands" poker_now_logs.csv > this_month.csv`
- Add it to `scripts/data/`
- run `bun run generate-data`
