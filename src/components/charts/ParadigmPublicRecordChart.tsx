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
    <div className="w-full min-w-0">
      <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
        {/* Fixed mobile width so grouped columns keep desktop scale; scroll instead of shrink */}
        <div className="h-[280px] w-[40rem] shrink-0 md:w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#78716c" }}
                axisLine={{ stroke: "#d6d3d1" }}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#78716c" }}
                axisLine={{ stroke: "#d6d3d1" }}
                tickLine={false}
                width={40}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Bar
                name="Latest valuation"
                dataKey="valuation"
                radius={[2, 2, 0, 0]}
                maxBarSize={40}
                fill="#78716c"
              />
              <Bar
                name="Capital raised"
                dataKey="funding"
                radius={[2, 2, 0, 0]}
                maxBarSize={40}
                fill="#d6d3d1"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-1 w-[40rem] text-center text-[10px] text-stone-400 md:w-full">
          USD billions
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-xs">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: PARADIGM_COLORS[item.paradigm].fill }}
            />
            <span className="text-stone-500">
              <span className="font-medium text-stone-700">{item.name}</span>
              <span className="hidden sm:inline">
                {" · "}
                {PARADIGM_COLORS[item.paradigm].label}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
