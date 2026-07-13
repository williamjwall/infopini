"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "AMI Labs",
    billions: 1.03,
    round: "Seed, Mar 2026",
    highlight: true,
  },
  {
    name: "Thinking Machines",
    billions: 2.0,
    round: "Seed, Jul 2025",
    highlight: false,
  },
  {
    name: "SSI",
    billions: 2.0,
    round: "Safe Superintelligence, 2025",
    highlight: false,
  },
  {
    name: "World Labs",
    billions: 1.0,
    round: "Series B, Feb 2026",
    highlight: false,
  },
  {
    name: "Anthropic",
    billions: 3.5,
    round: "Series E, Mar 2025",
    highlight: false,
  },
];

function formatBillions(value: number): string {
  if (value >= 1) return `$${value.toFixed(value % 1 === 0 ? 0 : 2)}B`;
  return `$${(value * 1000).toFixed(0)}M`;
}

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
      <p className="mt-1 text-stone-600">{formatBillions(item.billions)} raised</p>
      <p className="text-stone-400">{item.round}</p>
    </div>
  );
}

export function FrontierFundingChart() {
  return (
    <div className="w-full min-w-0">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 4, right: 12, left: 0, bottom: 16 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 4]}
            tickFormatter={(v) => formatBillions(v)}
            tick={{ fontSize: 10, fill: "#78716c" }}
            axisLine={{ stroke: "#d6d3d1" }}
            tickLine={false}
            label={{
              value: "USD (billions)",
              position: "insideBottom",
              offset: -4,
              style: { fontSize: 10, fill: "#a8a29e" },
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 10, fill: "#78716c" }}
            axisLine={false}
            tickLine={false}
            width={96}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="billions" radius={[0, 2, 2, 0]} maxBarSize={24}>
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.highlight ? "#1c1917" : "#d6d3d1"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
