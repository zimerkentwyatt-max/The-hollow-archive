import React from 'react';

interface RedactedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RedactedText({ children, className = '' }: RedactedTextProps) {
  return (
    <span 
      className={`bg-black text-black select-none ${className}`} 
      style={{ display: 'inline-block', lineHeight: 1 }}
      title="[REDACTED]"
    >
      {children}
    </span>
  );
}
