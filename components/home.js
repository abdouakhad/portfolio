import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import Typical from 'react-typical'
import { Fade } from 'react-awesome-reveal'
import { gsap } from 'gsap'
// gsap.to('.image', { y: 20, duration: 1 })
const HomePage = () => {
  const imageRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 0, y: 400, rotation: 180, scale: 0 },
      {
        duration: 5,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        ease: 'elastic.out(1,0.9)',
      }
    )
    gsap.fromTo(
      textRef.current,
      { x: -400, opacity: 0 },
      { duration: 2, x: 0, opacity: 1 }
    )
  }, [])
  return (
    <div id='#home' className='relative md:mt-20'>
      <div className=' h-[490px] absolute  md:text-left text-center  m-auto  z-10 grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full lg:px-8 md:px-1 px-0 '>
        <div className=' md:mb-0 mb-32 lg:px-12 md:px-10 sm:px-8 px-4 self-start mt-4 lg:text-3xl text-2xl lg:leading-loose md:leading-loose leading-loose font-extralight'>
          <div ref={textRef} className='opacity-0'>
            Hello, my name is <br></br>
            <span className='uppercase font-black text-3xl'>
              Akhad Top
            </span>{' '}
            <br />
            and I am a {''}
            <span className='text-vert font-black shadow-xl bg-marron rounded p-2'>
              <Typical
                className='inline'
                steps={[
                  ' web designer ✍︎',
                  2000,
                  ' web developer 💻',
                  2000,
                  ' freelancer 👨🏾‍💻',
                  2000,
                ]}
                loop={Infinity}
                wrapper='b'
              />{' '}
            </span>
          </div>
        </div>
        <section className=' image self-center overflow-hidden pb-0 text-center md:bg-transparent bg-white  w-full '>
          {' '}
          {/* <Fade duration={3000} direction='right' triggerOnce={true}>  */}
          <div className='opacity-0' ref={imageRef}>
            <Image
              src='/nobg.svg'
              priority='true'
              width='400px'
              height='400px'
              objectFit='contain'
              alt='image'
              className='transition transform hover:scale-95 w-full scale-90 ease-in-out duration-1000 rounded-full border-2 ring-2 ring-offset-8 ring-marron ring-offset-marron  shadow-lg '
            />
          </div>
          {/* </Fade> */}
        </section>
      </div>
      <div className='home md:mb-0 mb-[200px]bg-fixed '>
        <div className=' min-h-[480px] relative '>
          <Image
            src='/background.png'
            layout='fill'
            priority
            objectFit='cover'
            alt='image'
            objectPosition='bottom left'
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
