import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BackToTop() {
  return (
    <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <ArrowRight size={18} style={{ transform: 'rotate(-90deg)' }} />
    </button>
  );
}
