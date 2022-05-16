import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"
import Social from "./Social"
const Card = ({ section }) => {
  return (
    <Fade
      className=""
      cascade={true}
      direction="right"
      duration={100}
      triggerOnce={true}
    >
      <div className="p-2 h-full rounded bg-gradient-to-r from-marron to-vert ">
        <div className="rounded md:px-8 border-2 h-full  bg-white p-2 ">
          <div className="tracking-wider lg:text-4xl md:text-2xl text-xl ">
            Get In Touch!
          </div>
          <Fade
            className=""
            cascade={true}
            direction="right"
            duration={100}
            triggerOnce={true}
          >
            <Social />
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

// Project component
export default Card
