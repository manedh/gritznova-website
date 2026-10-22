import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export default function ThemeToggle() {
  const { resolvedTheme, toggle } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <Sun className="theme-icon theme-icon-sun" size={16} />
      <Moon className="theme-icon theme-icon-moon" size={16} />
    </button>
  );
}
