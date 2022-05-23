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
  const [active, setActive] = useState("project")

  return (
    <>
      <article
        id="#resumes"
        className="  about-page bg-marron py-10 text-white  md:px-8 px-4"
      >
        <section className="title">
          <Fade
            cascade={true}
            direction="bottom"
            duration={100}
            triggerOnce={false}
          >
            <h1 className="text-center text-4xl">Resume</h1>
            <p className="text-center text-2xl text-vert mb-6">
              My Formal Bio Details
            </p>
          </Fade>
          <p className="w-3/12 m-auto h-2 bg-white flex relative rounded"></p>
          <p className="w-2/12 h-2  bg-vert m-auto rounded animate-bounce"></p>
          <p className="w-2/12 h-2  bg-vert m-auto rounded animate-bounce"></p>
          <p className="w-3/12 m-auto h-2 bg-white flex relative rounded "></p>
        </section>

        <div className="resume py-5 mt-16   md:grid  md:grid-cols-4 grid-cols-1 justify-center items-center gap-4 ">
          <Fade
            cascade={true}
            duration={100}
            direction="left"
            triggerOnce={true}
          >
            <div className=" lg:h-[400px] md:col-span-2 name grid grid-cols-12 text-lg  ">
              <div className="col-span-1 pr-2 bg-white text-marron rounded text-center">
                <p className="p-2 text-marron"> &nbsp;</p>
                <p className="p-2 ">
                  <FontAwesomeIcon icon={["fab", "r-project"]} />
                </p>
                <p className="p-2 ">
                  {" "}
                  <FontAwesomeIcon icon="code" />
                </p>
                <p className="p-2 ">
                  {" "}
                  <FontAwesomeIcon icon="user-graduate" />
                </p>
                <p className="p-2 ">
                  <FontAwesomeIcon icon="history" />
                </p>
                <p className="p-2 ">
                  <FontAwesomeIcon icon="icons" />
                </p>
                <p className="p-2 ">&nbsp; </p>
              </div>

              <div className="col-span-10 rounded bg-marron h-full">
                <p className="p-2">&nbsp; </p>
                <p className=" bg-white text-marron rounded-r md:w-9/12 w-11/12">
                  <button
                    onClick={() => setActive("project")}
                    className={`${
                      active === "project"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                    }`}
                  >
                    {" "}
                    Projects
                  </button>
                </p>
                <p className=" bg-white text-marron rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("skills")}
                    className={`${
                      active === "skills"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                    }`}
                  >
                    {" "}
                    Skills
                  </button>
                </p>
                <p className=" bg-white text-marron rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("education")}
                    className={`${
                      active === "education"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                    }`}
                  >
                    {" "}
                    Education
                  </button>
                </p>

                <p className=" bg-white text-marron rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("workHistory")}
                    className={`${
                      active === "workHistory"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
                    }`}
                  >
                    Work history
                  </button>
                </p>
                <p className=" bg-white text-marron rounded-r md:w-9/12 w-full">
                  <button
                    onClick={() => setActive("hobby")}
                    className={`${
                      active === "hobby"
                        ? "p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out"
                        : " p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white"
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

          <div className="w-full rounded scrollbar h-[400px]  overflow-auto md:col-span-2 property md:justify-self-start md:self-start md:mt-0 mt-10 ">
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
