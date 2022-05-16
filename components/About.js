import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-awesome-reveal"

import Image from "next/image"

const AboutPage = () => {
  return (
    <div
      id="about"
      className="about-page lg:px-16 md:px-10 sm:px-8 px-4  bg-marron md:mt-0 mt-32  min-h-[400px] text-white pt-16"
    >
      <div className="py-8">
        <Fade cascade={true} direction="bottom" duration={1000}>
          <h1 className="text-center text-4xl">About me</h1>
          <p className="text-center text-2xl">
            <FontAwesomeIcon
              icon="grip-lines"
              color="#04DDB2"
              size="lg"
              className="shadow-xl"
            />{" "}
            <span className="text-vert">Why choose me </span>
            <FontAwesomeIcon
              icon="grip-lines"
              color="#04DDB2"
              size="lg"
              className="shadow-xl"
            />
          </p>
        </Fade>
      </div>

      <div className=" md:grid md:grid-cols-2 justify-center items-center text-center tracking-widest leading-loose">
        <Fade direction="left" duration={2000} triggerOnce={true}>
          <div className="not-italic  ">
            {` I'm a Full Stack Web
            developer passionated about building beautiful and clean apps. I'm a
            co-founder of masterweb which mostly does designs and content
            creation.  I am quietly confident, naturally curious and perpetually
            working on improving my chops on coding at once.`}
          </div>
        </Fade>

        <Fade direction="right" duration={3000} triggerOnce={true}>
          <div className="">
            <Image
              src="/design.svg"
              width="400px"
              height="400px"
              alt="design"
              className=""
              priority="true"
            />
          </div>
        </Fade>
        <h2 id="resume"></h2>
      </div>
    </div>
  )
}

export default AboutPage
