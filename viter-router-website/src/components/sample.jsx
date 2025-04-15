import React from "react";

export default function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-blue-50 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to <span className="text-blue-600">MySite</span></h1>
        <p className="text-gray-600 mb-4">A simple one-page website built with React, React Icons, and smooth scrolling navigation.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get in Touch</button>
      </section>

      {/* About Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl text-center md:text-left">
          <div>
            <h3 className="font-bold">Our Story</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div>
            <h3 className="font-bold">Our Mission</h3>
            <p className="text-gray-600">Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-gray-100 px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Web Development</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-blue-600 px-4 text-white">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-black">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="h-32 snap-start flex items-center justify-center bg-gray-900 text-white text-sm">
        <p>&copy; 2025 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
}
