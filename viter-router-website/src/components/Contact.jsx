import React from 'react'

const Contact = () => {
  return (
    <section className="h-150 snap-start flex flex-col items-center justify-center bg-blue-600 px-4 text-white">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-black">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Send Message</button>
        </form>
      </section>
  )
}

export default Contact