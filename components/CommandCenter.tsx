
import React, { useState, useEffect } from 'react';

const CommandCenter: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Auto-rotate effect for the 3D ship wireframe
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.6) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="p-2 px-4 border-b border-slate-700/50 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800">
      <h3 className="font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 flex items-center gap-2">
        <span className="w-1 h-3 bg-cyan-500 rounded-full shadow-[0_0_5px_#06b6d4]"></span>
        {title}
      </h3>
      <div className="flex gap-1.5 opacity-40">
        <button className="text-[10px] hover:text-white transition-colors">✚</button>
        <button className="text-[10px] hover:text-white transition-colors">▼</button>
      </div>
    </div>
  );

  const StatRow = ({ label, value, colorClass = "text-slate-300" }: { label: string, value: string | number, colorClass?: string }) => (
    <div className="flex justify-between py-1.5 px-4 text-[11px] border-b border-slate-800/30 hover:bg-cyan-500/5 transition-colors group cursor-default">
      <span className="text-slate-500 font-medium group-hover:text-slate-400">{label}</span>
      <span className={`${colorClass} font-semibold`}>{value}</span>
    </div>
  );

  const equipmentSlots = [
    { icon: "☄️", type: "Plasma Rifle", rarity: "rare" }, 
    { icon: "🔫", type: "Ion Blaster", rarity: "common" }, 
    { icon: "⚔️", type: "Energy Blade", rarity: "epic" },
    { icon: "💥", type: "Pulse Grenade", rarity: "common" }, 
    { icon: "👨‍🚀", type: "EVA Helmet", rarity: "rare" }, 
    { icon: "🛡️", type: "Hardshell Suit", rarity: "rare" },
    { icon: "🦾", type: "Power Legs", rarity: "epic" }, 
    { icon: "🛰️", type: "Mag Boots", rarity: "common" }, 
    { icon: "🧤", type: "Sensor Gloves", rarity: "common" }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'epic': return 'border-purple-500/50 text-purple-400 bg-purple-500/5';
      case 'rare': return 'border-cyan-500/50 text-cyan-400 bg-cyan-500/5';
      default: return 'border-slate-800 text-slate-400 bg-slate-900/80';
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 max-w-7xl mx-auto space-y-4">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b border-cyan-900/30 pb-4">
        <div>
          <h2 className="text-2xl font-orbitron font-bold text-white tracking-wider flex items-center gap-3">
             <span className="text-cyan-500 animate-pulse">▶</span> SYSTEM DIAGNOSTICS
          </h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-1 italic">Sector 7-G | Station Alpha-01</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-1.5 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-500/20 transition-all rounded shadow-lg shadow-cyan-950 active:scale-95">
             Mission Log
           </button>
           <button className="px-4 py-1.5 bg-slate-900/50 border border-slate-700/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all rounded active:scale-95">
             Settings
           </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <section className="glass-panel border border-slate-700/50 rounded overflow-hidden shadow-2xl">
            <SectionHeader title="General Information" />
            <div className="bg-black/20">
              <StatRow label="Name" value="hallexin [4056171]" colorClass="text-cyan-400 cursor-pointer hover:text-cyan-300" />
              <StatRow label="Money" value="$7,500" colorClass="text-yellow-500" />
              <StatRow label="Points" value="0" />
              <StatRow label="Level" value="1" />
              <StatRow label="Rank" value="#1 Absolute beginner Newco..." />
              <StatRow label="Life" value="100 / 100" colorClass="text-green-500" />
              <StatRow label="Age" value="0" />
              <StatRow label="Marital Status" value="Single" />
              <StatRow label="Networth" value="$7,500" />
            </div>
          </section>

          <section className="glass-panel border border-slate-700/50 rounded overflow-hidden shadow-2xl">
            <SectionHeader title="Battle Stats" />
            <div className="bg-black/20">
              <div className="flex justify-between py-1.5 px-4 text-[11px] border-b border-slate-800/30 group">
                <span className="text-slate-500 group-hover:text-slate-400">Strength</span>
                <span className="text-red-400 font-bold">10 <span className="text-[9px] text-slate-600 ml-2 group-hover:text-red-900">+0%</span></span>
              </div>
              <div className="flex justify-between py-1.5 px-4 text-[11px] border-b border-slate-800/30 group">
                <span className="text-slate-500 group-hover:text-slate-400">Defense</span>
                <span className="text-red-400 font-bold">10 <span className="text-[9px] text-slate-600 ml-2 group-hover:text-red-900">+0%</span></span>
              </div>
              <div className="flex justify-between py-1.5 px-4 text-[11px] border-b border-slate-800/30 group">
                <span className="text-slate-500 group-hover:text-slate-400">Speed</span>
                <span className="text-red-400 font-bold">10 <span className="text-[9px] text-slate-600 ml-2 group-hover:text-red-900">+0%</span></span>
              </div>
              <div className="flex justify-between py-1.5 px-4 text-[11px] border-b border-slate-800/30 group">
                <span className="text-slate-500 group-hover:text-slate-400">Dexterity</span>
                <span className="text-red-400 font-bold">10 <span className="text-[9px] text-slate-600 ml-2 group-hover:text-red-900">+0%</span></span>
              </div>
              <div className="flex justify-between py-2 px-4 text-[11px] bg-slate-900/40">
                <span className="text-slate-300 font-bold uppercase tracking-tighter">Total</span>
                <span className="text-white font-bold">40</span>
              </div>
            </div>
          </section>
        </div>

        {/* Center Column: 3D Wireframe Spaceship */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <section className="glass-panel border border-slate-700/50 rounded overflow-hidden shadow-2xl flex flex-col h-full">
            <SectionHeader title="Starship Schematic V3.0" />
            <div className="grid grid-cols-2 bg-black/40">
              <StatRow label="Class" value="Starbound Scout" />
              <StatRow label="Hangar" value="Bay 01" />
            </div>

            <div className="flex-1 min-h-[450px] relative bg-[#00040a] overflow-hidden group">
               {/* Starfield / Grid Background */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               
               {/* 3D Wireframe Scene */}
               <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
                  <div 
                    className="relative w-80 h-80 transition-transform duration-500 preserve-3d"
                    style={{ transform: `rotateY(${rotation}deg) rotateX(15deg) rotateZ(5deg)` }}
                  >
                    {/* Fuselage (Main Body) */}
                    <div className="absolute inset-0 flex items-center justify-center preserve-3d">
                       {/* Central Cylinder */}
                       {Array.from({length: 12}).map((_, i) => (
                         <div key={i} className="absolute w-12 h-64 border-x border-cyan-500/30 shadow-[0_0_5px_rgba(34,211,238,0.1)]"
                              style={{ transform: `rotateY(${i * 30}deg)` }}></div>
                       ))}
                       {/* Body Rings */}
                       <div className="absolute top-[20%] w-24 h-24 border border-cyan-500/40 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
                       <div className="absolute top-[50%] w-32 h-32 border border-cyan-500/40 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
                       <div className="absolute top-[80%] w-24 h-24 border border-cyan-500/40 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>

                       {/* Wings (Starship Geometry) */}
                       <div className="absolute w-64 h-12 border border-cyan-500/60 bg-cyan-500/5" style={{ transform: 'rotateY(0deg) translateZ(0px)' }}></div>
                       <div className="absolute w-64 h-12 border border-cyan-500/60 bg-cyan-500/5" style={{ transform: 'rotateY(90deg) translateZ(0px)' }}></div>
                       
                       {/* Wing Tips (Vertical Stabilizers) */}
                       <div className="absolute w-12 h-40 border-l-2 border-cyan-400/80" style={{ transform: 'translateX(120px) rotateY(0deg)' }}></div>
                       <div className="absolute w-12 h-40 border-r-2 border-cyan-400/80" style={{ transform: 'translateX(-120px) rotateY(0deg)' }}></div>
                       
                       {/* Engine Glow Core */}
                       <div className="absolute bottom-[-10px] w-20 h-20 bg-cyan-400/10 blur-2xl rounded-full animate-pulse"></div>
                       <div className="absolute bottom-[-5px] w-8 h-8 border-2 border-cyan-400/50 rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
                    </div>
                  </div>
               </div>

               {/* Interaction Elements */}
               <div className="absolute top-8 left-8 space-y-3 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                    <span className="text-[10px] font-orbitron text-cyan-400 uppercase tracking-widest">NAVIGATIONAL LOCK</span>
                  </div>
                  <div className="p-2 border border-cyan-500/20 bg-cyan-500/5 rounded backdrop-blur-sm">
                    <p className="text-[9px] text-slate-400 leading-tight font-mono">AZIMUTH: {Math.round(rotation)}°</p>
                    <p className="text-[9px] text-cyan-500/70 font-mono">HULL: OPTIMAL</p>
                  </div>
               </div>

               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <button className="pointer-events-auto px-10 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-orbitron text-sm font-bold uppercase tracking-[0.5em] backdrop-blur-md hover:bg-cyan-500/30 transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)] active:scale-95">
                    LAUNCH SCOUT
                  </button>
               </div>

               <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                  <p className="text-[10px] font-orbitron text-white/40 uppercase tracking-[0.6em] bg-black/40 py-1.5 mx-20 rounded-full border border-white/5 backdrop-blur-sm">RENDER ENGINE: STARBOUND-GS</p>
               </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 space-y-4">
          <section className="glass-panel border border-slate-700/50 rounded overflow-hidden shadow-2xl">
            <SectionHeader title="Equipped Modules" />
            <div className="p-4 bg-black/20 grid grid-cols-3 gap-2 min-h-[300px]">
              {equipmentSlots.map((item, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setHoveredItem(item.type)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`aspect-square border rounded flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 relative overflow-hidden active:scale-95 ${getRarityColor(item.rarity)}`}
                >
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"></div>
                   
                   <span className="text-2xl mb-1 group-hover:scale-125 transition-transform drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
                     {item.icon}
                   </span>
                   <span className="text-[8px] text-center px-1 uppercase font-bold tracking-tighter leading-none opacity-80 group-hover:opacity-100">
                     {item.type.split(' ')[0]}<br/>{item.type.split(' ')[1] || ''}
                   </span>

                   {hoveredItem === item.type && (
                     <div className="absolute -top-1 left-0 right-0 bg-black/90 text-[7px] text-white py-1 text-center font-bold z-10 border-b border-white/20 animate-in fade-in slide-in-from-bottom-1">
                        Lvl 1 {item.rarity.toUpperCase()}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel border border-slate-700/50 rounded overflow-hidden">
            <SectionHeader title="Latest Comms" />
            <div className="divide-y divide-slate-800/50 bg-black/20">
               <div className="p-3 hover:bg-cyan-500/10 transition-colors cursor-pointer group active:bg-cyan-500/20">
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-[10px] font-bold text-cyan-400 group-hover:underline flex items-center gap-1">
                       <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></span>
                       Weav3r
                     </span>
                     <span className="text-[9px] text-slate-600 italic">02:35:48</span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1 italic">"Starship diagnostic complete. All systems green."</p>
               </div>
               <div className="p-3 text-center py-6 text-[9px] text-slate-600 uppercase tracking-widest bg-slate-900/10">
                  NO MORE MESSAGES
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
