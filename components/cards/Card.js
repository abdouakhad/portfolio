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
      <div className="p-2 h-full  ">
        <div className="rounded md:px-8 h-full  bg-white p-2 ">
          <div className="tracking-wider text-center lg:text-xl  text-lg ">
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
