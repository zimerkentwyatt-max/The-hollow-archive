import { useState, useEffect } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('hollow-archive-auth');
    if (status === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem('hollow-archive-auth', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('hollow-archive-auth');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
