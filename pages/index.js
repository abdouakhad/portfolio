import React from "react"
import HomePage from "../components/Home"
import AboutPage from "../components/About"
import ResumePage from "../components/Resume"
import Services from "../components/Services"
import Contact from "../components/Contact"
const Home = () => {
  return (
    <div className="">
      <HomePage />
      <AboutPage />
      <ResumePage />
      <Services />
      <Contact />
    </div>
  )
}

export default Home
