import { useState } from "react";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, Links } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="mx-auto w-full max-w-[1600px] px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4 py-2 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="./public/img/fca-logo.webp"
              alt="FCA Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Desktop Contact Info and Buttons */}
          <div className="hidden md:flex flex-col items-center gap-2 text-xs text-black md:flex-row md:gap-6">
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4 font-raleway text-lg">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-black" size={12} />
                <span>(049) 521-0732</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt className="text-black" size={12} />
                <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button className="rounded-md bg-blue px-4 py-2 text-xs text-white hover:bg-[#2f4678]">
                Facebook
              </button>
              <button className="rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
                FAQ's
              </button>
            </div>
          </div>

          {/* Mobile Burger Button (Right Side) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center p-2 transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {menuOpen ? (
                  <HiOutlineArrowNarrowLeft className="text-3xl text-black" />
                ) : (
                  <HiOutlineMenu className="text-3xl text-black" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Nav Section Desktop Only */}
        <nav className="relative items-center justify-between py-3 text-sm font-medium font-raleway text-gray-700 hidden md:flex">
          {/* Menu Items */}
          <div className="flex flex-1 items-center justify-center">
            {[
              <Link to="/home" >Home </Link>,
              <Link to="/about" >ABOUT </Link>,
              <Link to="/admision" >ADMISSION </Link>,
              <Link to="/services" >SERVICES </Link>,
              <Link to="/gallery" >GALLERY </Link>,
              <Link to="/contact" >CONTACT </Link>,
              <Link to="/literario" >LITERARIO </Link>,
              
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-1 items-center justify-center relative"
              >
                <span className="text-center">{item}</span>
                {/* Divider except after last */}
                {index < 6 && (
                  <div className="absolute right-0 top-1/2 h-6 w-px -translate-y-1/2 bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* Give Button */}
          <div className="ml-8 flex-shrink-0">
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
              GIVE
            </button>
          </div>

          {/* Active underline (Desktop Only) */}
          <div className="absolute top-0 left-0 h-1 w-[200px] rounded-full bg-primary" />
        </nav>

        {/* Mobile Slide-in Panel */}
        <div
          className={`fixed top-[88px] left-0 right-0 h-[calc(100vh-88px)] bg-white transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-6 mt-8 font-raleway text-gray-700">
            {[
              <Link to="/home" >Home </Link>,
              <Link to="/about" >ABOUT </Link>,
              <Link to="/admision" >ADMISSION </Link>,
              <Link to="/services" >SERVICES </Link>,
              <Link to="/gallery" >GALLERY </Link>,
              <Link to="/contact" >CONTACT </Link>,
              <Link to="/literario" >LITERARIO </Link>,
            ].map((item, index) => (
              <span key={index} className="text-lg">
                {item}
              </span>
            ))}

            <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
              GIVE
            </button>

            {/* Contact Info */}
            <div className="flex flex-col items-center text-center text-sm text-black mt-4 gap-2">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-black" size={12} />
                <span>(049) 521-0732</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt className="text-black" size={12} />
                <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-2 mt-4 w-full px-8">
              <button className="bg-blue hover:bg-blue-800 text-white px-4 py-2 rounded">
                Facebook
              </button>
              <button className="w-full rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
                FAQ's
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}