import React, { useState } from 'react';
import { X, Menu } from 'lucide-react'; // Optional: For icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-blue-400  text-white text-sm py-1 px-4 flex justify-end sm:px-80 space-x-4">
  <a href="#visit" className="hover:underline">Visit Philippine Frontline Ministries</a>
  <a href="#login" className="hover:underline">Login</a>
</div>


      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 sm:px-80 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/ftc_svg_logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="text-orange-500">Home</li>
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#faq" className="hover:text-orange-500">FAQ</a></li>
          <li><a href="#strategy" className="hover:text-orange-500">Strategy</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          <li><a href="#sponsor" className="hover:text-orange-500">Sponsor child</a></li>
          <a href="#donate" className="ml-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">Donate</a>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-center py-4 space-y-4 shadow-md">
          <a href="#home" className="text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#faq" className="hover:text-orange-500">FAQ</a>
          <a href="#strategy" className="hover:text-orange-500">Strategy</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
          <a href="#sponsor" className="hover:text-orange-500">Sponsor child</a>
          <a href="#donate" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-sm">Donate</a>
        </div>
      )}
    </div>
  );
};

export default Header;
