// components/About.tsx
import React from 'react';
import { navbarData } from '@/app/shared/LinkData';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="py-8 text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">{navbarData[1].label}</h2>
        <div className="flex flex-wrap justify-evenly px-8">
          {/* First div with text */}
          <div className="w-full md:w-1/2 p-4">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo vel mi consequat
              volutpat eu non tortor. Integer bibendum elit nec augue euismod venenatis. Sed ut
              porttitor nisi, quis pellentesque felis. Vivamus consequat vel mauris et tincidunt.
              Integer euismod aliquam aliquet. Nunc laoreet purus at diam tincidunt vehicula. Etiam
              fringilla, lorem eu interdum luctus, neque massa iaculis purus, nec malesuada arcu
              velit vel justo.
            </p>
            <p>
              Quisque vestibulum tellus non orci tincidunt sagittis. Curabitur eget tristique elit.
              Integer eget diam nec libero tincidunt consectetur vel eget elit. Nam ac sem
              scelerisque, blandit orci nec, iaculis ex. Nam ut bibendum mauris, ut consectetur
              mauris. Proin ullamcorper, risus nec hendrerit faucibus, massa mauris convallis dui,
              ut tristique felis felis ac ligula.
            </p>
          </div>

          {/* Second div with image */}
          <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <Image src="images/card2.jpg" alt="About Us" className="w-64 h-64 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
