import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path ? 'text-[#fc9827]' : 'text-gray-600';
  const isActive2 = (path) => location.pathname === path ? 'text-white bg-[#fc9827] py-1 px-4 rounded-md text-sm' : 'text-white bg-[#3e9bd0] py-1 px-4 rounded-md text-sm';

  return (
    
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 mt-5">
      <header className="bg-blue-400 shadow fixed top-0 left-0 right-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between text-white text-[10px]">
      <div />
      <div className="flex space-x-4">
        <a href="https://www.thefrontline.asia/">Visit Philippine Frontline Ministries</a>
        <Link to="/login" className="text-white">login </Link>
      </div>
    </div>
  </header>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="./ftc_svg_logo.svg" alt="Logo" className="h-8" />


{/* Desktop Nav */}
<ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
  <li className={isActive('/')}>
    <Link to="/" className="text-textyellow">
      Home
    </Link>
  </li>
  <li className={isActive('/about')}>
    <Link to="/about" className="hover:text-orange-500">
      About
    </Link>
  </li>
  <li className={isActive('/faq')}>
    <Link to="/faq" className="hover:text-orange-500">
      FAQ
    </Link>
  </li>
  <li className={isActive('/strategy')}>
    <Link to="/strategy" className="hover:text-orange-500">
      Strategy
    </Link>
  </li>
  <li className={isActive('/contact')}>
    <Link to="/contact" className="hover:text-orange-500">
      Contact
    </Link>
  </li>
  <li className={isActive('/sponsor')}>
    <Link to="/sponsor" className="hover:text-orange-500">
      Sponsor child
    </Link>
  </li>
  <li className={isActive('/donate')}>
    <Link
      to="/donate"
      className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover"
    >
      Donate
    </Link>
  </li>
</ul>

        {/* Mobile Menu Button with Smooth Transition */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          <span className="transition-all duration-300 ease-in-out transform">
            {isOpen ? (
              <X
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            ) : (
              <Menu
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            )}
          </span>
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-19 left-0 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800 uppercase">
        <li className={isActive('/')}>
    <Link to="/" className="text-textyellow">
      Home
    </Link>
  </li>
  <li className={isActive('/about')}>
    <Link to="/about" className="hover:text-orange-500">
      About
    </Link>
  </li>
  <li className={isActive('/faq')}>
    <Link to="/faq" className="hover:text-orange-500">
      FAQ
    </Link>
  </li>
  <li className={isActive('/strategy')}>
    <Link to="/strategy" className="hover:text-orange-500">
      Strategy
    </Link>
  </li>
  <li className={isActive('/contact')}>
    <Link to="/contact" className="hover:text-orange-500">
      Contact
    </Link>
  </li>
  <li className={isActive('/sponsor')}>
    <Link to="/sponsor" className="hover:text-orange-500">
      Sponsor child
    </Link>
  </li>
  <li className={isActive('/donate')}>
    <Link
      to="/donate"
      className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover"
    >
      Donate
    </Link>
  </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;