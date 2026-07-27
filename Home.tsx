import React from 'react';
import { Link } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { ProgressBar } from '../components/ProgressBar';
import { GlitchText } from '../components/GlitchText';
import { TypewriterText } from '../components/TypewriterText';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="h-full flex flex-col">
      <div dangerouslySetInnerHTML={{ __html: "<!-- if you can read this, you're already inside -->" }} />
      
      <div className="mb-8 text-center mt-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-widest text-[#00ff41]">
          <GlitchText text="THE HOLLOW ARCHIVE" />
        </h1>
        <div className="text-[#00ff41]/70 tracking-widest text-sm md:text-base">
          <TypewriterText text="RECOVERED ECOLOGICAL RESEARCH DATABASE" speed={50} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="terminal-panel flex flex-col gap-2">
          <div className="border-b border-[#1a3a1a] pb-2 mb-2 font-bold text-[#ffb000]">
            SYSTEM STATUS
          </div>
          <div>
            Database Recovery: 
            <ProgressBar progress={34} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>Files Recovered: <span className="text-white">1 of 47</span></div>
            <div>Missing Files: <span className="text-red-500">46</span></div>
          </div>
          <div className="mt-2">
            Access Level: <span className={isLoggedIn ? "text-[#ffb000]" : "text-white"}>{isLoggedIn ? 'AUTHENTICATED' : 'PUBLIC'}</span>
          </div>
          <div className="mt-2">
            Last System Access: <GlitchText text="██/██/19██" />
          </div>
        </div>

        <div className="terminal-panel">
          <div className="border-b border-[#1a3a1a] pb-2 mb-4 font-bold text-[#ffb000]">
            QUICK ACCESS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <Link href="/fieldreports" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer">&gt; FIELD RECORDS</Link>
            <Link href="/specimens" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer">&gt; SPECIMEN DATABASE</Link>
            <Link href="/personnel" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer text-[#ffb000]">&gt; PERSONNEL FILES [RESTRICTED]</Link>
            <Link href="/incidents" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer text-red-500">&gt; INCIDENT REPORTS [CLASSIFIED]</Link>
            <Link href="/terminal" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer">&gt; ARCHIVE TERMINAL</Link>
            <Link href="/research" className="hover:bg-[#00ff41] hover:text-black px-2 py-1 cursor-pointer">&gt; RESEARCH DOCUMENTS [PARTIAL]</Link>
          </div>
        </div>
      </div>

      <div className="mt-auto border border-red-900/50 bg-red-950/20 p-4 animate-pulse">
        <div className="text-red-500 font-bold mb-1 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          INCOMING TRANSMISSION
        </div>
        <div className="text-red-400 text-sm">
          WARNING: 46 FILES UNACCOUNTED FOR. LAST BACKUP: ████-██-██
        </div>
      </div>
    </div>
  );
}
