import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-awesome-reveal"

import { useState } from "react"

const SingleService = ({ icon, title, description }) => {
  const [state, setState] = useState(false)
  const mouseEnter = () => {
    setState(true)
    console.log(state)
  }
  const mouseLeave = () => {
    setState(false)
    console.log(state)
  }
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className=" mt-10 bg-white h-full text-marron border-2 border-dashed border-marron rounded-lg py-2 sm:px-6 px-8 flex flex-col text-center justify-center items-center 
      transition transform  duration-700 hover:bg-vert hover:text-marron hover:shadow-2xl hover:shadow-vert 
      hover:translate-y-2"
    >
      <p className="inline ">
        <FontAwesomeIcon
          icon={icon}
          color={state === true ? "#333333 " : "#333333"}
          className={
            state === true
              ? "rounded-full mt-2 ring-4 ring-marron ring-offset-8 ring-offset-vert shadow-xl shadow-marron  animate-bounce "
              : "rounded-full mt-2 ring-4 ring-white ring-offset-8 ring-offset-marron  shadow-xl shadow-marron"
          }
          size="3x"
        />{" "}
      </p>
      <h1 className="not-italic text-2xl mt-8 mb-4 font-black">{title}</h1>
      <p className="not-italic tracking-widest">{description}</p>
    </div>
  )
}

export default SingleService
