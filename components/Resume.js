import React, { useState } from "react"
import Project from "./tabs/Project"
import Skills from "./tabs/Skills"
import Education from "./tabs/Education"
import WorkHistory from "./tabs/WorkHistory"
import Hobby from "./tabs/Hobby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"

import Image from "next/image"
const ResumePage = () => {
  const [active, setActive] = useState("education")

  return (
    <>
      <article
        id="#resumes"
        className="  about-page bg-white py-10 text-marron  "
      >
        <section className="title bg-marron text-white py-4">
          <Fade
            cascade={true}
            direction="bottom"
            duration={100}
            triggerOnce={false}
          >
            <h1 className="text-center text-4xl italic">Resume</h1>
            <p className="text-center text-2xl italic text-vert mb-6">
              My Formal Bio Details
            </p>
          </Fade>
          <p className="w-3/12 m-auto h-2 bg-white flex relative rounded"></p>
          <p className="w-2/12 h-2  bg-vert m-auto rounded animate-bounce"></p>
          <p className="w-2/12 h-2  bg-vert m-auto rounded animate-bounce"></p>
          <p className="w-3/12 m-auto h-2 bg-white flex relative rounded "></p>
        </section>

        <div className="resume py-5 mt-8 md:grid  md:grid-cols-4 grid-cols-1 md:px-8 px-4 justify-center items-center gap-4 ">
          <Fade
            cascade={true}
            duration={100}
            direction="left"
            triggerOnce={true}
          >
            <div className="border-4 p-4  border-marron md:col-span-2 name grid grid-cols-12 text-lg  ">
              <div className=" sm:col-span-1 col-span-2 pr-2 bg-marron text-white rounded text-center">
                <p className="py-2  "> &nbsp;</p>
                <p className="py-2  ">
                  <FontAwesomeIcon icon={["fab", "r-project"]} />
                </p>
                <p className="py-2  ">
                  {" "}
                  <FontAwesomeIcon icon="code" />
                </p>
                <p className="py-2  ">
                  {" "}
                  <FontAwesomeIcon icon="user-graduate" />
                </p>
                <p className="py-2  ">
                  <FontAwesomeIcon icon="history" />
                </p>
                <p className="py-2  ">
                  <FontAwesomeIcon icon="icons" />
                </p>
                <p className="py-2  ">&nbsp; </p>
              </div>

              <div className="col-span-10 rounded  h-full">
                <p className="p-2">&nbsp; </p>
                <p className="  rounded-r md:w-9/12 w-11/12">
                  <button
                    onClick={() => setActive("project")}
                    className={`${
                      active === "project"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-white text-marron"
                    }`}
                  >
                    {" "}
                    Projects
                  </button>
                </p>
                <p className="  rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("skills")}
                    className={`${
                      active === "skills"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-white text-marron"
                    }`}
                  >
                    {" "}
                    Skills
                  </button>
                </p>
                <p className="  rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("education")}
                    className={`${
                      active === "education"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-white text-marron"
                    }`}
                  >
                    {" "}
                    Education
                  </button>
                </p>

                <p className="  rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("workHistory")}
                    className={`${
                      active === "workHistory"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-white text-marron"
                    }`}
                  >
                    Work history
                  </button>
                </p>
                <p className="  rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("hobby")}
                    className={`${
                      active === "hobby"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-white text-marron"
                    }`}
                  >
                    {" "}
                    Hobby
                  </button>
                </p>
                <p className="p-2 w-9/12">
                  <button> </button>
                  &nbsp;{" "}
                </p>
              </div>
            </div>
          </Fade>

          <div className="w-full h-full p-4 border-marron border-4 rounded scrollbar   overflow-auto md:col-span-2 property md:justify-self-start md:self-start md:mt-0 mt-10 ">
            {active === "project" && <Project />}
            {active === "skills" && <Skills />}
            {active === "education" && <Education />}
            {active === "workHistory" && <WorkHistory />}
            {active === "hobby" && <Hobby section="hobby" />}
          </div>
        </div>
      </article>
    </>
  )
}

export default ResumePage
