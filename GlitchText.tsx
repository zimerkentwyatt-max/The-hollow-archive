import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  heavy?: boolean;
}

export function GlitchText({ text, className = '', heavy = false }: GlitchTextProps) {
  const glitchClass = heavy ? 'glitch-heavy' : 'glitch';
  return (
    <span className={`inline-block ${glitchClass} ${className}`} data-text={text}>
      {text}
    </span>
  );
}
