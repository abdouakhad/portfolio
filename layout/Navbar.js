import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useState, useEffect } from "react"
export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30)
    })
  }, [])

  const closeOnclick = () => {
    setActive(false)
  }

  return (
    <>
      <div className="fixed z-30 top-0 left-0 w-full text-marron">
        <nav
          className={`${
            scroll
              ? "flex items-center flex-wrap bg-marron text-white py-3 lg:px-20 md:px-12 sm:px-8 px-4 font-myFont"
              : "flex items-center flex-wrap bg-white py-3 font-myFont lg:px-20 md:px-12 sm:px-8 px-4"
          } `}
        >
          <Link href="/">
            <a
              onClick={closeOnclick}
              className="inline-flex items-center py-2 mr-4 "
            >
              <span className="text-xl  font-bold  tracking-wide">
                Mr T
                <span className="text-marron">
                  <FontAwesomeIcon
                    color="#04DDB2"
                    icon="star"
                    // pulse
                    className="shadow-xl"
                  />
                </span>
                P
              </span>
            </a>
          </Link>
          <button
            className="bg-white inline-flex p-3 hover:bg-white rounded lg:hidden text-marron ml-auto hover:text-marron outline-none"
            onClick={handleClick}
          >
            {!active ? (
              <FontAwesomeIcon
                color="#333333"
                icon="bars"
                size="lg"
                className="shadow-xl"
              />
            ) : (
              <span className="text-xl regular font-black">X</span>
            )}
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto  px-4 py-2 rounded  `}
          >
            <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col gap-10 lg:h-auto ">
              <Link href="/">
                <a
                  onClick={closeOnclick}
                  className="lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1  hover:translate-x-2 hover:shadow hover:shadow-marron px-1 hover:scale-110 ..."
                >
                  Home
                </a>
              </Link>
              <Link href="#about">
                <a
                  onClick={closeOnclick}
                  className="lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1  hover:translate-x-2 hover:shadow hover:shadow-marron px-1  hover:scale-110 ..."
                >
                  About Me
                </a>
              </Link>
              <Link href="#resume">
                <a
                  onClick={closeOnclick}
                  className="lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1  hover:translate-x-2 hover:shadow hover:shadow-marron px-1  hover:scale-110 ..."
                >
                  Resume
                </a>
              </Link>
              <Link href="#services">
                <a
                  onClick={closeOnclick}
                  className="lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1  hover:translate-x-2 hover:shadow hover:shadow-marron px-1  hover:scale-110 ..."
                >
                  Services
                </a>
              </Link>
              <Link href="#contact">
                <a
                  onClick={closeOnclick}
                  className="lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1  hover:translate-x-2 hover:shadow hover:shadow-marron px-1  hover:scale-110 ..."
                >
                  {" "}
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="md:h-0 h-8 text-black border"></div>
    </>
  )
}
