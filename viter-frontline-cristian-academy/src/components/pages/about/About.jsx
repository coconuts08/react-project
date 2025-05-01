import React from 'react'
import Header from '../../partials/Header'
import AboutUs from './AboutUs'
import Footer from '../../partials/Footer'

const About = () => {
  return (
    <>
    <Header/>
    <div className='pt-40'>
    <AboutUs/>
    </div>
    <Footer/>
    </>
  )
}

export default About