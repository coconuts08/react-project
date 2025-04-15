import React from 'react'

const Dashboard = () => {
  return (
    <section className="h-100 snap-start flex flex-col items-center justify-center bg-blue-50 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to <span className="text-blue-600">MySite</span></h1>
        <p className="text-gray-600 mb-4">A simple one-page website built with React, React Icons, and smooth scrolling navigation.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get in Touch</button>
      </section>
  )
}

export default Dashboard