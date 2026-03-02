import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  TrendingUp, 
  Utensils, 
  Settings, 
  LogOut,
  Dumbbell,
  Heart,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Calendar, label: 'Workouts', path: '/workouts' },
    { icon: TrendingUp, label: 'Progress', path: '/progress' },
    { icon: Utensils, label: 'Nutrition', path: '/nutrition' },
    { icon: Heart, label: 'Blog', path: '/blog' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-zinc-200 flex flex-col sticky top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-200">
          <Zap size={24} fill="currentColor" />
        </div>
        <span className="text-xl font-display font-bold tracking-tight">Vital.ai</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-brand-50 text-brand-700 font-medium" 
                : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              "group-hover:text-brand-600"
            )} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-100">
        <div className="bg-zinc-900 rounded-2xl p-4 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">Pro Plan</p>
            <p className="text-sm font-semibold mb-3">Unlock AI Coach</p>
            <button className="w-full py-2 bg-white text-zinc-900 rounded-lg text-xs font-bold hover:bg-brand-400 transition-colors">
              Upgrade Now
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Zap size={80} />
          </div>
        </div>
        
        <button className="w-full mt-4 flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-600 transition-colors rounded-xl hover:bg-red-50">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
