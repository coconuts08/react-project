import React from 'react'

const About = () => {
  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl flex flex-col md:flex-row items-center justify-between sm:flex-col-reverse md:pt-30">
      <div className="mb-12 md:mb-0 md:w-1/2">
        <img
          src="https://facethechildren.org/images/website/about-banner.webp"
          alt="Streets to Smiles img"
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div className="max-w-xl">
        <h4 className="text-sm text-orange-500 font-semibold uppercase mb-2">
          From Streets to Smiles
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
          Transform lives from the harsh reality of the streets to the warmth and comfort of genuine smiles
        </h2>
        <a
            href="#sponsor"
            className="inline-block bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Sponsor Now
          </a>
      </div>
    </section>
  )
}

export default About
