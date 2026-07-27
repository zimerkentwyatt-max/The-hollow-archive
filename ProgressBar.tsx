import React from 'react';

interface ProgressBarProps {
  progress: number;
  width?: string;
}

export function ProgressBar({ progress, width = "100%" }: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const blocks = Math.floor(clampedProgress / 5);
  const totalBlocks = 20;
  
  const filled = "█".repeat(blocks);
  const empty = "░".repeat(totalBlocks - blocks);

  return (
    <div className="font-mono text-[#00ff41] whitespace-pre" style={{ width }}>
      [{filled}{empty}] {clampedProgress}%
    </div>
  );
}
