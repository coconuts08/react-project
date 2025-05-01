import React from 'react';

const Youtube = () => {
  return (
    <section className="w-full bg-lightgray py-10 px-50 pt-50">
      <div className="container px-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IfZIR11Zdn4?rel=0"
            title="Join the Frontline Family!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
