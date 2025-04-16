import React from 'react'

const BannerThird = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
    <div className="max-w-xl">
    <h4 className="text-orange-500 text-sm font-medium uppercase">Our Solutions</h4>
        <h2 className="text-3xl font-bold text-blue-400 mt-2 mb-4">
        Services We Provide
        </h2>
        <p className="text-gray-700 mb-8">
          When we come together as a community, our collective efforts can lead to monumental changes.
          By fostering a culture of sharing, we not only help those in immediate need but also build a
          foundation of support and compassion that benefits everyone.
        </p>
      <a
        href="#sponsor"
        className="inline-block bg-blue-400 text-white px-6 py-1 rounded hover:bg-blue-600"
      >
        Learn more
      </a>
    </div>
    <div className="mb-12 md:mb-0 md:w-1/2">
      <img src="https://facethechildren.org/images/website/h-service.webp" alt="Children Graphic" className="w-full max-w-md mx-auto" />
    </div>
  </section>
  )
}

export default BannerThird