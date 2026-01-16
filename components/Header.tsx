
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'WIKI', icon: '📚' },
    { name: 'RULES', icon: '📜' },
    { name: 'FORUMS', icon: '💬' },
    { name: 'DISCORD', icon: '🌐' },
    { name: 'STAFF', icon: '🛡️' },
    { name: 'CREDITS', icon: '💳' },
  ];

  return (
    <header className="h-16 border-b border-slate-800/50 flex items-center justify-between px-6 bg-[#020617]/80 backdrop-blur-md shrink-0 relative z-10">
      <nav className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        {navLinks.map((link) => (
          <a key={link.name} href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 group">
            <span className="text-sm group-hover:scale-125 transition-transform">{link.icon}</span> {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="relative w-64 group">
          <input 
            type="text" 
            placeholder="Scan frequencies..." 
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md py-1.5 pl-8 pr-4 text-xs focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400">🔍</span>
        </div>
        
        <div className="flex items-center gap-4 border-l border-slate-800 pl-4 ml-2">
           <div className="flex flex-col items-end">
             <span className="text-[10px] font-bold text-white leading-none">COMMANDER</span>
             <span className="text-[8px] text-cyan-500 font-bold uppercase tracking-tighter">Status: Active</span>
           </div>
           <div className="w-8 h-8 rounded-full bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 overflow-hidden relative group cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]">
             <img src="https://picsum.photos/id/1027/100/100" alt="avatar" className="opacity-70 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 border border-cyan-400/20 rounded-full"></div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
