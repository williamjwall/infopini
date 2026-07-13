"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "LLM training corpus",
    tokens: 25,
    label: "~25 trillion tokens",
    note: "20–30T token range cited by LeCun",
  },
  {
    name: "Human reading equivalent",
    tokens: 0.0000000025,
    label: "400,000 years to read",
    note: "Same token volume at human reading speed",
  },
  {
    name: "4-year-old sensory input",
    tokens: 100,
    label: "~10¹⁴ bytes via vision",
    note: "Achieves physical common sense in 4 years",
  },
];

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: (typeof data)[0] }[];
}) {
  if (!active || !payload?.[0]) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-sm border border-stone-200 bg-white px-3 py-2 text-xs shadow-sm">
      <p className="font-semibold text-stone-800">{item.name}</p>
      <p className="mt-1 text-stone-600">{item.label}</p>
      <p className="mt-1 text-stone-400">{item.note}</p>
    </div>
  );
}

export function DataVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11, fill: "#78716c" }}
          axisLine={{ stroke: "#d6d3d1" }}
          tickLine={false}
          interval={0}
          height={60}
        />
        <YAxis
          scale="log"
          domain={[1e-10, 100]}
          tick={{ fontSize: 11, fill: "#78716c" }}
          axisLine={{ stroke: "#d6d3d1" }}
          tickLine={false}
          label={{
            value: "Relative data volume (log scale)",
            angle: -90,
            position: "insideLeft",
            offset: 10,
            style: { fontSize: 11, fill: "#a8a29e" },
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="tokens" fill="#1c1917" radius={[2, 2, 0, 0]} maxBarSize={80} />
      </BarChart>
    </ResponsiveContainer>
  );
}
