import React from 'react';
import { GlitchText } from '../components/GlitchText';

const events = [
  { year: 'YEAR ████', text: 'First anomalous organism identified in northern survey zone. Report filed and archived.' },
  { year: 'YEAR ████', text: 'The Hollow Archive database created. Purpose: ecological monitoring of [REDACTED] region.' },
  { year: 'YEAR ████', text: 'Specimen 18-B classified. Observation program initiated. Dr. E. Ward assigned lead researcher.' },
  { year: 'YEAR ████', text: 'First incident recorded. Partial evacuation of Site 18. ████████████' },
  { year: 'YEAR ████', text: 'Records classified. Access restricted to Level 4+. Reason: [CLASSIFIED]' },
  { year: 'CURRENT', text: 'Database partially recovered. 34% of files restored. 46 files missing.', highlight: true },
  { year: '???', text: '[DATA CORRUPTION]', glitch: true }
];

export default function Timeline() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#00ff41] border-b border-[#1a3a1a] pb-2">PROJECT TIMELINE</h2>
      </div>

      <div className="relative pl-4 md:pl-8 py-4">
        <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-px bg-[#1a3a1a]"></div>

        <div className="space-y-12">
          {events.map((event, i) => (
            <div key={i} className="relative">
              {/* Timeline Node */}
              <div className={`absolute -left-[19px] md:-left-[27px] top-1 w-3 h-3 rounded-none border ${event.highlight ? 'bg-[#00ff41] border-[#00ff41]' : event.glitch ? 'bg-red-500 border-red-500 animate-ping' : 'bg-black border-[#00ff41]'}`}></div>
              
              <div className="ml-6">
                <div className={`font-bold text-lg mb-2 ${event.highlight ? 'text-[#ffb000]' : event.glitch ? 'text-red-500' : 'text-[#00ff41]'}`}>
                  {event.glitch ? <GlitchText text={event.year} /> : event.year}
                </div>
                <div className={`terminal-panel ${event.highlight ? 'border-[#ffb000]/50' : event.glitch ? 'border-red-900/50' : ''}`}>
                  {event.glitch ? (
                    <span className="opacity-50 break-all"><GlitchText text="E29A8B7C 4F10D3A1 00FF41A2 B7C9D0E1 F2A3B4C5" heavy /></span>
                  ) : (
                    event.text
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
