import React from 'react'
import HomePage from '../components/home'
import AboutPage from '../components/about'
import ResumePage from '../components/resume'
import Services from '../components/services'
import Contact from '../components/contact'
const Home = () => {
  return (
    <div className=''>
      <HomePage />
      <AboutPage />
      <ResumePage />
      <Services />
      <Contact />
    </div>
  )
}

export default Home
