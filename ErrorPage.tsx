import React from 'react';
import { Link } from 'wouter';
import { GlitchText } from '../components/GlitchText';

export default function ErrorPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4">
      <div className="terminal-panel max-w-2xl w-full border-red-900/50">
        <div className="text-red-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-bold text-red-500 mb-2">
          <GlitchText text="SYSTEM ERROR" heavy />
        </h1>
        
        <div className="text-xl text-[#ffb000] mb-6">ERROR CODE: 404-HOLLOW</div>
        
        <p className="text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
          The file you are looking for may be among the 46 missing records. 
          Database reconstruction is currently at 34%. 
          Further recovery attempts have been suspended by order of Site Command.
        </p>

        <Link href="/">
          <button className="terminal-button border-red-500 text-red-500 hover:bg-red-500 hover:text-black">
            RETURN TO DASHBOARD
          </button>
        </Link>
      </div>
    </div>
  );
}
