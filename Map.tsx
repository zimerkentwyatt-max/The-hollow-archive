import React, { useState } from 'react';
import { GlitchText } from '../components/GlitchText';

const sites = [
  { id: '18', x: 20, y: 30, name: 'SITE 18', coords: '[REDACTED]', status: 'EVACUATED', note: 'Specimen 18-B origin location' },
  { id: '22', x: 60, y: 40, name: 'SITE 22', coords: '██.████ N, ██.████ W', status: 'UNDER OBSERVATION', note: 'Active monitoring' },
  { id: '31', x: 80, y: 80, name: 'SITE 31', coords: '[CLASSIFIED]', status: '[CLASSIFIED]', note: 'NO ACCESS' },
  { id: '???', x: 50, y: 55, name: 'UNKNOWN', coords: 'UNKNOWN', status: 'ANOMALOUS', note: 'Signal lost', blink: true }
];

export default function Map() {
  const [activeSite, setActiveSite] = useState<typeof sites[0] | null>(null);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#00ff41] border-b border-[#1a3a1a] pb-2">TOPOGRAPHIC MAPPING SYSTEM</h2>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4">
        {/* Map Area */}
        <div className="flex-1 border border-[#1a3a1a] bg-[#050505] relative overflow-hidden min-h-[400px]">
          {/* Grid Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Topographic Lines (Simulated with SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
             <path d="M 0,50 Q 100,100 200,50 T 400,50 T 600,100 T 800,50" fill="none" stroke="#00ff41" strokeWidth="1" />
             <path d="M 0,150 Q 150,200 250,150 T 450,100 T 650,200 T 800,150" fill="none" stroke="#00ff41" strokeWidth="1" />
             <path d="M 0,250 Q 200,300 300,250 T 500,200 T 700,300 T 800,250" fill="none" stroke="#00ff41" strokeWidth="1" />
          </svg>

          {/* Compass */}
          <div className="absolute top-4 left-4 w-12 h-12 border border-[#00ff41]/50 rounded-full flex items-center justify-center text-xs text-[#00ff41]/50">
            <div className="absolute top-1">N</div>
          </div>

          {/* Sites */}
          {sites.map(site => (
            <button
              key={site.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${site.blink ? 'text-red-500 animate-pulse' : 'text-[#00ff41]'}`}
              style={{ left: `${site.x}%`, top: `${site.y}%` }}
              onClick={() => setActiveSite(site)}
            >
              <div className="relative">
                <div className={`w-3 h-3 border ${site.blink ? 'bg-red-500 border-red-500' : 'bg-black border-[#00ff41]'} ${activeSite?.id === site.id ? 'ring-4 ring-[#00ff41]/30' : ''}`}></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-black px-1 border border-[#1a3a1a]">
                  {site.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Site Details Panel */}
        <div className="w-full md:w-64 terminal-panel flex-shrink-0">
          <div className="border-b border-[#1a3a1a] pb-2 mb-4 font-bold text-[#ffb000]">
            LOCATION DATA
          </div>
          
          {activeSite ? (
            <div className="space-y-4 text-sm animate-in fade-in zoom-in duration-200">
              <div>
                <div className="text-[#00ff41]/50 text-xs">DESIGNATION</div>
                <div className={`font-bold text-lg ${activeSite.blink ? 'text-red-500' : 'text-white'}`}>
                  {activeSite.blink ? <GlitchText text={activeSite.name} /> : activeSite.name}
                </div>
              </div>
              <div>
                <div className="text-[#00ff41]/50 text-xs">COORDINATES</div>
                <div className="font-mono">{activeSite.coords}</div>
              </div>
              <div>
                <div className="text-[#00ff41]/50 text-xs">STATUS</div>
                <div className={activeSite.blink ? 'text-red-500' : ''}>{activeSite.status}</div>
              </div>
              <div className="pt-4 border-t border-[#1a3a1a]">
                <div className="text-[#00ff41]/50 text-xs mb-1">NOTES</div>
                <div>{activeSite.note}</div>
              </div>
            </div>
          ) : (
            <div className="text-[#00ff41]/50 text-sm italic text-center py-8 animate-pulse">
              SELECT A LOCATION MARKER
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
