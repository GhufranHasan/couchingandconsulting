// components/Footer.tsx
import React from 'react';
import { address, description, heading_title, logoImageLink, logoText, navbarData } from '../LinkData';

const Footer = () => {

  return (
    <footer className="bg-black text-white py-8 px-16">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* First Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4">
          <div className="mb-4">
            <img src={logoImageLink} alt="Footer Logo" className="w-32 mr-2" />
            <span className="font-semibold text-lg">{logoText.toUpperCase()}</span>
          </div>
          <p className="text-sm">{description}</p>
        </div>

        {/* Second Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-20">
          <h4 className="text-lg font-semibold mb-4">{heading_title}</h4>
          <ul className="space-y-2">
            {navbarData.map((link, index) => (
              <li className="text-gray-500 hover:text-white" key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-20">
          <h4 className="text-lg font-semibold mb-4">{navbarData[2].label}</h4>
          <ul className="space-y-2">
            {/* Map the sub-menu items for the "Services" menu item */}
            {navbarData[2].subItems?.map((subItem, index) => (
              <li className="text-gray-500 hover:text-white" key={index}>
                <a href={subItem.href}>{subItem.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-20">
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-gray-500 hover:text-white">{address}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
