import React from 'react';
import { 
  Footprints, 
  Flame, 
  Clock, 
  Moon, 
  Droplets, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Dumbbell,
  Target,
  Calendar,
  Utensils
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { mockDailyStats, mockWorkouts, mockMeals, mockUser } from '../mockData';
import { motion } from 'motion/react';

const StatCard = ({ icon: Icon, label, value, unit, color, trend }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-opacity-100`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
      {trend && (
        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${trend > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <div>
      <p className="text-zinc-500 text-sm font-medium mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <h3 className="text-2xl font-display font-bold text-zinc-900">{value}</h3>
        <span className="text-zinc-400 text-sm font-medium">{unit}</span>
      </div>
    </div>
    <div className="mt-4 h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
      <div className={`h-full ${color} w-3/4 rounded-full`}></div>
    </div>
  </motion.div>
);

const Dashboard = () => {
  const chartData = [
    { name: 'Mon', steps: 6500, calories: 1800 },
    { name: 'Tue', steps: 8200, calories: 2100 },
    { name: 'Wed', steps: 7800, calories: 1950 },
    { name: 'Thu', steps: 9400, calories: 2400 },
    { name: 'Fri', steps: 8432, calories: 2150 },
    { name: 'Sat', steps: 10200, calories: 2600 },
    { name: 'Sun', steps: 5200, calories: 1600 },
  ];

  const nutritionData = [
    { name: 'Protein', value: 145, target: 160, color: '#22c55e' },
    { name: 'Carbs', value: 210, target: 250, color: '#3b82f6' },
    { name: 'Fats', value: 65, target: 75, color: '#f59e0b' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-display font-bold text-zinc-900"
          >
            Welcome back, {mockUser.name.split(' ')[0]}! 👋
          </motion.h1>
          <p className="text-zinc-500 font-medium mt-1">You're on track to hit your weekly goal.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-zinc-100 rounded-2xl text-sm font-bold text-zinc-600 flex items-center gap-2">
            <Calendar size={16} />
            <span>May 24, 2024</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Footprints} 
          label="Daily Steps" 
          value={mockDailyStats.steps.toLocaleString()} 
          unit="steps" 
          color="bg-brand-500" 
          trend={12}
        />
        <StatCard 
          icon={Flame} 
          label="Calories Burned" 
          value={mockDailyStats.calories.toLocaleString()} 
          unit="kcal" 
          color="bg-orange-500" 
          trend={8}
        />
        <StatCard 
          icon={Clock} 
          label="Active Time" 
          value={mockDailyStats.activeMinutes} 
          unit="mins" 
          color="bg-blue-500" 
          trend={-5}
        />
        <StatCard 
          icon={Moon} 
          label="Sleep Score" 
          value={mockDailyStats.sleepScore} 
          unit="/ 100" 
          color="bg-indigo-500" 
          trend={4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-display font-bold text-zinc-900">Activity Overview</h2>
                <p className="text-sm text-zinc-500 font-medium">Weekly steps and calorie trends</p>
              </div>
              <select className="bg-zinc-50 border-none rounded-xl px-4 py-2 text-sm font-bold text-zinc-600 outline-none focus:ring-2 focus:ring-brand-500/20">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="steps" 
                    stroke="#22c55e" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorSteps)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-display font-bold text-zinc-900">Recent Workouts</h2>
                <button className="text-brand-600 text-sm font-bold hover:underline flex items-center gap-1">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {mockWorkouts.slice(0, 3).map((workout) => (
                  <div key={workout.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors group cursor-pointer border border-transparent hover:border-zinc-100">
                    <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                      <Dumbbell size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-zinc-900">{workout.title}</h4>
                      <p className="text-xs font-medium text-zinc-500">{workout.type} • {workout.duration} mins</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-zinc-900">{workout.calories} kcal</p>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{workout.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-brand-500 rounded-lg">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">AI Insights</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 leading-tight">Your recovery is excellent today!</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Based on your sleep quality and heart rate variability, you're in the optimal zone for a high-intensity session.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-brand-400 hover:text-brand-300 transition-colors">
                  See full analysis <ArrowRight size={16} />
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl"></div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display font-bold text-zinc-900">Nutrition</h2>
              <Utensils size={20} className="text-zinc-400" />
            </div>
            <div className="space-y-6">
              {nutritionData.map((macro) => (
                <div key={macro.name}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-zinc-600">{macro.name}</span>
                    <span className="text-zinc-900">{macro.value}g <span className="text-zinc-400 font-medium">/ {macro.target}g</span></span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(macro.value / macro.target) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: macro.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-zinc-900">Daily Water</h4>
                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">75% Goal</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div 
                    key={i} 
                    className={`flex-1 h-8 rounded-lg transition-all duration-300 ${i <= 6 ? 'bg-blue-500 shadow-sm shadow-blue-200' : 'bg-zinc-100'}`}
                  ></div>
                ))}
              </div>
              <p className="text-center text-xs font-medium text-zinc-500 mt-3">2.4L of 3.2L consumed</p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                <Target size={20} />
              </div>
              <h2 className="text-lg font-display font-bold text-zinc-900">Weekly Goal</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl">
                <span className="text-sm font-medium text-zinc-600">Workouts</span>
                <span className="text-sm font-bold text-zinc-900">3 / 5</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl">
                <span className="text-sm font-medium text-zinc-600">Avg. Sleep</span>
                <span className="text-sm font-bold text-zinc-900">7.4 hrs</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl">
                <span className="text-sm font-medium text-zinc-600">Weight Change</span>
                <span className="text-sm font-bold text-green-600">-0.4 kg</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border-2 border-zinc-100 rounded-2xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition-colors">
              Adjust Goals
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
