import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Logging in with', { email, password })
  }
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
        className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary"
      >
        {label}
      </label>
    </div>
  );
  

  return (
    <section className="flex items-center justify-center min-h-150 bg-white px-4">
      <div className="w-full max-w-md">
 
        <div className="text-center mb-6">
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/ftc_svg_logo.svg"
              alt="Hand Logo"
              className="w-80 h-20"
            />
           
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 uppercase">Forgot Password</h2>
          <form onSubmit={handleLogin} className="space-y-4">
          <FloatingInput label="Email" name="Email" />
   
            <button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>

    
          <div className="mt-4 text-sm text-gray-600 text-left space-y-1">
            <p>
              back to{' '}
              <Link to="/login" className="text-blue-500 underline">login </Link>
            </p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
