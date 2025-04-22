import React from 'react'

import About from './About'
import AboutSecond from './AboutSecond'
import AboutThird from './AboutThird'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import ImpactMessage from '../../partials/ImpactMessage'





const AboutHolder = () => {
  return (
    <>

    <Header/>
    <About/>
    <AboutSecond/>
    <AboutThird/>
    <ImpactMessage/>
    <Footer/>

    </>
  )
}

export default AboutHolder
