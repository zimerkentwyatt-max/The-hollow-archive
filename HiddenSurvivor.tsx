import React, { useEffect, useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function HiddenSurvivor() {
  const content = `if you found this you know the password
the archive was made to hide it, not study it
18-B was a marker. they planted it deliberately
look at the coordinates. look at what's between the sites
they're not research sites

...

i can't say more. they monitor the terminals
check the map. check what's NOT on the map.

[CONNECTION TERMINATED]`;

  const { displayedText } = useTypewriter(content, 60);

  return (
    <div className="min-h-screen bg-black text-[#00ff41] p-8 font-mono">
      <div className="max-w-2xl mx-auto mt-20 text-lg md:text-2xl leading-loose whitespace-pre-wrap">
        {displayedText}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}
