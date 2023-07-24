import React from 'react';
import { navbarData } from '../shared/LinkData';
import ComingSoon from '../shared/coming-soon';

export default function Coaching() {
  return (
    <div className="text-black">
      {navbarData[2].subItems?.map((subItem) => (
        <h2 key={subItem.label} className="text-3xl font-semibold my-12 text-center">
          {subItem.label}
        </h2>
      ))}
      <ComingSoon />
    </div>
  );
}
