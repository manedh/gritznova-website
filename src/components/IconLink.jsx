import React from 'react';
import { ArrowDownRight } from 'lucide-react';
export default function IconLink({ size = 15 }) {
  return <ArrowDownRight size={size} style={{ transform: 'rotate(-45deg)' }} />;
}
