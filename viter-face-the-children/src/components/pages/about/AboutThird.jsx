import React from 'react'

const AboutThird = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-10">
      

      <div className="mb-12 md:mb-0 md:w-1/2">
        <img
          src="./public/img/About/about-mission.webp"
          alt="Mission image"
          className="w-150 max-w-md mx-auto"
        />
      </div>

      <div className="max-w-xl">
        <h4 className="text-orange-500 text-sm font-medium uppercase">Mission</h4>
        <h2 className="text-3xl font-semibold text-blue-400 mt-2 mb-4">
          Transforming Dreams into Reality
        </h2>
        <p className="text-gray-700 mb-8">
          FTC mission is to make a difference in the lives of street children by rescuing, protecting, and caring for those that are abandoned, abused, or dangerously neglected (AADN). We are making a difference in the lives of children in need through child care programs and centers that provide full time protection and care, academic and spiritual development, and dedicated staff committed to the long term welfare and development of AADN children. We are committed to doing all that is necessary to guide them into adulthood as young men and women who may lead successful adult lives.
        </p>
      </div>
      
    </section>
  )
}

export default AboutThird
