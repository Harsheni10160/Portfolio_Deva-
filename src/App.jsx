import { useState } from 'react'
import LandPage from './Components/landingPage.jsx'
import TechStack from './Components/TechStack.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Navigation from './Components/Navigation.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <LandPage />
      <TechStack />
      <Projects />
      <Contact />

    </>
  )
}

export default App
