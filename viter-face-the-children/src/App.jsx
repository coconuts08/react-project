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
import Login from './components/pages/access/Login'
import CreateAccount from './components/pages/access/CreateAccount'
import ForgotPassword from './components/pages/access/ForgotPassword'
import ChildDetails from './components/pages/sponsor/ChildDetails'
import ChildDetailsHolder from './components/pages/sponsor/ChildDetailsHolder'
import DonateDetails from './components/pages/donate/DonateDetails'
import DonateDetailsHolder from './components/pages/donate/DonateDetailsHolder'
import ChildGrid from './components/pages/sponsor/ChildGrid'
import ChildCardHolder from './components/pages/sponsor/ChildCardHolder'







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
        <Route path="/sponsor" element={<ChildCardHolder/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/child-details" element={<ChildDetailsHolder/>}/>
        <Route path="/donate-details" element={<DonateDetailsHolder/>}/>
        <Route path="/cards" element={<ChildCardHolder/>}/>
       
        
      </Routes>
    </Router>
    







    </>
    

  )
}

export default App