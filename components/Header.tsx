
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-slate-800/50 flex items-center justify-between px-6 bg-[#020617]/80 backdrop-blur-md shrink-0">
      <nav className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">🧭 Wiki</a>
        <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">📡 Protocols</a>
        <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">🛰️ Comms</a>
        <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">📡 Radar</a>
      </nav>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="relative w-64 group">
          <input 
            type="text" 
            placeholder="Search systems..." 
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md py-1.5 pl-8 pr-4 text-xs focus:outline-none focus:border-cyan-500/50 transition-all"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400">🔍</span>
        </div>
        
        <div className="flex items-center gap-4 border-l border-slate-800 pl-4">
           <span className="text-xs font-semibold text-slate-400">Commander</span>
           <button className="text-slate-400 hover:text-white">🕒</button>
           <button className="text-slate-400 hover:text-white relative">
             🔔
             <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
           </button>
           <div className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-500/50 flex items-center justify-center text-cyan-400 overflow-hidden">
             <img src="https://picsum.photos/id/1027/100/100" alt="avatar" className="opacity-80" />
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
