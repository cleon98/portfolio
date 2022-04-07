import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'

const Container = () => {
  return (
    <div>
    <Home/> 
    <AboutMe/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Container