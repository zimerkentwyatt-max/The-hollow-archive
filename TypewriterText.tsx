import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export function TypewriterText({ text, speed = 30, className = '', cursor = true, onComplete }: TypewriterTextProps) {
  const { displayedText, isComplete } = useTypewriter(text, speed, onComplete);

  return (
    <span className={className}>
      {displayedText}
      {cursor && !isComplete && <span className="animate-pulse">_</span>}
    </span>
  );
}
