import React from "react"
import { Fade } from "react-awesome-reveal"
import SingleService from "./services/SingleService"
const Services = () => {
  return (
    <div id="services" className="services mt-5  ">
      <div className="py-4 bg-marron text-white">
        <Fade cascade={true} direction="bottom" duration={100}>
          <h1 className="text-center text-4xl italic">My services</h1>
          <h1 className="text-center text-2xl mt-4 text-vert italic">
            What I provide?
          </h1>
          <p className="text-center text-2xl flex justify-center items-center">
            <div className="w-4/12 mt-5 bg-white h-5 text-center rounded-xl flex justify-center items-center">
              <div className="w-5/12 bg-vert rounded-xl h-full  "></div>
            </div>
          </p>
        </Fade>
      </div>
      <div className="md:px-8 px-6 grid md:grid-cols-3 grid-cols-1 hover:gap-y-6 gap-4 ">
        <div>
          <Fade cascade duration={100} direction="left">
            <SingleService
              icon="paint-brush"
              title="UI/UX Design"
              description="I create user-friendly interfaces.
             My designs are simple and intuitive, and they are easy to use."
              className="mt-5"
            />
          </Fade>
        </div>
        <div>
          <Fade cascade duration={100} direction="bottom">
            <SingleService
              icon="file-code"
              title="Web App"
              description="I code the FRONT-END and the BACK-END of your website. I use the latest technologies to create a fast and responsive website."
              className="mt-5"
            />
          </Fade>
        </div>
        <div>
          <Fade cascade duration={100} direction="right">
            <SingleService
              icon="mobile"
              title="Mobile App"
              description="With the React Native library, I  design a good UI/UX and build cross-platform apps that works with ios and android."
              className="mt-5"
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Services
