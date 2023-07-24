import React from 'react';
import Image from 'next/image';

interface BrandLogosRowProps {
  logos: string[];
}

const BrandLogosRow: React.FC<BrandLogosRowProps> = ({ logos }) => {
  return (
    <div className="flex justify-between items-center">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt={`Brand Logo ${index}`}
          className="w-1/6 h-auto p-4"
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default BrandLogosRow;
