import React from 'react'
import Banner from './Banner'
import YoutubeSection from './YoutubeSection'
import HeroSection from './HeroSection'
import Testimonial from './Testimonial'
import Scholarship from './Scholarship'
import MapSection from './MapSection'
import Affiliates from './Affiliates'
import Footer from '../../partials/Footer'
import Header from '../../partials/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <YoutubeSection/>
    <HeroSection/>
    <Testimonial/>
    <Scholarship/>
    <MapSection/>
    <Affiliates/>
    <Footer/>
    </>
  )
}

export default Home