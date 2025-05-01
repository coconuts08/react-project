import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('./img/home/bgcamo.jpg')",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-50">
        {/* Left side - Hero Image */}
        <div className="flex flex-col items-center">
          <img
            src="./img/home/hero1.webp" // updated path
            alt="Hero 1"
            className="w-80 h-85 object-cover  mb-6 " // bigger size + shadow
          />
        </div>

        {/* Right side - Text with Checkmarks */}
        <div className="flex flex-col space-y-6">
          {[
            "Beautiful, Spacious Facilities",
            "Social Emotional Learning",
            "Holistic Development",
            "Highly Skilled and Caring Faculty",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <img
                src="./img/home/check.png" // updated path
                alt="Check"
                className="w-6 h-6"
              />
              <span className="text-xl font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
