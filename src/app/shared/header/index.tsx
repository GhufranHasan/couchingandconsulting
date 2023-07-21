"use client";
import React, { useState, useEffect } from 'react';

// components/Header.tsx
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowDropdown(false);
    };

    if (showDropdown) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showDropdown]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    return (
      <nav className="bg-black text-white">
        <div className="flex items-center justify-between py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="w-32 mr-2" />
            <span className="text-xl font-semibold">HAROON RANA</span>
          </div>
  
          {/* Menu Items */}
          <ul className="flex space-x-6">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="relative">
              <a href="#services" onClick={toggleDropdown}>Services</a>
              {/* Dropdown Menu */}
            <ul className={`absolute top-10 left-0 bg-black text-white py-2 px-4 space-y-2 ${
                showDropdown ? 'block' : 'hidden'
              }`}>
              <li className="hover:bg-white hover:text-black">
                <a href="#coaching">Coaching</a>
              </li>
              <li className="hover:bg-white hover:text-black">
                <a href="#consulting">Consulting</a>
              </li>
              <li className="hover:bg-white hover:text-black">
                <a href="#public-speaking">Public Speaking</a>
              </li>
              <li className="hover:bg-white hover:text-black">
                <a href="#state-of-city">State of City</a>
              </li>
            </ul>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;
  