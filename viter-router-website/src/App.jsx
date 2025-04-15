import React from 'react'
import { FaGithub, FaSackDollar } from 'react-icons/fa6'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import AboutUse from './components/AboutUse'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Dashboard/>
    <AboutUse/>
    <Services/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App