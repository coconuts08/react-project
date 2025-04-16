import React from 'react'

const Banner = () => {
  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h4 className="text-sm text-orange-500 font-semibold uppercase mb-2">Creating Opportunity</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-6">
            Making a difference for abandoned, abused, or dangerously <br/> neglected children
          </h2>
          <a
            href="#sponsor"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Sponsor Now
          </a>
        </div>
        <div className="mb-12 md:mb-0 md:w-1/2">
          <img src="https://facethechildren.org/images/website/h-banner.webp" alt="Children Graphic" className="w-full max-w-md mx-auto" />
        </div>
      </section>
  )
}

export default Banner