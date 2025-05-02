import React from 'react'
import FaqsSection from './FaqsSection'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'

const Faqs = () => {
  return (
    <> 
    <Header/>
    <div className='pt-50'>
    <FaqsSection/>
    </div>
    <Footer/>
    
    </>
  )
}

export default Faqs