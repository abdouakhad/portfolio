import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Fade } from "react-awesome-reveal"
import SingleService from "./services/SingleService"
const Services = () => {
  return (
    <div id="services" className="services mt-5  md:px-8 px-6">
      <div className="py-8">
        <Fade cascade={true} direction="bottom" duration={1000}>
          <h1 className="text-center text-4xl">My services</h1>
          <h1 className="text-center text-2xl mt-4 text-vert">
            What I provide?
          </h1>
          <p className="text-center text-2xl flex justify-center items-center">
            <div className="w-4/12 mt-5 bg-marron h-5 text-center rounded-xl flex justify-center items-center">
              <div className="w-5/12 bg-vert rounded-xl h-full  "></div>
            </div>
          </p>
        </Fade>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 hover:gap-y-6 gap-4 ">
        <Fade cascade duration={2000} direction="left">
          <SingleService
            icon="paint-brush"
            title="UI/UX Design"
            description="I create user-friendly interfaces.
             My designs are simple and intuitive, and they are easy to use."
            className="mt-5"
          />
        </Fade>
        <Fade cascade duration={2000} direction="bottom">
          <SingleService
            icon="file-code"
            title="Web App"
            description="I code the FRONT-END and the BACK-END of your website. I use the latest technologies to create a fast and responsive website."
            className="mt-5"
          />
        </Fade>
        <Fade cascade duration={2000} direction="right">
          <SingleService
            icon="server"
            title="Deploy App"
            description="I will enable and configure all necessary requirements to help you host your app in the inernet."
            className="mt-5"
          />
        </Fade>
      </div>
    </div>
  )
}

export default Services
