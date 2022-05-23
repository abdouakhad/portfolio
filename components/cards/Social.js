import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Fade from "react-reveal/Fade"

import Image from "next/image"
import Link from "next/link"
const Social = () => {
  return (
    <>
      <div className="my-4  py-2 flex gap-4 text-center justify-center items-center  rounded-lg">
        <Link href="https://github.com/abdouakhad">
          <a className="transition transform ease-in-out duration-500 hover:scale-110 ">
            <FontAwesomeIcon icon={["fab", "github"]} color="black" size="2x" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/abdoul-akhad-top-a49957195/">
          <a className="transition transform ease-in-out duration-500 hover:scale-110">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              color="black"
              size="2x"
            />
          </a>
        </Link>

        <Link href="https://www.facebook.com/abdouahat.top">
          <a className="transition transform ease-in-out duration-500 hover:scale-110">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              color="black"
              size="2x"
            />
          </a>
        </Link>

        <Link href="https://www.instagram.com/mr_a_top/">
          <a className="transition transform ease-in-out duration-500 hover:scale-110">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              color="black"
              size="2x"
            />
          </a>
        </Link>
      </div>

      <div className="relative md:w-full rounded">
        <Image
          className="rounded  bg-marron"
          src="/email.jpeg"
          width="620px"
          height="200px"
          priority
          objectFit="cover"
          alt="email"
          objectPosition="center center"
        />
      </div>
    </>
  )
}

export default Social
