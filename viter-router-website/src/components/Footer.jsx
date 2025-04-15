import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="h-32 snap-start  bg-gray-900 text-white text-sm">
     <ul className="flex items-center justify-center pt-10 gap-5 ">
        <li><FaGithub/></li>
        <li><FaTwitter/></li>
        <li><FaLinkedin/></li>
    </ul>
        <p className="flex items-center justify-center">&copy; 2025 MySite. All rights reserved.</p>
      </footer>
  );
};

export default Footer;
