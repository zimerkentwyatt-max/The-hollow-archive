import React from 'react';
import { RedactedText } from '../components/RedactedText';

export default function HiddenFailureReport() {
  return (
    <div className="min-h-screen bg-black text-[#00ff41] p-8 font-mono max-w-4xl mx-auto">
      <div className="border border-[#1a3a1a] p-8 bg-[#0a0a0a] shadow-2xl">
        <h1 className="text-2xl font-bold text-red-500 mb-6 border-b border-[#1a3a1a] pb-4">INCIDENT CLOSEOUT REPORT: WARD, E.</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            On <RedactedText>Day 52</RedactedText>, Dr. Ward's vehicle was found abandoned approximately 14 miles outside the Site 18 perimeter zone. The engine was running. The radio was playing <RedactedText>static</RedactedText>.
          </p>
          <p>
            An analysis of the vehicle interior revealed traces of soil matching the anomalous composition found near Specimen 18-B. However, the soil was not on the floorboards; it was <RedactedText>inside the air conditioning vents</RedactedText>.
          </p>
          <p>
            Dr. Ward's final transmission has been logged and sealed under Level 5 clearance. Attempts to trace the origin point of the transmission failed. The signal triangulated to <RedactedText>a point directly beneath the archive server room</RedactedText>.
          </p>
          <div className="my-12 py-6 border-y border-[#1a3a1a] text-center text-lg italic text-[#ffb000]">
            "Something followed her back. Or maybe, she was never the one who left."
          </div>
          <p className="text-center font-bold text-xl uppercase tracking-widest mt-12">
            We have closed this case. <br/>
            <span className="text-red-500 mt-2 block">We should not have.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
