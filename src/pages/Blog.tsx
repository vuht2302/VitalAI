import React from 'react';
import { Search, Tag, Clock, ChevronRight, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Better Sleep and Recovery",
      excerpt: "Quality sleep is the foundation of any successful fitness journey. Learn how to optimize your rest...",
      author: "Dr. Sarah Chen",
      date: "May 22, 2024",
      readTime: "5 min read",
      category: "Recovery",
      image: "https://picsum.photos/seed/sleep/800/400"
    },
    {
      id: 2,
      title: "The Truth About Protein: How Much Do You Really Need?",
      excerpt: "Protein is essential for muscle growth, but more isn't always better. We break down the science...",
      author: "Mark Thompson",
      date: "May 20, 2024",
      readTime: "8 min read",
      category: "Nutrition",
      image: "https://picsum.photos/seed/protein/800/400"
    },
    {
      id: 3,
      title: "Mastering the Squat: Common Mistakes to Avoid",
      excerpt: "The squat is the king of all exercises, but poor form can lead to injury. Here's how to do it right...",
      author: "Coach Alex",
      date: "May 18, 2024",
      readTime: "12 min read",
      category: "Training",
      image: "https://picsum.photos/seed/squat/800/400"
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-zinc-900">Vital Blog</h1>
          <p className="text-zinc-500 font-medium mt-1">Expert advice on fitness, nutrition, and wellness.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input type="text" placeholder="Search articles..." className="w-full pl-12 pr-4 py-2.5 bg-white border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-brand-500/20 outline-none text-sm font-medium" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="aspect-[2/1] overflow-hidden">
              <img src={posts[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-wider">{posts[0].category}</span>
                <span className="text-zinc-400 text-xs font-bold flex items-center gap-1"><Clock size={14} /> {posts[0].readTime}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-zinc-900 mb-3 group-hover:text-brand-600 transition-colors">{posts[0].title}</h2>
              <p className="text-zinc-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{posts[0].author}</p>
                    <p className="text-xs text-zinc-400 font-medium">{posts[0].date}</p>
                  </div>
                </div>
                <button className="p-3 text-zinc-400 hover:text-brand-600 transition-colors">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-zinc-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
                    <span className="text-xs font-bold text-zinc-400">{post.date}</span>
                    <ChevronRight size={18} className="text-zinc-300 group-hover:text-brand-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-zinc-900 mb-6">Categories</h3>
            <div className="space-y-2">
              {['Training', 'Nutrition', 'Recovery', 'Mindset', 'Lifestyle', 'AI & Tech'].map((cat) => (
                <button key={cat} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                  <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-900">{cat}</span>
                  <span className="text-xs font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-lg group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">12</span>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-zinc-900 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold mb-4">Weekly Newsletter</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Get the latest fitness insights and AI tips delivered to your inbox.</p>
              <input type="email" placeholder="Your email" className="w-full bg-white/10 border-none rounded-xl py-3 px-4 text-sm mb-3 focus:ring-2 focus:ring-brand-500/50 outline-none" />
              <button className="w-full py-3 bg-brand-500 text-white rounded-xl font-bold text-sm hover:bg-brand-600 transition-colors">Subscribe</button>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-zinc-900 mb-6">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['#HIIT', '#VeganDiet', '#SleepHacks', '#MuscleGain', '#Keto', '#YogaFlow', '#Biohacking'].map((tag) => (
                <button key={tag} className="px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-xl text-xs font-bold hover:bg-brand-50 hover:text-brand-600 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
