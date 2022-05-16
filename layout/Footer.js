import React from "react"
import Fade from "react-reveal/Fade"

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return (
    <Fade
      className=""
      cascade={true}
      direction="bottom"
      duration={200}
      triggerOnce={true}
    >
      <div className="bg-white md:text-xl font-semibold text-base text-center flex leading-loose tracking-wider flex-col items-center justify-center text-marron py-5 mt-10">
        <p>
          {" "}
          © Akhad {year}. <br /> All rights reserved.{" "}
        </p>
        <p>Built with ❤️ in Somone, SN</p>
      </div>
    </Fade>
  )
}

export default Footer
