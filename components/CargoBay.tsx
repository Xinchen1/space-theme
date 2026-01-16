
import React from 'react';

const CargoBay: React.FC = () => {
  const systems = [
    { label: 'Firepower', value: 10, icon: '⚡' },
    { label: 'Shields', value: 10, icon: '🛡️' },
    { label: 'Thrusters', value: 10, icon: '🚀' },
    { label: 'Targeting', value: 10, icon: '🎯' },
  ];

  const crewSkills = [
    { label: 'Engineering', value: 0, icon: '🔧' },
    { label: 'Navigation', value: 0, icon: '🧭' },
    { label: 'Endurance', value: 0, icon: '🔋' },
  ];

  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-orbitron font-bold text-white tracking-tight flex items-center gap-4">
          <span className="text-cyan-500">▶</span> Cargo Bay
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Combat Systems */}
        <div className="glass-panel rounded-md overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Combat Systems</h3>
            <div className="flex gap-2 text-slate-500">
               <button className="hover:text-white transition-colors">✚</button>
               <button className="hover:text-white transition-colors">▼</button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {systems.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-xs hover:bg-slate-800/20 p-2 rounded transition-colors cursor-default">
                <div className="flex items-center gap-3">
                   <span className="text-cyan-400 opacity-70">{s.icon}</span>
                   <span className="text-slate-400">{s.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 font-bold">{s.value}</span>
                  <span className="text-slate-600 font-mono">+0%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crew Skills */}
        <div className="glass-panel rounded-md overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Crew Skills</h3>
            <div className="flex gap-2 text-slate-500">
               <button className="hover:text-white transition-colors">✚</button>
               <button className="hover:text-white transition-colors">▼</button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {crewSkills.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-xs hover:bg-slate-800/20 p-2 rounded transition-colors">
                <div className="flex items-center gap-3">
                   <span className="text-purple-400 opacity-70">{s.icon}</span>
                   <span className="text-slate-400">{s.label}</span>
                </div>
                <span className="text-red-500 font-bold font-mono">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipped Loadout Grid - Images removed as requested */}
      <div className="glass-panel rounded-md overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
          <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Equipped Loadout</h3>
          <div className="flex gap-2 text-slate-500">
             <button className="hover:text-white transition-colors">✚</button>
             <button className="hover:text-white transition-colors">▼</button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-black/20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-slate-900/50 border border-slate-800 rounded-md flex items-center justify-center group hover:border-cyan-500/50 hover:bg-cyan-950/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all cursor-pointer relative"
            >
               <div className="w-10 h-10 rounded-sm bg-slate-950/80 border border-slate-700 group-hover:border-cyan-500/50 flex items-center justify-center transition-all">
                  <span className="text-slate-700 font-orbitron group-hover:text-cyan-500/40 text-sm">?</span>
               </div>
               {/* Inner glow effect for empty slots */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-cyan-500/0 to-cyan-500 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CargoBay;
