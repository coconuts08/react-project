import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import ChildDetails from './ChildDetails'
import ImpactMessage from '../../partials/ImpactMessage'

const ChildDetailsHolder = () => {
  return (
    <>
    <Header/>
    <ChildDetails/>
    <ImpactMessage/>
    <Footer/>
    </>
  )
}

export default ChildDetailsHolder