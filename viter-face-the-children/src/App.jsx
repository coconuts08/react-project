import React from 'react'



import Faqsection from './components/pages/faqs/Faqsection'
import StrategySection from './components/pages/strategy/StrategySection'
import ContactSection from './components/pages/contacts/ContactSection'

import Donate from './components/pages/donate/Donate'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from './components/partials/PageNotFound'
import Home from './components/pages/home/Home'
import AboutHolder from './components/pages/about/AboutHolder'
import SponsorSection from './components/pages/sponsor/SponsorSection'






const App = () => {
  return (
    <>
   


    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutHolder/>}/>
        <Route path="/faq" element={<Faqsection/>}/>
        <Route path="/strategy" element={<StrategySection/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
        <Route path="/sponsor" element={<SponsorSection/>}/>
        <Route path="/donate" element={<Donate/>}/>
        
      </Routes>
    </Router>
    







    </>
    

  )
}

export default App