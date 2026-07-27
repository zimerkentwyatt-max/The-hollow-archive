import React from 'react';
import { Link } from 'wouter';

export default function SpecimenDetail() {
  return (
    <div className="h-full flex flex-col overflow-y-auto pr-4">
      <div className="mb-4">
        <Link href="/specimens">
          <button className="text-[#00ff41]/70 hover:text-[#00ff41] text-sm">&lt; BACK TO DATABASE</button>
        </Link>
      </div>

      <div className="border border-[#1a3a1a] bg-[#0a0a0a] p-6">
        <div className="border-b-2 border-double border-[#1a3a1a] pb-4 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-1">SPECIMEN ID: 18-B</h2>
            <div className="border border-[#00ff41] px-2 py-1 inline-block text-xs uppercase tracking-widest text-[#00ff41]/80">
              UNCLASSIFIED
            </div>
          </div>
          <div className="w-32 h-32 border border-[#1a3a1a] bg-black flex items-center justify-center relative overflow-hidden">
            <div className="text-xs text-[#1a3a1a] absolute top-1 left-1">PHOTO</div>
            {/* SVG Plant Silhouette */}
            <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-60" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.4">
              <path d="M50 100 Q50 60 40 40 Q45 20 60 10 Q55 30 50 50" strokeWidth="2" />
              <path d="M50 80 Q65 60 75 50 Q60 40 50 60" />
              <path d="M50 70 Q30 50 20 30 Q35 30 50 55" />
              <circle cx="60" cy="10" r="2" fill="#00ff41" />
              <circle cx="20" cy="30" r="1.5" fill="#00ff41" />
              <circle cx="75" cy="50" r="1" fill="#00ff41" />
            </svg>
            <div className="absolute inset-0 bg-repeating-linear-gradient-[0deg,transparent,transparent_2px,rgba(0,0,0,0.8)_2px,rgba(0,0,0,0.8)_4px]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-[#ffb000] border-b border-[#1a3a1a] mb-2">TAXONOMY</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="text-[#00ff41]/50 w-24 inline-block">Kingdom:</span> Plantae</li>
              <li><span className="text-[#00ff41]/50 w-24 inline-block">Genus:</span> Ambrosia</li>
              <li><span className="text-[#00ff41]/50 w-24 inline-block">Species:</span> trifida</li>
              <li><span className="text-[#00ff41]/50 w-24 inline-block">Subspecies:</span> [PENDING]</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#ffb000] border-b border-[#1a3a1a] mb-2">FIELD DATA</h3>
            <ul className="space-y-1 text-sm">
              <li><span className="text-[#00ff41]/50 w-32 inline-block">Observations:</span> 47 logged</li>
              <li><span className="text-[#00ff41]/50 w-32 inline-block">Last Obs:</span> ██/██/████</li>
              <li><span className="text-[#00ff41]/50 w-32 inline-block">Location:</span> Site 18 North Quadrant</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-[#ffb000] border-b border-[#1a3a1a] mb-2">RESEARCH NOTES</h3>
          <p className="text-sm leading-relaxed mb-4">
            Growth rate exceeds documented biological limits. Specimen appears responsive to stimuli not yet identified in standard botanical literature. Soil composition changes rapidly within a 2m radius. 
          </p>
          <p className="text-sm">
            <Link href="/fieldreports/001" className="text-[#00ff41] underline hover:text-white">See Field Report 001</Link> for initial observations.
          </p>
        </div>

        <div>
          <h3 className="text-[#ffb000] border-b border-[#1a3a1a] mb-2">ANOMALY LOG</h3>
          <div className="font-mono text-sm bg-black p-4 border border-[#1a3a1a] space-y-2">
            <div><span className="text-[#00ff41]/50">Day 1:</span> Normal growth patterns.</div>
            <div><span className="text-[#00ff41]/50">Day 14:</span> Growth rate 340% above baseline.</div>
            <div><span className="text-[#00ff41]/50">Day 31:</span> Specimen appears to have moved 0.3m from original position.</div>
            <div className="text-red-500"><span className="text-red-500/50">Day 47:</span> ████████████</div>
          </div>
        </div>
        
        {/* Hidden text puzzle */}
        <div className="mt-12 text-center select-text">
          <span className="text-[#050505] bg-[#050505] hover:text-[#111]">The first one wasn't 18-B.</span>
        </div>
      </div>
    </div>
  );
}
