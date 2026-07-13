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
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
        <XAxis
          dataKey="frame"
          tick={{ fontSize: 11, fill: "#78716c" }}
          axisLine={{ stroke: "#d6d3d1" }}
          tickLine={false}
          label={{
            value: "Video frame",
            position: "insideBottom",
            offset: -4,
            style: { fontSize: 11, fill: "#a8a29e" },
          }}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#78716c" }}
          axisLine={{ stroke: "#d6d3d1" }}
          tickLine={false}
          label={{
            value: "Prediction error",
            angle: -90,
            position: "insideLeft",
            offset: 10,
            style: { fontSize: 11, fill: "#a8a29e" },
          }}
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
          label={{
            value: "Physics violation",
            position: "top",
            fontSize: 10,
            fill: "#a8a29e",
          }}
        />
        <Line
          type="monotone"
          dataKey="normal"
          name="Physical sequence"
          stroke="#a8a29e"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="violation"
          name="Violation sequence"
          stroke="#1c1917"
          strokeWidth={2}
          dot={false}
        />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
