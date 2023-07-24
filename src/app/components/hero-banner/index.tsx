import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { callToAction, description, greeting, intro, navbarData } from '../../shared/LinkData';

const Hero = () => {
  return (
    <section className='flex bg-black h-1/4 text-white px-8 pt-8 justify-evenly items-center'>
      <div className='w-1/2'>
        <div className='mb-4'>
          <p>
            <span className='text-7xl'>
              <span className='text-gray-500'>{greeting}&nbsp;</span>
              {intro}
            </span>
          </p>
        </div>
        <div className='text-center w-3/4'>
          <p>{description}</p>
          {navbarData[1].href && (
            <div className='text-center mt-8'>
              <p className='border border-white border-opacity-30 hover:border-opacity-70 transition'>
                <Link className='underline-offset-4' href={navbarData[1].href}>
                  {callToAction}
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className='text-white'>
          <Image src={'/images/hero-banner.png'} width={500} height={500} alt='hero-banner' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
