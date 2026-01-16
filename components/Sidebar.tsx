
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'Command Center', icon: '🚀' },
    { id: 'Cargo Bay', icon: '📦' },
    { id: 'Space Station', icon: '🛰️' },
    { id: 'Contracts', icon: '📜' },
    { id: 'Training Bay', icon: '🎯' },
  ];

  const StatBar = ({ label, value, max, color }: { label: string, value: number, max: number, color: string }) => (
    <div className="mb-3">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
        <span>{label}:</span>
        <span className={color}>{value}/{max}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 rounded-full ${color === 'text-cyan-400' ? 'bg-cyan-500 shadow-[0_0_5px_#06b6d4]' : color === 'text-purple-400' ? 'bg-purple-500' : color === 'text-yellow-400' ? 'bg-yellow-500' : 'bg-green-500'}`} 
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-64 bg-[#0a0f1e] border-r border-slate-800 flex flex-col h-full overflow-hidden shrink-0 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-20 w-full animate-scanline opacity-20"></div>

      {/* Brand & Logo - Updated with precise 45-degree flame lines */}
      <div className="p-8 border-b border-slate-800/50 bg-gradient-to-b from-cyan-950/10 to-transparent">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transform rotate-45">
                {/* Movement Lines / Flames - Aligned to the 45-degree axis of flight */}
                <path d="M40 85 L30 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-30" />
                <path d="M50 82 L42 105" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-60 animate-pulse" />
                <path d="M60 85 L70 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-30" />
                
                {/* Ship Body */}
                <path d="M85 65C85 65 78 58 75 52C70 42 70 20 50 15C30 20 30 42 25 52C22 58 15 65 15 65C15 65 20 78 35 80C38 80 42 75 50 75C58 75 62 80 65 80C80 78 85 65 85 65Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="50" cy="45" r="6" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </div>
            <h1 className="text-4xl font-orbitron font-bold text-cyan-400 tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">NOVA</h1>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em] whitespace-nowrap">GALACTIC COMMAND</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5 overflow-y-auto">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-l-2 border-cyan-500 pl-2">Pilot Statistics</div>
        
        <div className="flex items-center gap-3 p-3 rounded bg-slate-950/80 border border-cyan-900/30 shadow-lg">
          <div className="w-12 h-12 rounded-sm bg-cyan-950 flex items-center justify-center border border-cyan-500/50 text-cyan-400 overflow-hidden">
            <img src="https://picsum.photos/id/1027/100/100" alt="avatar" className="w-full h-full object-cover opacity-60" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1">Commander</div>
            <div className="text-[9px] text-cyan-500 font-bold tracking-widest uppercase">ID: 4056171</div>
          </div>
        </div>

        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between py-1 border-b border-slate-800/30">
            <span className="text-slate-500">Credits:</span>
            <span className="text-yellow-500 font-bold">¢ 7,500</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800/30">
            <span className="text-slate-500">XP Points:</span>
            <span className="text-white">0</span>
          </div>
        </div>

        <div className="pt-2 space-y-4">
          <StatBar label="Core Power" value={100} max={100} color="text-cyan-400" />
          <StatBar label="Structure" value={100} max={100} color="text-green-400" />
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-slate-800/50 bg-slate-900/20">
        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3 px-3">System Directory</div>
        <div className="space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs rounded transition-all duration-300 group ${
                activeTab === item.id 
                ? 'bg-cyan-500/10 text-cyan-400 border-r-4 border-cyan-500 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]' 
                : 'text-slate-500 hover:bg-slate-800/40 hover:text-slate-200'
              }`}
            >
              <span className={`text-base transform group-hover:scale-125 transition-transform ${activeTab === item.id ? 'opacity-100' : 'opacity-50'}`}>{item.icon}</span>
              <span className="font-bold uppercase tracking-wider">{item.id}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
