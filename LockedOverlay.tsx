import React from 'react';
import { GlitchText } from './GlitchText';

interface LockedOverlayProps {
  level?: number;
  reason?: string;
}

export function LockedOverlay({ level = 4, reason = "CLEARANCE REQUIRED" }: LockedOverlayProps) {
  return (
    <div className="absolute inset-0 bg-[#001100]/90 backdrop-blur-sm flex flex-col items-center justify-center border-2 border-[#1a3a1a] z-10 p-6 text-center">
      <div className="text-red-500 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <GlitchText text="ACCESS DENIED" className="text-red-500 text-2xl font-bold mb-2" />
      <div className="text-[#ffb000] text-sm uppercase">CLASSIFICATION LEVEL {level}+ REQUIRED</div>
      <div className="text-[#00ff41]/50 text-xs mt-4">{reason}</div>
    </div>
  );
}
