import React from 'react';
import { Menu, X, ArrowDownRight } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ scrolled, menuOpen, setMenuOpen, onQuote }) {
  const navItems = ['Solutions', 'Products', 'Services', 'About'];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo compact />

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a
            className="active"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="nav-cta cta-blue" onClick={onQuote}>
            Get a Quote
            <ArrowDownRight
              size={15}
              style={{ transform: 'rotate(-45deg)' }}
            />
          </button>
        </nav>

        <ThemeToggle />

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}