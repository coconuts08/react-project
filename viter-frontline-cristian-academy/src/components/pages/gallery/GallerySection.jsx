import React from 'react';

const GallerySection = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <h1 className="text-6xl font-light py-20 mb-6">Gallery</h1>
      
      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
  <div className="overflow-hidden">
    <img
      src="./public/img/galery/FCA-elementary-Performace.jpg"
      alt="Events"
      className="w-full h-48 object-cover grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 ease-in-out"
    />
    <h3 className="mt-2 text-2xl text-center">Events</h3>
  </div>
  <div className="overflow-hidden">
    <img
      src="./public/img/galery/FCA-Playschool.jpg"
      alt="Playschool"
      className="w-full h-48 object-cover grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 ease-in-out"
    />
    <h3 className="mt-2 text-2xl text-center">Playschool</h3>
  </div>
  <div className="overflow-hidden">
    <img
      src="./public/img/galery/facilities-fca.jpg"
      alt="Facilities"
      className="w-full h-48 object-cover grayscale hover:grayscale-0 transform hover:scale-105 transition duration-300 ease-in-out"
    />
    <h3 className="mt-2 text-2xl text-center">Facilities</h3>
  </div>
</div>


      <hr className="my-8 border-t" />

      {/* Videos Section */}
      <div className="text-left mb-4">
        <p className="text-4xl font-normal py-20">Videos</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <iframe 
            className="w-full h-60"
            src="https://www.youtube.com/embed/1cJAZpLbloU" 
            title="LITERARIO 2023: SING!" 
            allowFullScreen 
          />
          <h3 className="mt-2 text-2xl text-center">LITERARIO 2023: SING!</h3>
        </div>
        <div>
          <iframe 
            className="w-full h-60"
            src="https://www.youtube.com/embed/IfZIR11Zdn4?rel=0" 
            title="Join the Frontline Family!" 
            allowFullScreen 
          />
          <h3 className="mt-2 text-2xl text-center">Join the Frontline Family!</h3>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
 <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IfZIR11Zdn4?rel=0"
            title="Join the Frontline Family!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>