"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { frame: 0, normal: 0.12, violation: 0.11 },
  { frame: 5, normal: 0.14, violation: 0.13 },
  { frame: 10, normal: 0.13, violation: 0.15 },
  { frame: 15, normal: 0.15, violation: 0.42 },
  { frame: 20, normal: 0.14, violation: 0.78 },
  { frame: 25, normal: 0.13, violation: 0.91 },
  { frame: 30, normal: 0.15, violation: 0.85 },
  { frame: 35, normal: 0.14, violation: 0.62 },
  { frame: 40, normal: 0.13, violation: 0.38 },
  { frame: 45, normal: 0.14, violation: 0.22 },
  { frame: 50, normal: 0.12, violation: 0.16 },
];

export function VJEPAErrorChart() {
  return (
    <div className="w-full min-w-0">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
          <XAxis
            dataKey="frame"
            tick={{ fontSize: 10, fill: "#78716c" }}
            axisLine={{ stroke: "#d6d3d1" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#78716c" }}
            axisLine={{ stroke: "#d6d3d1" }}
            tickLine={false}
            width={32}
          />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              border: "1px solid #e7e5e4",
              borderRadius: 2,
            }}
          />
          <ReferenceLine
            x={15}
            stroke="#d6d3d1"
            strokeDasharray="4 4"
          />
          <Line
            type="monotone"
            dataKey="normal"
            name="Normal video"
            stroke="#a8a29e"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="violation"
            name="Impossible video"
            stroke="#1c1917"
            strokeWidth={2}
            dot={false}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-1 text-center text-[10px] text-stone-400">
        Dashed line: moment the clip stops looking physical (e.g. ball vanishes)
      </p>
    </div>
  );
}
