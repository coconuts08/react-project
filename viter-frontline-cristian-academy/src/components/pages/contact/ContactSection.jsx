import React from 'react';
import { Mail, Phone, Smartphone, Facebook, MapPin } from 'lucide-react';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { HiMapPin } from 'react-icons/hi2';
import { IoMail } from 'react-icons/io5';
import { MdOutlineSmartphone } from 'react-icons/md';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-8 bg-white rounded  max-w-6xl mx-auto">
      {/* Form Section */}
      <div className="flex-1 p-4 bg-white shadow-2xl">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-50 py-2 rounded hover:bg-green-700 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="flex-1 p-4 text-gray-800 ">
        <h2 className="text-8xl font-light mb-6">Contact Us</h2>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2">
          <FaPhoneAlt size={20} className='text-green-600' />
            <span>(049) 521-0732</span>
          </div>
          <div className="flex items-center gap-2">
          <MdOutlineSmartphone size={20} className='text-green-600'/>
            <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
          </div>
          <div className="flex items-center gap-2">
          <IoMail size={20} className='text-green-600' />
            <span>info@fca.edu.ph</span>
          </div>
          <div className="flex items-center gap-2">
          <FaFacebook size={20} className='text-green-600'/>
            <a href="https://facebook.com/frontlinechristianacademy" target="_blank" rel="noreferrer" className="text-blue-600">
              facebook.com/frontlinechristianacademy
            </a>
          </div>
          <div className="flex items-center gap-2">
          <HiMapPin size={20} className='text-green-600'/>
            <span>Baloc Rd., Brgy. San Ignacio, San Pablo City, 4000 Laguna</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
