import type { PlayerStackData } from "./data.ts";

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useWindowSize } from "@uidotdev/usehooks";

function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

type RechartChartProps = {
  stackData: PlayerStackData[];
  players: string[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};
export default function Chart({
  stackData,
  players,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 30,
}: RechartChartProps) {
  const { width, height } = useWindowSize();
  console.log({ width, height });
  const data = stackData.map(({ at, stacks }) => {
    return { at: new Date(at), stacks };
  });
  const colors = [
    "#001219",
    "#005F73",
    "#0A9396",
    "#94D2BD",
    "#E9D8A6",
    "#EE9B00",
    "#CA6702",
    "#BB3E03",
    "#AE2012",
    "#9B2226",
  ];

  const chartWidth = clamp((width || 0) - marginLeft - marginRight, 350, 1280);
  const chartHeight = clamp(
    (chartWidth * 3) / 4,
    300,
    Math.min(height || 850, 850),
  );

  return (
    <ResponsiveContainer height={chartHeight} width={chartWidth}>
      <LineChart
        data={data}
        margin={{
          top: marginTop,
          bottom: marginBottom,
          right: marginRight,
          left: marginLeft,
        }}
      >
        <XAxis
          dataKey="at"
          tickFormatter={(value: Date) =>
            value.toLocaleTimeString("EN-US", {
              timeStyle: "short",
              hourCycle: "h24",
            })
          }
        />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip labelFormatter={(value: Date) => value.toLocaleTimeString()} />
        <Legend />
        {players.map((player, idx) => (
          <Line
            key={player}
            name={player}
            type="monotone"
            dataKey={(data) => data.stacks[player]}
            stroke={colors[idx % colors.length]}
            connectNulls={true}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
