import React from 'react'

const AboutSecond = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
     

      {/* Text section */}
      <div className="max-w-xl md:ml-12 md:w-1/2">
        <h4 className="text-orange-500 text-sm font-medium uppercase">Vision</h4>
        <h2 className="text-3xl font-bold text-blue-400 mt-2 mb-4">
        Empowering Change, Inspiring Purpose
        </h2>
        <p className="text-gray-700 mb-8">
        A nationwide network of child care centers committed to the advocacy, protection, care and development of abandoned, abused, or dangerously neglected children.
        </p>
      
      </div>
       {/* for image first on mobile view */}
       <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://facethechildren.org/images/website/about-vision.webp"
          alt="img3"
          className="w-100 max-w-lg md:max-w-xl rounded-lg"
        />
      </div>
    </section>
  )
}

export default AboutSecond