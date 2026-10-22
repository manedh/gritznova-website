import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'gritznova-theme';
const ThemeContext = createContext(null);

const systemTheme = () =>
  window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

function readStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
  } catch {
    return 'system';
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readStored); // 'light' | 'dark' | 'system'
  const [system, setSystem] = useState(systemTheme);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => setSystem(mq.matches ? 'light' : 'dark');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const resolvedTheme = theme === 'system' ? system : theme;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
    root.style.colorScheme = resolvedTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolvedTheme === 'light' ? '#ffffff' : '#090a0c');
  }, [resolvedTheme]);

  const setTheme = useCallback((next) => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 450);
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: theme just won't persist */
    }
  }, []);

  const toggle = useCallback(
    () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [resolvedTheme, setTheme]
  );

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, toggle }),
    [theme, resolvedTheme, setTheme, toggle]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
