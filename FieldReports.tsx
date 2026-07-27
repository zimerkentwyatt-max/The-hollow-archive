import React from 'react';
import { Link } from 'wouter';
import { LockedOverlay } from '../components/LockedOverlay';
import { GlitchText } from '../components/GlitchText';

const reports = [
  { id: '001', title: 'Growth Survey', status: 'RECOVERED (PARTIAL)', date: '██/██/████', locked: false },
  { id: '002', title: 'Containment Assessment', status: 'LOCKED', date: '██/██/████', locked: true, hint: 'Filed after Incident 001' },
  { id: '003', title: 'Final Survey', status: 'CORRUPTED', date: '██/██/████', locked: true, glitch: true },
];

export default function FieldReports() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#00ff41] border-b border-[#1a3a1a] pb-2">FIELD REPORTS INDEX</h2>
      </div>

      <div className="space-y-4">
        {reports.map(report => (
          <div key={report.id} className="terminal-panel relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {report.locked && !report.glitch && <LockedOverlay level={4} reason="CLEARANCE REQUIRED" />}
            
            <div className={`flex-1 ${report.glitch ? 'animate-[flicker_0.1s_infinite] opacity-50' : ''}`}>
              <div className="text-[#ffb000] text-xs mb-1">FIELD REPORT {report.id}</div>
              <h3 className="text-xl font-bold mb-2">
                {report.glitch ? <GlitchText text="[DATA EXPUNGED]" heavy /> : report.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-xs">
                <div><span className="text-[#00ff41]/50">DATE:</span> {report.date}</div>
                <div>
                  <span className="text-[#00ff41]/50">STATUS:</span> 
                  <span className={report.status.includes('CORRUPTED') ? 'text-red-500' : 'text-white'}> ● {report.status}</span>
                </div>
              </div>
              {report.hint && (
                <div className="mt-2 text-xs italic text-[#00ff41]/40">Note: {report.hint}</div>
              )}
            </div>

            {!report.locked && (
              <Link href={`/fieldreports/${report.id}`}>
                <button className="terminal-button w-full md:w-auto">ACCESS FILE</button>
              </Link>
            )}
            
            {report.glitch && (
               <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 pointer-events-none">
                 <GlitchText text="FATAL CORRUPTION" className="text-red-500 font-bold text-2xl" heavy />
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
