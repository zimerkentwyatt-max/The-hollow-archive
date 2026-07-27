import React, { useEffect, useState } from 'react';
import { GlitchText } from '../components/GlitchText';

export default function HiddenOriginalRecord() {
  const [invert, setInvert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setInvert(true);
        setTimeout(() => setInvert(false), 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 font-mono transition-colors duration-0 ${invert ? 'bg-white text-black' : 'bg-black text-[#00ff41]'}`}>
      <div className="max-w-3xl w-full border-4 border-double border-red-900 p-8 md:p-12 relative overflow-hidden">
        {/* Extreme glitch overlay */}
        <div className="absolute inset-0 bg-red-900/10 animate-[flicker_0.05s_infinite] pointer-events-none z-10"></div>
        
        <div className="relative z-20 space-y-6 text-sm md:text-lg">
          <div className="text-center text-red-500 font-bold text-2xl border-b border-red-900 pb-4 mb-8">
            <GlitchText text="THIS FILE HAS BEEN SCRUBBED" heavy />
          </div>

          <div className="uppercase tracking-widest text-[#ffb000]">
            <div>ORIGINAL OBSERVATION: ████ ██, ████</div>
            <div>LOCATION: PRE-SITE 18 DESIGNATION</div>
            <div>OBSERVER: [NAME REDACTED]</div>
          </div>

          <div className="p-4 bg-red-950/30 border-l-4 border-red-500 italic">
            NOTE: The specimen identified as 18-B was not the first of its kind. This is the original record, before the numbering system was established.
          </div>

          <div className="text-center font-bold text-2xl my-8">
            ORIGINAL DESIGNATION: <span className="text-white">SPECIMEN ZERO</span>
          </div>

          <div className="break-all opacity-50 text-red-500 font-bold">
            ████████████████████████████████████████████████████
          </div>

          <div className="text-center text-3xl font-bold py-8 my-8 border-y border-red-900">
            <GlitchText text="IT WAS ALREADY THERE WHEN WE ARRIVED." heavy />
          </div>

          <div className="break-all opacity-50 text-red-500 font-bold">
            ████████████████████████████████████████████████████
          </div>

          <div className="text-center text-red-500 mt-12 animate-pulse">
            [FILE TRUNCATED — RECOVERY FAILED]
          </div>
        </div>
      </div>
    </div>
  );
}
