import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault()
   
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
    <section className="flex items-center justify-center min-h-180 bg-white px-4">
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

     
        <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">LOGIN</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <FloatingInput label="Email" name="Email" />

       
        <div className="relative">
          <FloatingInput
            label="Password"
            name="Password"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600 text-center space-y-1">
        <p>
          Need an Account?{' '}
          <Link to="/create-account" className="text-blue-500 underline">
            Create an Account
          </Link>
        </p>
        <p>
          Did you forget your password?{' '}
          <Link to="/forgot-password" className="text-blue-500 underline">
            Forgot Password
          </Link>
        </p>
      </div>
    </div>
      </div>
    </section>
  )
}

export default Login
