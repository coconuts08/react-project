import React from 'react'
import Header from '../../partials/Header'
import AboutUs from './AboutUs'
import Footer from '../../partials/Footer'
import ChildCardHolder from './ChildCardHolder'



const About = () => {
  return (
    <>
    <Header/>
    <div className='pt-40'>
    <AboutUs/>
    </div>

      <div className='md:pl-50'>
    <ChildCardHolder/>
    </div>
    <Footer/>
    </>
  )
}

export default About