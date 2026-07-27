import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { GlitchText } from './GlitchText';

interface TerminalChromeProps {
  children: React.ReactNode;
}

export function TerminalChrome({ children }: TerminalChromeProps) {
  const { isLoggedIn, logout } = useAuth();
  const [location, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'DASHBOARD', path: '/' },
    { label: 'FIELD RECORDS', path: '/fieldreports' },
    { label: 'SPECIMEN DATABASE', path: '/specimens' },
    { label: 'PERSONNEL FILES', path: '/personnel' },
    { label: 'INCIDENT REPORTS', path: '/incidents' },
    { label: 'ARCHIVE TERMINAL', path: '/terminal' },
    { label: 'RESEARCH DOCUMENTS', path: '/research' },
    { label: 'DOWNLOADS', path: '/downloads' },
    { label: 'MAP', path: '/map' },
    { label: 'TIMELINE', path: '/timeline' },
  ];

  return (
    <div className="min-h-screen flex flex-col p-2 md:p-6 bg-black text-[#00ff41] font-mono">
      {/* Top Status Bar */}
      <div className="border border-[#1a3a1a] bg-[#0a0a0a] p-2 mb-4 flex flex-col md:flex-row justify-between text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold">HOLLOW ARCHIVE DATABASE v2.3</span>
          <span className="hidden md:inline">|</span>
          <span className="text-[#ffb000]">SYSTEM STATUS: DEGRADED</span>
        </div>
        <div className="flex items-center gap-4 justify-between mt-2 md:mt-0">
          <span className="hidden md:inline">|</span>
          <span>ACCESS: {isLoggedIn ? 'AUTHENTICATED' : 'PUBLIC'}</span>
          <button 
            className="md:hidden border border-[#00ff41] px-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row gap-4 relative">
        {/* Sidebar Navigation */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 border border-[#1a3a1a] bg-[#0a0a0a] p-4 flex-shrink-0 z-20`}>
          <div className="text-xs text-[#003300] mb-4">AVAILABLE MODULES</div>
          <nav className="flex flex-col gap-2">
            {navItems.map(item => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)}>
                  <div className={`cursor-pointer hover:bg-[#00ff41] hover:text-black p-1 ${isActive ? 'bg-[#003300] border-l-2 border-[#00ff41]' : ''}`}>
                    &gt; {item.label}
                  </div>
                </Link>
              );
            })}
            
            <div className="mt-8 pt-4 border-t border-[#1a3a1a]">
              {isLoggedIn ? (
                <button 
                  onClick={() => { logout(); setLocation('/'); setMenuOpen(false); }}
                  className="w-full text-left cursor-pointer hover:bg-[#00ff41] hover:text-black p-1 text-[#ffb000]"
                >
                  &gt; LOGOUT
                </button>
              ) : (
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <div className="cursor-pointer hover:bg-[#00ff41] hover:text-black p-1">
                    &gt; LOGIN
                  </div>
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 border border-[#1a3a1a] bg-[#050505] p-4 md:p-8 relative overflow-hidden min-h-[500px]">
          {/* Classified Watermark if logged in */}
          {isLoggedIn && (
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[8rem] font-bold text-[#1a3a1a]/20 pointer-events-none select-none z-0 whitespace-nowrap">
               CLASSIFIED
             </div>
          )}
          
          <div className="relative z-10 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
