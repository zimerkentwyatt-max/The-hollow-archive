import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { LockedOverlay } from '../components/LockedOverlay';

export default function Personnel() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#00ff41] border-b border-[#1a3a1a] pb-2">PERSONNEL FILES</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DR. ELENA WARD */}
        <div className="terminal-panel">
          <div className="border-b border-[#1a3a1a] pb-2 mb-4 flex justify-between">
            <span className="font-bold text-xl">DR. ELENA WARD</span>
            <span className="text-red-500 animate-pulse">● MISSING</span>
          </div>
          <div className="space-y-2 text-sm">
            <div><span className="text-[#00ff41]/50">DEPT:</span> Ecological Observation</div>
            <div><span className="text-[#00ff41]/50">LAST KNOWN:</span> Day 47 — Site 18 North Quadrant</div>
            <div className="pt-2 border-t border-[#1a3a1a] mt-2">
              <span className="text-[#00ff41]/50 block mb-1">BIOGRAPHY:</span>
              Lead researcher on the Specimen 18-B observation project. 11 years with the department. Specialized in invasive species behavior and ecological disruption.
            </div>
            <div><span className="text-[#00ff41]/50 block mb-1">RESEARCH HISTORY:</span> Field Reports 001, 002, 003 | Incident 001</div>
            
            {isLoggedIn && (
              <div className="mt-4 p-2 bg-[#002200] border border-[#00ff41] text-[#00ff41]">
                <span className="text-xs uppercase font-bold border-b border-[#00ff41]/30 pb-1 block mb-2">RECOVERED COMM LOG</span>
                <span className="italic">"She sent one message after evacuation. It said: 'It's not the plant. It's what the plant replaced.'"</span>
              </div>
            )}
          </div>
        </div>

        {/* DR. NATHAN COLE */}
        <div className="terminal-panel relative min-h-[300px]">
          {!isLoggedIn && <LockedOverlay />}
          <div className="border-b border-[#1a3a1a] pb-2 mb-4 flex justify-between">
            <span className="font-bold text-xl">DR. NATHAN COLE</span>
            <span className="text-white">● ACTIVE</span>
          </div>
          <div className="space-y-2 text-sm">
            <div><span className="text-[#00ff41]/50">DEPT:</span> Specimen Analysis</div>
            <div className="pt-2 border-t border-[#1a3a1a] mt-2">
              <span className="text-[#00ff41]/50 block mb-1">BIOGRAPHY:</span>
              Joined the department in 19██. Assigned to chemical analysis of Specimen 18-B soil samples. Repeatedly requested transfer after Incident 001. His analysis of the soil showed anomalous organic compounds that mimic neural tissue.
            </div>
            <div className="mt-4 text-[#ffb000]">
              <span className="text-[#00ff41]/50 block mb-1">STATUS NOTE:</span>
              Placed on mandatory psychological leave following unauthorized access to Archive Terminal.
            </div>
          </div>
        </div>

        {/* DR. SARAH VALE */}
        <div className="terminal-panel relative min-h-[300px]">
          {!isLoggedIn && <LockedOverlay />}
          <div className="border-b border-[#1a3a1a] pb-2 mb-4 flex justify-between">
            <span className="font-bold text-xl">DR. SARAH VALE</span>
            <span className="text-red-500">● UNKNOWN</span>
          </div>
          <div className="space-y-2 text-sm">
            <div><span className="text-[#00ff41]/50">DEPT:</span> Environmental Research</div>
            <div><span className="text-[#00ff41]/50">LAST KNOWN:</span> [CLASSIFIED]</div>
            <div className="pt-2 border-t border-[#1a3a1a] mt-2">
              <span className="text-[#00ff41]/50 block mb-1">BIOGRAPHY:</span>
              Discovered something in the soil composition at Site 18 that "shouldn't be possible." She compiled her findings into the original observation record, which was subsequently scrubbed from the main database.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
