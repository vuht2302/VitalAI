import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  CreditCard, 
  HelpCircle, 
  ChevronRight,
  Camera,
  Mail,
  Lock,
  Globe,
  Trash2,
  Save,
  Scale,
  Ruler,
  Target
} from 'lucide-react';
import { mockUser } from '../mockData';
import { motion } from 'motion/react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'physical', label: 'Physical Attributes', icon: Scale },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Privacy', icon: Shield },
    { id: 'billing', label: 'Subscription & Billing', icon: CreditCard },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header>
        <h1 className="text-3xl font-display font-bold text-zinc-900">Account Settings</h1>
        <p className="text-zinc-500 font-medium mt-1">Manage your account preferences and personal data.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${activeTab === tab.id ? 'bg-brand-600 text-white shadow-lg shadow-brand-200' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'}`}
            >
              <tab.icon size={20} />
              <span className="font-bold text-sm">{tab.label}</span>
              {activeTab !== tab.id && <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
            </button>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-8">
          {activeTab === 'profile' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
                <h2 className="text-xl font-display font-bold text-zinc-900 mb-8">Personal Information</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-zinc-50 shadow-lg">
                      <img src={mockUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-brand-600 text-white rounded-xl shadow-lg hover:bg-brand-700 transition-all">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div className="flex-1 space-y-1 text-center md:text-left">
                    <h3 className="text-lg font-bold text-zinc-900">{mockUser.name}</h3>
                    <p className="text-sm text-zinc-500 font-medium">Pro Member since January 2024</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-bold">Muscle Gain</span>
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-bold">Intermediate</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-600 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input type="text" defaultValue={mockUser.name} className="w-full pl-12 pr-4 py-3 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500/20 outline-none font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-600 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input type="email" defaultValue={mockUser.email} className="w-full pl-12 pr-4 py-3 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500/20 outline-none font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-600 ml-1">Location</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input type="text" defaultValue="San Francisco, CA" className="w-full pl-12 pr-4 py-3 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500/20 outline-none font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-600 ml-1">Timezone</label>
                    <select className="w-full px-4 py-3 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500/20 outline-none font-medium appearance-none">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="flex items-center justify-end gap-4">
                <button className="px-6 py-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Cancel</button>
                <button className="flex items-center gap-2 px-8 py-3 bg-brand-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all">
                  <Save size={18} />
                  <span>Save Changes</span>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'physical' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
                <h2 className="text-xl font-display font-bold text-zinc-900 mb-8">Physical Attributes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4 p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-600">Weight</span>
                      <Scale size={20} className="text-brand-500" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <input type="number" defaultValue={mockUser.weight} className="w-20 bg-transparent border-b-2 border-zinc-200 text-2xl font-display font-bold text-zinc-900 outline-none focus:border-brand-500" />
                      <span className="text-zinc-400 font-bold">kg</span>
                    </div>
                  </div>
                  <div className="space-y-4 p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-600">Height</span>
                      <Ruler size={20} className="text-blue-500" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <input type="number" defaultValue={mockUser.height} className="w-20 bg-transparent border-b-2 border-zinc-200 text-2xl font-display font-bold text-zinc-900 outline-none focus:border-brand-500" />
                      <span className="text-zinc-400 font-bold">cm</span>
                    </div>
                  </div>
                  <div className="space-y-4 p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-600">Age</span>
                      <User size={20} className="text-orange-500" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <input type="number" defaultValue={mockUser.age} className="w-20 bg-transparent border-b-2 border-zinc-200 text-2xl font-display font-bold text-zinc-900 outline-none focus:border-brand-500" />
                      <span className="text-zinc-400 font-bold">yrs</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
                  <h3 className="text-lg font-display font-bold text-zinc-900 flex items-center gap-2">
                    <Target size={20} className="text-brand-500" />
                    Fitness Goals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Weight Loss', 'Muscle Gain', 'Endurance', 'Flexibility', 'Maintenance', 'General Health'].map((goal) => (
                      <button 
                        key={goal}
                        className={`p-4 rounded-2xl border-2 text-sm font-bold transition-all ${goal === 'Muscle Gain' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-zinc-100 text-zinc-500 hover:border-zinc-200'}`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <div className="bg-brand-600 p-8 rounded-[2rem] text-white flex items-center justify-between shadow-lg shadow-brand-200">
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold">AI Body Analysis</h3>
                  <p className="text-brand-100 text-sm max-w-md">Update your measurements every 2 weeks for the most accurate AI coaching and progress tracking.</p>
                </div>
                <button className="px-6 py-3 bg-white text-brand-600 rounded-2xl font-bold text-sm hover:bg-brand-50 transition-colors">
                  Start Analysis
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm space-y-8"
            >
              <h2 className="text-xl font-display font-bold text-zinc-900">Notification Preferences</h2>
              <div className="space-y-6">
                {[
                  { title: 'Workout Reminders', desc: 'Get notified when it\'s time for your scheduled workout.' },
                  { title: 'Meal Tracking', desc: 'Reminders to log your breakfast, lunch, and dinner.' },
                  { title: 'AI Insights', desc: 'Receive personalized health tips and performance analysis.' },
                  { title: 'Weekly Progress Report', desc: 'A summary of your weekly achievements and stats.' },
                  { title: 'Social Interactions', desc: 'When friends like your workouts or comment on progress.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between py-4 border-b border-zinc-100 last:border-0">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
