import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import GallerySection from './GallerySection'

const Gallery = () => {
  return (
    <>
    <Header/>
    <div className='pt-30'>
    <GallerySection/>
    </div>
    <Footer/>
    </>
  )
}

export default Gallery