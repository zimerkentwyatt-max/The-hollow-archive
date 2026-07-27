import React from 'react';
import { Terminal } from '../components/Terminal';

export default function TerminalPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 text-[#ffb000] border-b border-[#1a3a1a] pb-2 text-sm uppercase">
        ARCHIVE TERMINAL EMULATOR v1.0
      </div>
      <div className="flex-1 bg-black p-4 border border-[#1a3a1a]">
        <Terminal />
      </div>
    </div>
  );
}
