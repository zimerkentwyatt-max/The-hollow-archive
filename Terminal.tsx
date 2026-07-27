import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useLocation } from 'wouter';

interface LogEntry {
  type: 'input' | 'output' | 'error';
  content: string;
}

export function Terminal() {
  const { isLoggedIn } = useAuth();
  const [, setLocation] = useLocation();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [input, setInput] = useState('');
  const [booting, setBooting] = useState(true);
  const [authMode, setAuthMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const bootSequence = async () => {
      const bootLogs: LogEntry[] = [
        { type: 'output', content: 'HOLLOW ARCHIVE DATABASE v2.3' },
        { type: 'output', content: 'LOADING... [████████░░░░░░░░] 47%' },
        { type: 'output', content: 'PARTIAL RECOVERY DETECTED' },
        { type: 'output', content: 'SOME FILES UNAVAILABLE' },
        { type: 'output', content: "TYPE 'help' FOR COMMANDS" },
      ];

      for (let i = 0; i < bootLogs.length; i++) {
        await new Promise(r => setTimeout(r, 400 + Math.random() * 400));
        setLogs(prev => [...prev, bootLogs[i]]);
      }
      setBooting(false);
    };

    bootSequence();
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    setLogs(prev => [...prev, { type: 'input', content: `> ${cmd}` }]);

    if (authMode) {
      if (cmd === '18-B') {
        setLogs(prev => [...prev, { type: 'output', content: 'ACCESS GRANTED. ARCHIVE ACCESS UNLOCKED.' }]);
        localStorage.setItem('hollow-archive-auth', 'true');
        window.location.reload(); // Simple way to sync auth state
      } else {
        setLogs(prev => [...prev, { type: 'error', content: 'INVALID CREDENTIALS. ATTEMPT LOGGED.' }]);
      }
      setAuthMode(false);
      return;
    }

    switch (trimmed) {
      case 'help':
        setLogs(prev => [...prev, { type: 'output', content: 'AVAILABLE COMMANDS: help, status, files, 18-b, research, personnel, incident, timeline, unlock, secret, clear' }]);
        break;
      case 'status':
        setLogs(prev => [...prev, { type: 'output', content: 'DATABASE CONDITION: DAMAGED | RECOVERY: 34% | MISSING FILES: 46' }]);
        break;
      case 'files':
        setLogs(prev => [...prev, { type: 'output', content: 'AVAILABLE: FIELD REPORT 001\nLOCKED: FIELD REPORT 002, 003, INCIDENT FILES, PERSONNEL FILES' }]);
        break;
      case '18-b':
        setLogs(prev => [...prev, { type: 'output', content: 'SPECIMEN: 18-B | SPECIES: Ambrosia trifida | COMMON NAME: Giant Ragweed | STATUS: ACTIVE | OBSERVATIONS: 47 | NOTE: GROWTH RATE ANOMALOUS. SEE INCIDENT 001.' }]);
        break;
      case 'research':
        setLogs(prev => [...prev, { type: 'error', content: 'ACCESS DENIED — CLEARANCE LEVEL 4 REQUIRED' }]);
        break;
      case 'personnel':
        setLogs(prev => [...prev, { type: 'error', content: 'CLEARANCE REQUIRED — CONTACT SYSTEM ADMINISTRATOR' }]);
        break;
      case 'incident':
        setLogs(prev => [...prev, { type: 'error', content: 'FILE CORRUPTED — PARTIAL RECOVERY AVAILABLE AT /incidents' }]);
        break;
      case 'timeline':
        setLogs(prev => [...prev, { type: 'output', content: 'YEAR ████ - Anomalous organism identified.\nYEAR ████ - Hollow Archive created.\nYEAR ████ - Specimen 18-B classified.\nCURRENT - Database damaged.' }]);
        break;
      case 'unlock':
        if (isLoggedIn) {
          setLogs(prev => [...prev, { type: 'output', content: 'SYSTEM ALREADY UNLOCKED.' }]);
        } else {
          setLogs(prev => [...prev, { type: 'output', content: 'PASSWORD:' }]);
          setAuthMode(true);
        }
        break;
      case 'secret':
        if (isLoggedIn) {
          setLogs(prev => [...prev, { type: 'output', content: 'THE PLANTS REMEMBER. /hidden/original-record' }]);
        } else {
          setLogs(prev => [...prev, { type: 'error', content: 'COMMAND NOT RECOGNIZED' }]);
        }
        break;
      case 'clear':
        setLogs([]);
        break;
      case '':
        break;
      default:
        setLogs(prev => [...prev, { type: 'error', content: "COMMAND NOT RECOGNIZED. TYPE 'help' FOR AVAILABLE COMMANDS." }]);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (booting) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div 
      className="h-full w-full font-mono text-[#00ff41] text-sm md:text-base flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto mb-4 whitespace-pre-wrap">
        {logs.map((log, i) => (
          <div key={i} className={`mb-1 ${log.type === 'error' ? 'text-red-500' : ''}`}>
            {log.content}
          </div>
        ))}
        {booting && <div className="animate-pulse">_</div>}
        <div ref={bottomRef} />
      </div>
      
      {!booting && (
        <form onSubmit={onSubmit} className="flex">
          <span className="mr-2">{authMode ? 'PASSWORD:' : '>'}</span>
          <input
            ref={inputRef}
            type={authMode ? 'password' : 'text'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#00ff41]"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      )}
    </div>
  );
}
