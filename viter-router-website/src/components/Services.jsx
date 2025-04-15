import React from 'react'

const Services = () => {
  return (
    <section className="h-100 snap-start flex flex-col items-center justify-center bg-gray-100 px-4 mb-40 sm:mb-0">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Web Development</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
        </div>
      </section>
  )
}

export default Services