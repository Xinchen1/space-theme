
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
      {/* Decorative scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-20 w-full animate-scanline opacity-20"></div>

      {/* Brand & Logo */}
      <div className="p-8 border-b border-slate-800/50">
        <div className="flex items-center gap-3 mb-2">
           <div className="w-10 h-10 flex items-center justify-center border-2 border-cyan-500/50 rounded-sm transform rotate-45 group relative overflow-hidden">
             <div className="transform -rotate-45 text-cyan-400 font-bold text-xl italic group-hover:scale-110 transition-transform">N</div>
             <div className="absolute inset-0 bg-cyan-500/10"></div>
           </div>
           <div>
             <h1 className="text-2xl font-orbitron font-bold text-cyan-400 tracking-tighter italic leading-none">NOVA</h1>
             <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.25em] mt-1 whitespace-nowrap">GALACTIC COMMAND</p>
           </div>
        </div>
      </div>

      {/* Pilot Status */}
      <div className="p-6 space-y-5 overflow-y-auto">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-l-2 border-cyan-500 pl-2">Pilot Statistics</div>
        
        <div className="flex items-center gap-3 p-3 rounded bg-slate-950/80 border border-cyan-900/30 shadow-lg">
          <div className="w-12 h-12 rounded-sm bg-cyan-950 flex items-center justify-center border border-cyan-500/50 text-cyan-400">
            <img src="https://picsum.photos/id/1027/100/100" alt="avatar" className="w-full h-full object-cover rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1">
              Commander
            </div>
            <div className="text-[9px] text-cyan-500 font-bold tracking-widest uppercase">ID: 4056171</div>
          </div>
        </div>

        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between py-1 border-b border-slate-800/30">
            <span className="text-slate-500">Credits:</span>
            <span className="text-yellow-500 font-bold tracking-tight">¢ 7,500</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800/30">
            <span className="text-slate-500">XP Points:</span>
            <span className="text-white">0</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-800/30">
            <span className="text-slate-500">Global Rank:</span>
            <span className="text-white">Ensign</span>
          </div>
        </div>

        <div className="pt-2 space-y-4">
          <StatBar label="Core Power" value={100} max={100} color="text-cyan-400" />
          <StatBar label="Kinetic Shield" value={15} max={15} color="text-purple-400" />
          <StatBar label="Unit Morale" value={100} max={100} color="text-yellow-400" />
          <StatBar label="Structure" value={100} max={100} color="text-green-400" />
        </div>
      </div>

      {/* Navigation */}
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
