import React from 'react';
import { LockedOverlay } from '../components/LockedOverlay';
import { RedactedText } from '../components/RedactedText';
import { GlitchText } from '../components/GlitchText';
import { useAuth } from '../hooks/useAuth';

export default function Incidents() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-500 border-b border-[#1a3a1a] pb-2">INCIDENT REPORTS [CLASSIFIED]</h2>
      </div>

      <div className="space-y-6">
        {/* INCIDENT 001 */}
        <div className="terminal-panel border-red-900/50">
          <div className="flex justify-between items-start border-b border-[#1a3a1a] pb-2 mb-4">
            <div>
              <div className="text-red-500 font-bold text-xl">INCIDENT 001</div>
              <div className="text-[#00ff41]/50 text-sm">Observation Conditions Change</div>
            </div>
            <div className="text-right text-xs">
              <div><span className="text-[#00ff41]/50">DATE:</span> [REDACTED]</div>
              <div><span className="text-[#00ff41]/50">STATUS:</span> <span className="text-white">PARTIALLY RECOVERED</span></div>
            </div>
          </div>
          <div className="text-sm space-y-4">
            <p>
              Observation conditions changed unexpectedly. Personnel evacuation recommended. Full report pending investigation review.
            </p>
            <p>
              <RedactedText className="w-full h-16 block"></RedactedText>
            </p>
            <p className="italic text-[#00ff41]/60">
              Note: 2 of 3 personnel on-site reported <RedactedText>hearing auditory hallucinations</RedactedText>.
            </p>
          </div>
        </div>

        {/* INCIDENT 002 */}
        <div className="terminal-panel border-red-900/50 relative min-h-[150px]">
          <LockedOverlay level={4} />
          <div className="text-red-500 font-bold text-xl mb-1">INCIDENT 002</div>
        </div>

        {/* INCIDENT 003 */}
        <div className="terminal-panel border-red-900/50 relative min-h-[150px] overflow-hidden">
          <div className="absolute inset-0 bg-red-950/20 animate-pulse mix-blend-overlay"></div>
          <div className="text-red-500 font-bold text-xl mb-4">INCIDENT 003</div>
          <div className="font-mono text-sm break-all opacity-50">
            <GlitchText text="E29A8B7C 4F10D3A1 00FF41A2 B7C9D0E1 F2A3B4C5 D6E7F809 1A2B3C4D 5E6F7081 92A3B4C5 D6E7F809 1A2B3C4D E29A8B7C 4F10D3A1 00FF41A2 B7C9D0E1 F2A3B4C5 D6E7F809 1A2B3C4D 5E6F7081 92A3B4C5 D6E7F809 1A2B3C4D" heavy />
          </div>
        </div>
      </div>
    </div>
  );
}
