import React from 'react'







import Banner from './Banner'
import BannerSecond from './BannerSecond'
import BannerThird from './BannerThird'
import Affiliate from './Affiliate'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'


const Home = () => {
  return (
    <>
    
    <Header/>
      <Banner/>
      <BannerSecond/>
      <BannerThird/>
      <Affiliate/>
      <Footer/>

    </>
  )
}

export default Home