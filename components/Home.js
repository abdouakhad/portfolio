import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import Image from "next/image"
import Typical from "react-typical"
import { Fade } from "react-awesome-reveal"
import { gsap } from "gsap"
// gsap.to('.image', { y: 20, duration: 1 })
const HomePage = () => {
  const imageRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 0, y: 400, rotation: 180 },
      {
        duration: 2,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        ease: "elastic.out(1,0.9)",
      }
    )
    gsap.fromTo(
      textRef.current,
      { x: -400, opacity: 0 },
      { duration: 2, x: 0, opacity: 1 }
    )
  }, [])
  return (
    <div id="#home" className="relative container mx-auto">
      <div className="  md:text-left text-center  m-auto  z-10 grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full  ">
        <div className=" md:mb-0 lg:px-12 md:px-10 sm:px-8 px-4 self-start mt-4 text-2xl lg:leading-loose md:leading-loose leading-loose font-extralight">
          <div ref={textRef} className="opacity-0 mt-4 ">
            Hello world, my name is <br></br>
            <span className="uppercase font-black ">Abdoul Akhad Top</span>{" "}
            <br />
            and I am a <br></br>
            {""}
            <span className="text-vert font-black shadow-xl bg-marron rounded p-2">
              <Typical
                className="inline"
                steps={[
                  " web designer ✍︎",
                  2000,
                  " web developer 💻",
                  2000,
                  " freelancer 👨🏾‍💻",
                  2000,
                ]}
                loop={Infinity}
                wrapper="b"
              />{" "}
            </span>
            <div className="text-base mt-4 leading-loose tracking-wider">
              I am a Computer Science Student with 4 years of hands-on
              experience building, testing web apps and developing mobile
              applications for Android, iOS.
            </div>
          </div>
        </div>
        <section className=" image self-center overflow-hidden pb-0 text-center md:bg-transparent bg-white  w-full ">
          {" "}
          {/* <Fade duration={3000} direction='right' triggerOnce={true}>  */}
          <div className="opacity-0" ref={imageRef}>
            <Image
              src="/web1.svg"
              priority="true"
              width="400px"
              height="400px"
              objectFit="contain"
              alt="image"
              className="transition transform hover:scale-95 w-full scale-90 ease-in-out duration-1000  border-2 ring-2 ring-offset-8 ring-marron ring-offset-marron  shadow-lg "
            />
          </div>
          {/* </Fade> */}
        </section>
      </div>
    </div>
  )
}

export default HomePage
