import React from 'react';

interface BrandLogosRowProps {
  logos: string[];
}

const BrandLogosRow: React.FC<BrandLogosRowProps> = ({ logos }) => {
  return (
    <div className="flex justify-between items-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Brand Logo ${index}`}
          className="w-1/6 h-auto p-4"
        />
      ))}
    </div>
  );
};

export default BrandLogosRow;
