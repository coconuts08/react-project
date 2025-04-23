import React from 'react'
const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-gray-100 px-1 text-primary"
    >
      {label}
    </label>
  </div>
);

const FAQContactForm = () => {
  return (
    <section className="bg-gray-100 px-6 py-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h5 className="text-sm text-orange-500 font-semibold uppercase mb-1">Frequently Asked Question</h5>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">
          Can't find what you are looking for?
        </h2>
        <p className="text-gray-700">
          If your question is not listed above, you can use the form to send it directly to us.
        </p>
      </div>
      <form className="md:w-1/2 space-y-4 ">
        <FloatingInput label="Name" name="name" />
              <FloatingInput label="Email" name="email" type="email" />
              <FloatingInput label="Phone" name="phone" type="tel" />
              <FloatingInput label="Subject" name="subject" />

            
              <div className="relative w-full ">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2 text-xs bg-gray-100 px-1 text-primary"
                >
                  Message
                </label>
              </div>

              <button className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-6 py-2 rounded font-semibold">
          Submit
        </button>
      </form>
    </div>
  </section>
  )
}

export default FAQContactForm
