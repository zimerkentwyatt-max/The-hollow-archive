import React, { useState } from 'react';
import { Link } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { LockedOverlay } from '../components/LockedOverlay';
import { GlitchText } from '../components/GlitchText';

const specimens = [
  { id: '18-B', species: 'Ambrosia trifida', status: 'ACTIVE', risk: 'UNKNOWN', locked: false, glitch: false },
  { id: '19-A', species: '[REDACTED]', status: 'CONTAINED', risk: 'HIGH', locked: true, level: 3, glitch: false },
  { id: '22-C', species: '[REDACTED]', status: 'ANOMALOUS', risk: 'EXTREME', locked: true, level: 4, glitch: false },
  { id: '31-F', species: '████████', status: 'MISSING', risk: '[CLASSIFIED]', locked: true, level: 4, glitch: false },
  { id: '44-X', species: '[REDACTED]', status: 'UNKNOWN', risk: 'UNKNOWN', locked: true, level: 3, glitch: false },
  { id: '99-Z', species: '[REDACTED]', status: '[REDACTED]', risk: '[REDACTED]', locked: true, level: 5, glitch: true },
];

export default function Specimens() {
  const { isLoggedIn } = useAuth();
  const [search, setSearch] = useState('');

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#00ff41] border-b border-[#1a3a1a] pb-2">SPECIMEN DATABASE</h2>
      </div>

      <div className="mb-6">
        <input 
          type="text" 
          placeholder="SEARCH SPECIMENS..." 
          className="terminal-input w-full md:w-1/2"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specimens.map(s => {
          const isActuallyLocked = s.locked && !isLoggedIn;
          
          return (
            <div key={s.id} className={`terminal-panel relative flex flex-col min-h-[200px] ${s.glitch ? 'animate-[flicker_0.05s_infinite]' : ''}`}>
              {isActuallyLocked && <LockedOverlay level={s.level} />}
              
              <div className="border-b border-[#1a3a1a] pb-2 mb-4 flex justify-between items-center">
                <span className="font-bold text-lg">{s.glitch ? <GlitchText text={s.id} /> : s.id}</span>
                <span className="text-xs px-1 border border-[#00ff41]/30 text-[#00ff41]/70">
                  {isActuallyLocked ? 'RESTRICTED' : 'UNCLASSIFIED'}
                </span>
              </div>
              
              <div className="flex-1 text-sm space-y-2">
                <div><span className="text-[#00ff41]/50">SPECIES:</span> {s.species}</div>
                <div><span className="text-[#00ff41]/50">STATUS:</span> <span className={s.status === 'ACTIVE' || s.status === 'MISSING' ? 'text-red-500' : ''}>● {s.status}</span></div>
                <div><span className="text-[#00ff41]/50">RISK LEVEL:</span> {s.risk}</div>
              </div>

              {!isActuallyLocked && (
                <div className="mt-4 pt-4 border-t border-[#1a3a1a]">
                  <Link href={`/specimens/${s.id.toLowerCase()}`}>
                    <button className="terminal-button w-full text-xs">VIEW FILE</button>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
