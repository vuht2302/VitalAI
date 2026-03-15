"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  ChevronRight,
  Download,
  Share2,
  Target,
  Scale,
  Zap,
  Plus,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { mockWeightHistory } from "../mockData";
import { motion } from "motion/react";

const Progress = () => {
  const calorieData = [
    { day: "Mon", calories: 1850, target: 2000 },
    { day: "Tue", calories: 2100, target: 2000 },
    { day: "Wed", calories: 1950, target: 2000 },
    { day: "Thu", calories: 2400, target: 2000 },
    { day: "Fri", calories: 2150, target: 2000 },
    { day: "Sat", calories: 2600, target: 2000 },
    { day: "Sun", calories: 1600, target: 2000 },
  ];

  const bodyCompData = [
    { name: "Muscle", value: 42, color: "#22c55e" },
    { name: "Fat", value: 18, color: "#f59e0b" },
    { name: "Water", value: 30, color: "#3b82f6" },
    { name: "Bone", value: 10, color: "#a1a1aa" },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-zinc-900">
            Progress & Analytics
          </h1>
          <p className="text-zinc-500 font-medium mt-1">
            Deep dive into your fitness journey data.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 p-3 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:bg-zinc-50 transition-colors font-bold text-sm">
            <Download size={18} />
            <span>Export Report</span>
          </button>
          <button className="flex items-center gap-2 p-3 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:bg-zinc-50 transition-colors font-bold text-sm">
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-display font-bold text-zinc-900">
                  Weight Tracker
                </h2>
                <p className="text-sm text-zinc-500 font-medium">
                  Last 30 days trend
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-display font-bold text-zinc-900">
                    78.5 kg
                  </p>
                  <p className="text-xs font-bold text-green-600 flex items-center justify-end gap-1">
                    <TrendingDown size={12} /> -1.7 kg this month
                  </p>
                </div>
                <button className="p-3 bg-zinc-100 rounded-xl text-zinc-600 hover:bg-brand-100 hover:text-brand-600 transition-colors">
                  <Plus size={20} />
                </button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockWeightHistory}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f4f4f5"
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis
                    domain={["dataMin - 1", "dataMax + 1"]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12, fontWeight: 500 }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      padding: "12px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#22c55e"
                    strokeWidth={4}
                    dot={{
                      r: 6,
                      fill: "#22c55e",
                      strokeWidth: 2,
                      stroke: "#fff",
                    }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-display font-bold text-zinc-900">
                  Calorie Consistency
                </h2>
                <p className="text-sm text-zinc-500 font-medium">
                  Daily intake vs. target goal
                </p>
              </div>
              <div className="flex bg-zinc-100 p-1 rounded-xl">
                <button className="px-4 py-1.5 bg-white rounded-lg text-sm font-bold text-zinc-900 shadow-sm">
                  Week
                </button>
                <button className="px-4 py-1.5 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
                  Month
                </button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={calorieData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f4f4f5"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#a1a1aa", fontSize: 12, fontWeight: 500 }}
                  />
                  <Tooltip
                    cursor={{ fill: "#f8fafc" }}
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      padding: "12px",
                    }}
                  />
                  <Bar dataKey="calories" radius={[6, 6, 0, 0]}>
                    {calorieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.calories > entry.target ? "#ef4444" : "#22c55e"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h2 className="text-lg font-display font-bold text-zinc-900 mb-6">
              Body Composition
            </h2>
            <div className="h-[200px] w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bodyCompData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {bodyCompData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {bodyCompData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium text-zinc-600">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-zinc-900">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-zinc-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">
                Milestone Reached!
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                You've maintained a 5-day calorie consistency streak. This is
                20% better than your last month's performance.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-brand-500 rounded-full"></div>
                </div>
                <span className="text-xs font-bold">80%</span>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-zinc-900 mb-6">
              Historical Data
            </h3>
            <div className="space-y-4">
              {[
                { label: "Avg. Steps", value: "8,432", trend: "+12%" },
                { label: "Avg. Sleep", value: "7.2h", trend: "-2%" },
                { label: "Active Days", value: "18/24", trend: "+5%" },
                { label: "Goal Progress", value: "68%", trend: "+8%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl"
                >
                  <span className="text-sm font-medium text-zinc-600">
                    {item.label}
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-bold text-zinc-900">
                      {item.value}
                    </p>
                    <p
                      className={`text-[10px] font-bold ${item.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                    >
                      {item.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Progress;
