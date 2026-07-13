"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const PARADIGM_COLORS = {
  llm: { fill: "#2563eb", label: "Autoregressive LLMs" },
  spatial: { fill: "#9333ea", label: "Spatial / 3D generative" },
  jepa: { fill: "#d97706", label: "World models (JEPA)" },
} as const;

/** Public record as of July 2026. One exemplar company per paradigm. */
const data = [
  {
    name: "Anthropic",
    paradigm: "llm" as const,
    label: "LLMs",
    valuation: 61.5,
    funding: 18.2,
    valuationDate: "Mar 2025",
    fundingNote: "Total disclosed (Series E)",
  },
  {
    name: "World Labs",
    paradigm: "spatial" as const,
    label: "Spatial / 3D",
    valuation: 5,
    funding: 1.23,
    valuationDate: "Feb 2026",
    fundingNote: "Total disclosed",
  },
  {
    name: "AMI Labs",
    paradigm: "jepa" as const,
    label: "World models",
    valuation: 3.5,
    funding: 1.03,
    valuationDate: "Mar 2026",
    fundingNote: "Seed round only",
  },
];

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: (typeof data)[0]; dataKey: string; value: number }[];
}) {
  if (!active || !payload?.[0]) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-sm border border-stone-200 bg-white px-3 py-2 text-xs shadow-sm">
      <p className="font-semibold text-stone-800">
        {item.name} ({item.label})
      </p>
      <p className="mt-1 text-stone-600">Valuation: ${item.valuation}B ({item.valuationDate})</p>
      <p className="text-stone-600">
        Funding: ${item.funding}B ({item.fundingNote.toLowerCase()})
      </p>
    </div>
  );
}

export function ParadigmPublicRecordChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#78716c" }}
            axisLine={{ stroke: "#d6d3d1" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#78716c" }}
            axisLine={{ stroke: "#d6d3d1" }}
            tickLine={false}
            label={{
              value: "USD billions",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { fontSize: 11, fill: "#a8a29e" },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
          <Bar
            name="Latest valuation"
            dataKey="valuation"
            radius={[2, 2, 0, 0]}
            maxBarSize={36}
            fill="#78716c"
          />
          <Bar
            name="Capital raised"
            dataKey="funding"
            radius={[2, 2, 0, 0]}
            maxBarSize={36}
            fill="#d6d3d1"
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-xs">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: PARADIGM_COLORS[item.paradigm].fill }}
            />
            <span className="text-stone-500">
              <span className="font-medium text-stone-700">{item.name}</span>
              {" · "}
              {PARADIGM_COLORS[item.paradigm].label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
