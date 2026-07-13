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
    name: "Thinking Mach.",
    billions: 2.0,
    round: "Thinking Machines · Seed, Jul 2025",
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
    <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
      <div className="h-[280px] w-[36rem] shrink-0 md:w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 16, left: 4, bottom: 16 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 4]}
              tickFormatter={(v) => formatBillions(v)}
              tick={{ fontSize: 11, fill: "#78716c" }}
              axisLine={{ stroke: "#d6d3d1" }}
              tickLine={false}
              label={{
                value: "USD (billions)",
                position: "insideBottom",
                offset: -4,
                style: { fontSize: 11, fill: "#a8a29e" },
              }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 11, fill: "#78716c" }}
              axisLine={false}
              tickLine={false}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="billions" radius={[0, 2, 2, 0]} maxBarSize={28}>
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
    </div>
  );
}
