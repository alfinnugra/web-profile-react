import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import MySertif from './component/MySertif'
import MyProject from './component/MyProject'
import ContactMe from './component/ContactMe'
import Hamburger from './component/Hamburger';



function App() {
  return (
    <>
     <Navbar />
     <HeroSection />
     <AboutMe />
     <MySertif />
     <MyProject />
     <ContactMe />
     <Hamburger />
    </>
  )
}

export default App
