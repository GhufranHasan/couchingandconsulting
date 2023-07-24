"use client";
import React, { useState, useEffect, useRef } from 'react';
import { logoImageLink, logoText, navbarData } from '../LinkData';
import Image from 'next/image';
import './header.css';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  const toggleDropdown = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-black text-white">
      <div className="flex items-center justify-between py-4 px-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logoImageLink} alt="Logo" className="w-10 h-10 mr-2" width={200} height={200} />
          <span className="text-xl font-semibold">{logoText.toUpperCase()}</span>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6 py-2 font-medium">
          {navbarData.map((item, index) => (
            <li
              key={index}
              className={`py-2 pl-3 pr-4 text-${index === 0 ? 'white' : 'gray-500'} rounded ${
                index === 2 ? 'relative hidden md:block' : ''
              } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-50 md:p-0`}
            >
              <a
                href={item.href}
                onClick={index === 2 ? toggleDropdown : undefined}
                className={index === 2 ? 'cursor-pointer' : ''}
              >
                {item.label}
              </a>
              {/* Submenu */}
              {index === 2 && (
                <ul
                  ref={dropdownRef}
                  className={`absolute top-10 left-0 bg-black text-gray-500 py-2 px-4 space-y-2 ${
                    showDropdown ? 'block' : 'hidden'
                  } dropdown-menu`}
                >
                  {item.subItems?.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:text-white">
                      <a href={subItem.href}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
