import React from "react"
import Fade from "react-reveal/Fade"
import Form from "./cards/Forms"
import Card from "./cards/Card"
const Contact = () => {
  return (
    <div className="mt-32 " id="contact">
      <section className="title bg-marron text-white py-8">
        <Fade
          cascade={true}
          direction="bottom"
          duration={200}
          triggerOnce={false}
        >
          <h1 className="text-center text-4xl italic">Contact Me</h1>
          <p className="text-center text-2xl italic text-vert mb-6">
            Get In Touch
          </p>
        </Fade>

        <p className="md:w-2/12 w-4/12 h-1  bg-vert m-auto "></p>
        <p className="md:w-2/12 w-4/12 h-1  bg-vert m-auto "></p>
        <p className="md:w-3/12 w-5/12 m-auto h-1 bg-white flex relative "></p>
        <p className="md:w-3/12 w-5/12 m-auto h-1 bg-white flex relative  "></p>
      </section>
      <div className="mt-16 py-10 grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-8 px-4">
        <div className=" col-span-1">
          <Form />
        </div>
        <div className="col-span-1">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Contact
