"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/** Both figures are ~10¹⁴ bytes, as LeCun presents at ETH Zürich ~00:10:17. */
const data = [
  {
    name: "LLMs (text)",
    bytes: 1e14,
    display: "~10¹⁴ bytes",
    detail: "≈ 20–30 trillion tokens × ~3 bytes/token",
  },
  {
    name: "Child (vision)",
    bytes: 1e14,
    display: "~10¹⁴ bytes",
    detail: "≈ optic nerve bandwidth over waking hours",
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
      <p className="mt-1 text-stone-600">{item.display}</p>
      <p className="mt-1 text-stone-400">{item.detail}</p>
    </div>
  );
}

export function DataVolumeChart() {
  return (
    <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
      {/* Fixed mobile width so columns keep desktop scale; scroll instead of shrink */}
      <div className="h-[260px] w-[32rem] shrink-0 md:h-[280px] md:w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 28, right: 16, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#78716c" }}
              axisLine={{ stroke: "#d6d3d1" }}
              tickLine={false}
              interval={0}
            />
            <YAxis hide domain={[0, 1.2e14]} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="bytes" radius={[2, 2, 0, 0]} maxBarSize={112}>
              <Cell fill="#1c1917" />
              <Cell fill="#1c1917" />
              <LabelList
                dataKey="display"
                position="top"
                style={{ fontSize: 12, fill: "#44403c", fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 w-[32rem] text-center text-xs text-stone-400 md:w-full">
        Same approximate volume. Different source, time, and what you get from it.
      </p>
    </div>
  );
}
