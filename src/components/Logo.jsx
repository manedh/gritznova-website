import React from 'react';
import logo from '../assets/logo2.png';
export default function Logo({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#home" aria-label="GRITZNOVA home"><img src={logo} alt="GRITZNOVA" /></a>;
}
