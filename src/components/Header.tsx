import React from 'react';
import { Bell, Search, User, ChevronDown, Plus } from 'lucide-react';
import { mockUser } from '../mockData';

const Header = () => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-zinc-200 px-8 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-brand-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search workouts, meals, or analytics..." 
            className="w-full pl-12 pr-4 py-2.5 bg-zinc-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none text-sm font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all hover:scale-105 active:scale-95">
          <Plus size={18} />
          <span>Log Activity</span>
        </button>

        <div className="h-8 w-[1px] bg-zinc-200"></div>

        <div className="flex items-center gap-4">
          <button className="relative p-2.5 text-zinc-500 hover:bg-zinc-100 rounded-xl transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-zinc-900 leading-tight group-hover:text-brand-600 transition-colors">{mockUser.name}</p>
              <p className="text-xs font-medium text-zinc-500 leading-tight">Pro Member</p>
            </div>
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-zinc-100 group-hover:border-brand-200 transition-all">
              <img src={mockUser.avatar} alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <ChevronDown size={16} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
