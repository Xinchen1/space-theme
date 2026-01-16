
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
        <h2 className="text-3xl font-orbitron font-bold text-white tracking-tight">Cargo Bay</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Combat Systems */}
        <div className="glass-panel rounded-md overflow-hidden">
          <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Combat Systems</h3>
            <div className="flex gap-2 text-slate-500">
               <button className="hover:text-white">+</button>
               <button className="hover:text-white">v</button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {systems.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-xs hover:bg-slate-800/20 p-1 rounded transition-colors cursor-default">
                <div className="flex items-center gap-3">
                   <span className="text-cyan-400 opacity-70">{s.icon}</span>
                   <span className="text-slate-400">{s.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400 font-bold">{s.value}</span>
                  <span className="text-slate-600">+0%</span>
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-slate-800/50 flex justify-between text-xs">
               <span className="text-slate-500 uppercase font-bold tracking-widest">Total</span>
               <span className="text-cyan-400 font-bold">40</span>
            </div>
          </div>
        </div>

        {/* Crew Skills */}
        <div className="glass-panel rounded-md overflow-hidden">
          <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
            <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Crew Skills</h3>
            <div className="flex gap-2 text-slate-500">
               <button className="hover:text-white">+</button>
               <button className="hover:text-white">v</button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {crewSkills.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                   <span className="text-purple-400 opacity-70">{s.icon}</span>
                   <span className="text-slate-400">{s.label}</span>
                </div>
                <span className="text-red-500 font-bold">{s.value}</span>
              </div>
            ))}
            <div className="pt-2 border-t border-slate-800/50 flex justify-between text-xs">
               <span className="text-slate-500 uppercase font-bold tracking-widest">Total</span>
               <span className="text-red-500 font-bold">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Equipped Loadout Grid */}
      <div className="glass-panel rounded-md overflow-hidden">
        <div className="p-4 border-b border-slate-800/50 flex justify-between items-center bg-slate-900/30">
          <h3 className="font-orbitron text-xs font-bold uppercase tracking-[0.2em] text-white">Equipped Loadout</h3>
          <div className="flex gap-2 text-slate-500">
             <button className="hover:text-white">+</button>
             <button className="hover:text-white">v</button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-slate-900/50 border border-slate-800 rounded-md flex items-center justify-center group hover:border-cyan-500/30 hover:bg-cyan-950/10 transition-all cursor-pointer relative overflow-hidden"
            >
               {/* Reference space images for boxes */}
               {i === 0 && <img src="https://picsum.photos/id/903/150/150" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40" alt="item" />}
               {i === 1 && <img src="https://picsum.photos/id/1031/150/150" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40" alt="item" />}
               {i === 2 && <img src="https://picsum.photos/id/1025/150/150" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40" alt="item" />}
               
               <div className="w-8 h-8 rounded bg-slate-800 group-hover:bg-cyan-900/40 border border-slate-700 group-hover:border-cyan-500/50 flex items-center justify-center transition-all">
                  <span className="text-slate-600 group-hover:text-cyan-400">?</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CargoBay;
