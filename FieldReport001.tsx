import React from 'react';
import { Link } from 'wouter';
import { RedactedText } from '../components/RedactedText';
import { GlitchText } from '../components/GlitchText';

export default function FieldReport001() {
  return (
    <div className="h-full flex flex-col overflow-y-auto pr-4">
      <div dangerouslySetInnerHTML={{ __html: "<!-- field-001-key: RAGWEED -->" }} />
      <div className="mb-4">
        <Link href="/fieldreports">
          <button className="text-[#00ff41]/70 hover:text-[#00ff41] text-sm">&lt; BACK TO INDEX</button>
        </Link>
      </div>

      <div className="border border-[#1a3a1a] bg-[#001100] p-6 md:p-10 text-[#00ff41] font-serif max-w-4xl mx-auto shadow-[0_0_15px_rgba(0,255,65,0.05)]">
        
        <div className="text-center border-b-2 border-[#00ff41]/30 pb-6 mb-8 uppercase tracking-widest text-sm md:text-base">
          <div>DEPARTMENT OF ECOLOGICAL RESEARCH</div>
          <div>INTERNAL DOCUMENT</div>
          <div className="font-bold mt-2 text-lg">FIELD REPORT 001</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm uppercase border-b border-[#00ff41]/20 pb-6">
          <div><span className="opacity-50">CLASSIFICATION:</span> UNCLASSIFIED</div>
          <div><span className="opacity-50">DATE:</span> <RedactedText>04/12</RedactedText>/████</div>
          <div><span className="opacity-50">RESEARCHER:</span> Dr. Elena Ward</div>
          <div><span className="opacity-50">DEPT:</span> Ecological Observation</div>
          <div className="md:col-span-2 mt-2 pt-2 border-t border-[#00ff41]/10">
            <span className="opacity-50">SUBJECT:</span> Growth Survey — Specimen 18-B (Ambrosia trifida)
          </div>
        </div>

        <div className="space-y-6 leading-relaxed text-sm md:text-base text-justify">
          <p>
            Specimen 18-B was identified at Site 18, North Quadrant, during routine ecological survey. Initial measurements indicate standard growth patterns consistent with Ambrosia trifida documentation. The specimen appears normal. Continued observation is recommended.
          </p>

          <p>
            Note: Soil samples taken from 2m radius show <RedactedText>highly abnormal mineral</RedactedText> composition. Analysis pending.
          </p>

          <p>
            The surrounding vegetation shows <GlitchText text="[CORRUPTED DATA]" className="bg-red-900/20 text-red-500 px-1" /> consistent with <RedactedText>rapid localized decay</RedactedText>. This may warrant further investigation.
          </p>

          <p>
            Recommend: Continue monitoring. Schedule follow-up survey in 14 days.
          </p>
        </div>

        <div className="mt-16 text-center border-t border-[#00ff41]/20 pt-4">
          <div className="text-[10px] text-[#00ff41]/20 opacity-50">
            The first observation was not the beginning.
          </div>
        </div>

      </div>
    </div>
  );
}
