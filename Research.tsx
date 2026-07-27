import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { GlitchText } from '../components/GlitchText';
import { RedactedText } from '../components/RedactedText';

export default function Research() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="h-full flex flex-col items-center justify-center border-2 border-red-900 bg-red-950/20 p-8 text-center">
        <div className="text-red-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <GlitchText text="ACCESS DENIED" className="text-red-500 text-4xl font-bold mb-4" heavy />
        <div className="text-red-400 text-xl mb-8">ERROR CODE: ERRNO-7741-CLEARANCE</div>
        <div className="text-white text-sm">YOU DO NOT HAVE THE REQUIRED CLEARANCE LEVEL TO VIEW THESE DOCUMENTS.</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#ffb000] border-b border-[#1a3a1a] pb-2">RESEARCH DOCUMENTS [PARTIAL RECOVERY]</h2>
      </div>

      <div className="space-y-8">
        <div className="border border-[#1a3a1a] bg-[#0a0a0a] p-6 text-sm">
          <div className="text-[#00ff41]/50 mb-4 border-b border-[#1a3a1a] pb-2">DOC REF: PHYTO-A11</div>
          <h3 className="text-xl font-bold mb-4">ECOLOGICAL DISRUPTION THESIS</h3>
          <p className="mb-4">
            The premise that Specimen 18-B is an invasive species is fundamentally flawed. An invasive species competes within the existing ecological framework. 18-B does not compete; it <RedactedText>replaces the framework entirely</RedactedText>.
          </p>
          <p className="mb-4">
            Soil analysis indicates that the root structures do not absorb nutrients. Instead, they secrete a compound that <RedactedText>alters the fundamental atomic structure</RedactedText> of the surrounding earth, creating an environment that is hostile to Earth-native biology but highly conducive to [DATA EXPUNGED].
          </p>
        </div>

        <div className="border border-[#1a3a1a] bg-[#0a0a0a] p-6 text-sm">
          <div className="text-[#00ff41]/50 mb-4 border-b border-[#1a3a1a] pb-2">DOC REF: NEURO-C4</div>
          <h3 className="text-xl font-bold mb-4">STIMULI RESPONSE OBSERVATIONS</h3>
          <p className="mb-4">
            On Day 31 of observation, audio recording equipment placed near the specimen registered high-frequency emissions. When analyzed through a spectrograph, the emissions <RedactedText>closely mirror human neural activity during REM sleep</RedactedText>.
          </p>
          <p className="mb-4">
            When personnel approach within 5 meters, the emissions spike. It is Dr. Ward's hypothesis that the specimen is not merely observing us, but <RedactedText>actively downloading cognitive patterns</RedactedText>.
          </p>
        </div>
      </div>
    </div>
  );
}
