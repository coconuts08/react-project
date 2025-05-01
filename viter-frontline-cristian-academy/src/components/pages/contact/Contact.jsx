import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import ContactSection from './ContactSection'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='pt-50'>
    <ContactSection/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact