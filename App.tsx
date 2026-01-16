
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CommandCenter from './components/CommandCenter';
import CargoBay from './components/CargoBay';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Command Center');

  return (
    <div className="flex h-screen w-full bg-[#020617] text-slate-300">
      {/* Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'Command Center' ? <CommandCenter /> : <CargoBay />}
        </main>
      </div>
    </div>
  );
};

export default App;
