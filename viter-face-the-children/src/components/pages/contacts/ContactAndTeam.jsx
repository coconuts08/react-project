import React from 'react';


const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
    >
      {label}
    </label>
  </div>
);

const ContactAndTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-20 md:pt-30">

      <section className="flex flex-col lg:flex-row justify-between gap-10">
      
        <div className="lg:w-1/2 space-y-6">
          <h5 className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
            Let's Talk
          </h5>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
            We’re Here for You
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            We believe in building strong relationships and fostering a sense of community. Your feedback and inquiries are important to us, and we strive to respond as quickly and thoroughly as possible.
          </p>

          <div className="text-sm text-gray-800 space-y-2">
            <p>Feel free to get in touch with us via phone</p>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <p className="text-blue-400">
              Philippines: <a href="tel:+639274203409">+63 927 420 3409</a>
              </p>
              <p className="text-blue-400">
              USA: <a href="tel:+18157979177">+815 797 9177</a>
              </p>
            </div>
          </div>

          <div className="text-sm">
            <p>Visit us here in the Philippines</p>
            <p className="text-blue-400 font-medium">
              Frontline Mission Center, Sitio Subac, <br />
              Brgy. Sto Niño, San Pablo City, 4000 Laguna
            </p>
          </div>
        </div>

     
        <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-4 text-sm">
              <FloatingInput label="Name" name="name" />
              <FloatingInput label="Email" name="email" type="email" />
              <FloatingInput label="Phone" name="phone" type="tel" />
              <FloatingInput label="Subject" name="subject" />

              <div className="relative w-full">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 text-xs bg-white px-1 text-blue-400"
                >
                  Message
                </label>
              </div>

                <div className="md:w-1/2 space-y-4">
              <button className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-6 py-2 rounded font-semibold">
          Submit
        </button>
        </div>


            </form>
          </div>
      </section>

      
      <section className="text-center space-y-10 ">
        <div>
          <h5 className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
            Get to know us
          </h5>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">Our Dedicated Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 justify-items-center">
     
          <div className="space-y-2 text-center">
            <img
              src="./public/img/Contact/team-judea.webp"
              alt="Judea Delos Santos"
              className="w-60 h-60 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-400">Judea Delos Santos</h4>
            <p className="text-sm text-gray-600"><i>Communication & Development Staff</i></p>
            <a href="mailto:judea.delossantos@thefrontline.asia" className="text-blue-400 text-sm">
              judea.delossantos@thefrontline.asia
            </a>
          </div>

   
          <div className="space-y-2 text-center">
            <img
              src="./public/img/Contact/team-mike.webp"
              alt="Michael Gordon"
              className="w-60 h-60 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-400">Michael Gordon</h4>
            <p className="text-sm text-gray-600"> <i>Spiritual Director</i></p>
            <a href="mailto:mike.gordon@thefrontline.asia" className="text-blue-400 text-sm">
              mike.gordon@thefrontline.asia
            </a>
          </div>

      
          <div className="space-y-2 text-center">
            <img
              src="./public/img/Contact/team-jp.webp"
              alt="John Katigbak"
              className="w-60 h-60 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-400">John Katigbak</h4>
            <p className="text-sm text-gray-600"><i>Managing Director</i></p>
            <a href="mailto:john.katigbak@thefrontline.asia" className="text-blue-400 text-sm">
              john.katigbak@thefrontline.asia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAndTeam;
