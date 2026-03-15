"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Dumbbell,
  Clock,
  Flame,
  CheckCircle2,
  Circle,
  Calendar as CalendarIcon,
  Filter,
  MoreVertical,
  Play,
} from "lucide-react";
import { mockWorkouts } from "../mockData";
import { motion } from "motion/react";

const WorkoutPlanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [viewMode, setViewMode] = useState<"list" | "flow">("list");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [19, 20, 21, 22, 23, 24, 25];

  const nodes = [
    { id: "1", label: "Warm Up", x: 50, y: 50, type: "start" },
    { id: "2", label: "Main Set 1", x: 200, y: 50, type: "action" },
    { id: "3", label: "Main Set 2", x: 350, y: 50, type: "action" },
    { id: "4", label: "Cool Down", x: 500, y: 50, type: "end" },
  ];

  const edges = [
    { from: "1", to: "2" },
    { from: "2", to: "3" },
    { from: "3", to: "4" },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-zinc-900">
            Workout Planner
          </h1>
          <p className="text-zinc-500 font-medium mt-1">
            Plan your week and track your performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-100 p-1 rounded-xl mr-2">
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === "list" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode("flow")}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${viewMode === "flow" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-900"}`}
            >
              Flow View
            </button>
          </div>
          <button className="p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 hover:bg-zinc-50 transition-colors">
            <Filter size={20} />
          </button>
          <button className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all">
            <Plus size={18} />
            <span>Schedule Workout</span>
          </button>
        </div>
      </header>

      {viewMode === "flow" ? (
        <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm min-h-[400px] relative overflow-hidden">
          <h2 className="text-xl font-display font-bold text-zinc-900 mb-8">
            Workout Sequence Flow
          </h2>
          <div className="relative h-[200px] flex items-center justify-between px-12">
            {nodes.map((node, idx) => (
              <React.Fragment key={node.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center text-center p-4 shadow-lg relative z-10 ${
                    node.type === "start"
                      ? "bg-brand-600 text-white"
                      : node.type === "end"
                        ? "bg-zinc-900 text-white"
                        : "bg-white border-2 border-brand-100 text-zinc-900"
                  }`}
                >
                  <Dumbbell size={24} className="mb-2" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {node.label}
                  </span>
                </motion.div>
                {idx < nodes.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="flex-1 h-1 bg-brand-100 relative mx-2"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-200 rounded-full rotate-45 border-t-2 border-r-2 border-brand-400"></div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <p className="text-sm font-medium text-zinc-500 italic">
              * This flow builder allows you to visualize the sequence of your
              exercises. Drag and drop to reorder (Coming soon).
            </p>
          </div>
        </section>
      ) : (
        <>
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-display font-bold text-zinc-900">
                  May 2024
                </h2>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-zinc-900">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-zinc-900">
                    <ChevronRight size={20} />
                  </button>
                </div>
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

            <div className="grid grid-cols-7 gap-4">
              {days.map((day, idx) => (
                <div key={day} className="text-center">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    {day}
                  </p>
                  <button
                    className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${dates[idx] === 24 ? "bg-brand-600 text-white shadow-lg shadow-brand-200 scale-110 z-10" : "hover:bg-zinc-50 text-zinc-900"}`}
                  >
                    <span className="text-lg font-bold">{dates[idx]}</span>
                    {dates[idx] % 3 === 0 && (
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${dates[idx] === 24 ? "bg-white" : "bg-brand-500"}`}
                      ></div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-display font-bold text-zinc-900">
                  Today's Schedule
                </h3>
                <span className="text-sm font-bold text-zinc-400">
                  3 Workouts Planned
                </span>
              </div>

              <div className="space-y-4">
                {mockWorkouts.map((workout, idx) => (
                  <motion.div
                    key={workout.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden ${workout.completed ? "opacity-75" : ""}`}
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${workout.completed ? "bg-green-50 text-green-600" : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white"}`}
                      >
                        {workout.completed ? (
                          <CheckCircle2 size={32} />
                        ) : (
                          <Dumbbell size={32} />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4
                            className={`text-lg font-bold ${workout.completed ? "text-zinc-400 line-through" : "text-zinc-900"}`}
                          >
                            {workout.title}
                          </h4>
                          {workout.completed && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              Completed
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} /> {workout.duration} mins
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Flame size={14} /> {workout.calories} kcal
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CalendarIcon size={14} /> 09:30 AM
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {!workout.completed && (
                          <button className="p-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all">
                            <Play size={20} fill="currentColor" />
                          </button>
                        )}
                        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>

                    {!workout.completed && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-600"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <section className="bg-zinc-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-6">
                    AI Recommendations
                  </h3>
                  <div className="space-y-6">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">
                        Next Session
                      </p>
                      <h4 className="font-bold mb-1">HIIT Cardio Blast</h4>
                      <p className="text-sm text-zinc-400 mb-4">
                        Focus on explosive movements to boost metabolism.
                      </p>
                      <button className="w-full py-2 bg-brand-500 text-white rounded-xl text-sm font-bold hover:bg-brand-600 transition-colors">
                        Add to Schedule
                      </button>
                    </div>
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                      <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">
                        Recovery Tip
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        You've had 3 heavy lifting days. Consider a light yoga
                        session or active recovery tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-12 -top-12 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl"></div>
              </section>

              <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
                <h3 className="text-lg font-display font-bold text-zinc-900 mb-6">
                  Workout Categories
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Strength",
                    "Cardio",
                    "Yoga",
                    "HIIT",
                    "Pilates",
                    "Boxing",
                  ].map((cat) => (
                    <button
                      key={cat}
                      className="p-4 bg-zinc-50 rounded-2xl text-sm font-bold text-zinc-600 hover:bg-brand-50 hover:text-brand-600 transition-all border border-transparent hover:border-brand-100"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkoutPlanner;
