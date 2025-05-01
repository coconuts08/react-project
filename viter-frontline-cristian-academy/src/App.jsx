import React from 'react'

import AboutUs from './components/pages/about/AboutUs'

import ChildCardHolder from './components/pages/about/ChildCardHolder'
import AdmisionSection from './components/pages/admision/AdmisionSection'
import ServicesSection from './components/pages/services/ServicesSection'
import GallerySection from './components/pages/gallery/GallerySection'
import ContactSection from './components/pages/contact/ContactSection'
import FaqsSection from './components/pages/faqs/FaqsSection'

import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Home from './components/pages/home/Home'
import Admision from './components/pages/admision/Admision'
import About from './components/pages/about/About'
import Services from './components/pages/services/Services'
import Gallery from './components/pages/gallery/Gallery'
import Contact from './components/pages/contact/Contact'

const App = () => {
  return (
    <>
      

      <Router>
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/admision" element={<Admision/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
       
       
        
      </Routes>
    </Router>




    </>
  )
}

export default App
