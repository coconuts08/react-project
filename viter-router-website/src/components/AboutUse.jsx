import React from 'react'

const AboutUse = () => {
  return (
    <section className="h-100 snap-start flex flex-col items-center justify-center px-4">
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
  )
}

export default AboutUse