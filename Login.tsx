import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '../hooks/useAuth';
import { GlitchText } from '../components/GlitchText';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login, isLoggedIn, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === 'observer' && password === '18-B') {
      login();
      setTimeout(() => setLocation('/'), 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="terminal-panel text-center max-w-md w-full">
          <div className="text-[#00ff41] font-bold text-xl mb-4">SYSTEM AUTHENTICATED</div>
          <p className="mb-8 text-sm">You are currently logged in with clearance level 4.</p>
          <button onClick={logout} className="terminal-button w-full">DISCONNECT</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center relative">
      <div className="terminal-panel max-w-md w-full relative z-10 bg-black">
        <div className="text-center mb-8 border-b-2 border-double border-[#1a3a1a] pb-4">
          <h2 className="text-2xl font-bold tracking-widest mb-1">HOLLOW ARCHIVE</h2>
          <div className="text-xs text-[#ffb000]">AUTHENTICATION REQUIRED</div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 opacity-70">USER ID:</label>
            <input 
              type="text" 
              className="terminal-input w-full" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 opacity-70">PASSWORD:</label>
            <input 
              type="password" 
              className="terminal-input w-full" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="terminal-button w-full tracking-widest mt-4">
            AUTHENTICATE
          </button>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-500 text-sm animate-pulse border border-red-500 bg-red-950/30 p-2">
            <GlitchText text="INVALID CREDENTIALS. ATTEMPT LOGGED." />
          </div>
        )}
      </div>

      {error && (
        <div className="absolute inset-0 bg-red-500/10 z-0 pointer-events-none animate-pulse"></div>
      )}
    </div>
  );
}
