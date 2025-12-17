
import React from 'react';
import { SecurityCategory } from '../types';
import { Shield, Database, Zap, Lock, BookOpen, Terminal, Globe, Code, UserX, Key } from 'lucide-react';

interface SidebarProps {
  activeCategory: SecurityCategory;
  onCategoryChange: (category: SecurityCategory) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange }) => {
  const navItems = [
    { name: SecurityCategory.CYBER_BASICS, icon: Globe },
    { name: SecurityCategory.SQL_BASICS, icon: Database },
    { name: SecurityCategory.SQL_INJECTION, icon: Zap },
    { name: SecurityCategory.XSS, icon: Code },
    { name: SecurityCategory.IDOR, icon: UserX },
    { name: SecurityCategory.AUTH_BROKEN, icon: Key },
    { name: SecurityCategory.PREVENTION, icon: Lock },
    { name: SecurityCategory.LABS, icon: Terminal },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 h-screen sticky top-0 hidden md:flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-900/20">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          CyberShield
        </h1>
      </div>
      
      <nav className="mt-4 px-4 flex-1 overflow-y-auto pb-6">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 px-2">
          Learning Path
        </div>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onCategoryChange(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1 ${
              activeCategory === item.name
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20 shadow-sm'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <item.icon className={`w-4 h-4 ${activeCategory === item.name ? 'text-blue-400' : 'text-slate-500'}`} />
            <span className="font-semibold text-xs tracking-wide text-left">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3 border border-slate-700/50">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-inner">
            U
          </div>
          <div>
            <div className="text-xs font-bold text-slate-200">Ethical Trainee</div>
            <div className="text-[10px] text-slate-500 font-medium">Progress: 15%</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
