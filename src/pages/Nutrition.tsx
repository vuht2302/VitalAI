import React, { useState } from 'react';
import { 
  Utensils, 
  Flame, 
  Apple, 
  Coffee, 
  Moon, 
  Plus, 
  Search, 
  ChevronRight, 
  Sparkles,
  Send,
  Info,
  Zap,
  Droplets
} from 'lucide-react';
import { mockMeals, mockUser } from '../mockData';
import { motion } from 'motion/react';

const Nutrition = () => {
  const [chatMessage, setChatMessage] = useState('');
  
  const macros = [
    { label: 'Protein', value: 145, target: 160, color: 'bg-green-500', icon: Apple },
    { label: 'Carbs', value: 210, target: 250, color: 'bg-blue-500', icon: Coffee },
    { label: 'Fats', value: 65, target: 75, color: 'bg-orange-500', icon: Droplets },
  ];

  const stats = [
    { label: 'BMR', value: '1,842', unit: 'kcal', info: 'Basal Metabolic Rate' },
    { label: 'TDEE', value: '2,650', unit: 'kcal', info: 'Total Daily Energy Expenditure' },
    { label: 'Daily Target', value: '2,150', unit: 'kcal', info: 'Current Calorie Goal' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-zinc-900">Nutrition Dashboard</h1>
          <p className="text-zinc-500 font-medium mt-1">Fuel your body with precision and AI guidance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all">
            <Plus size={18} />
            <span>Log Meal</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
              <Info size={16} className="text-zinc-300 group-hover:text-zinc-500 transition-colors cursor-help" />
            </div>
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-display font-bold text-zinc-900">{stat.value}</h3>
              <span className="text-zinc-400 text-sm font-medium">{stat.unit}</span>
            </div>
            <p className="text-xs text-zinc-500 mt-2 font-medium">{stat.info}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-display font-bold text-zinc-900">Daily Macros</h2>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                <Flame size={18} className="text-orange-500" />
                <span>2,150 / 2,400 kcal</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {macros.map((macro) => (
                <div key={macro.label} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${macro.color} bg-opacity-10 text-opacity-100`}>
                        <macro.icon size={16} className={macro.color.replace('bg-', 'text-')} />
                      </div>
                      <span className="text-sm font-bold text-zinc-600">{macro.label}</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900">{macro.value}g</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(macro.value / macro.target) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${macro.color}`}
                    ></motion.div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    <span>{Math.round((macro.value / macro.target) * 100)}%</span>
                    <span>Target: {macro.target}g</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-display font-bold text-zinc-900">Meal History</h2>
              <button className="text-brand-600 text-sm font-bold hover:underline">View Weekly Plan</button>
            </div>
            <div className="space-y-6">
              {mockMeals.map((meal) => (
                <div key={meal.id} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-zinc-50 transition-all group cursor-pointer border border-transparent hover:border-zinc-100">
                  <div className="w-16 h-16 bg-zinc-100 rounded-2xl overflow-hidden flex items-center justify-center text-zinc-400 group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                    <Utensils size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-zinc-900">{meal.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-full">{meal.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                      <span>{meal.time}</span>
                      <span>•</span>
                      <span>P: {meal.protein}g</span>
                      <span>C: {meal.carbs}g</span>
                      <span>F: {meal.fat}g</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-zinc-900">{meal.calories}</p>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">kcal</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-zinc-900 h-[600px] rounded-[2rem] text-white flex flex-col overflow-hidden shadow-xl">
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold">AI Nutrition Coach</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-zinc-400">Online & Analyzing</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={14} />
                </div>
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                  Hi {mockUser.name.split(' ')[0]}! I've analyzed your lunch. You're slightly low on protein for your gain goal. Would you like a high-protein snack recommendation?
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <div className="bg-brand-600 p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed">
                  Yes, please! Something quick I can eat at work.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-brand-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Sparkles size={14} />
                </div>
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                  I recommend a Greek yogurt with a handful of almonds. It's about 25g of protein and will keep you full until dinner!
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask about your diet..." 
                  className="w-full bg-white/10 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-brand-500/50 outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-400 hover:text-brand-300 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-zinc-900 mb-6">Nutrition Tips</h3>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-50 rounded-2xl border-l-4 border-brand-500">
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Hydration is Key</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Drinking water before meals can help with portion control and metabolism.</p>
              </div>
              <div className="p-4 bg-zinc-50 rounded-2xl border-l-4 border-orange-500">
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Pre-Workout Fuel</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Eat complex carbs 2-3 hours before training for sustained energy levels.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
