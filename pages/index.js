import React from 'react'
import HomePage from '../components/home'
import AboutPage from '../components/about'
import ResumePage from '../components/resume'
import Services from '../components/services'
const Home = () => {
  return (
    <div className=''>
      <HomePage />
      <AboutPage />
      <ResumePage />
      <Services />
    </div>
  )
}

export default Home
