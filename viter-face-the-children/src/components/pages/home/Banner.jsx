import React from "react";

const Banner = () => {
  return (
    <section className="bg-white py-16 mt-20 md:ml-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:ml-5 md:pr-8">
          <small className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </small>
          <h1 className="text-5xl  text-gray-800 font-semibold mb-6 md:mt-10">
            Making a difference for abandoned, abused, or dangerously <br />
            neglected children
          </h1>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 text-sm">
            Sponsor Now
          </button>
        </div>

        <div className="w-full md:ml-5 mt-10 md:mt-10">
          <img src="./public/img/Home/h-banner.webp" alt="Children Graphic"  />
        </div>
      </div>
    </section>
  );
};

export default Banner;