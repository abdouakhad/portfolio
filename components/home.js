import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import classes from './home.module.css'
import { init } from 'ityped'

const HomePage = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [' web designer', ' web developer', ' Freelancer'],
    })
  }, [])
  return (
    <>
      <div className='relative'>
        <div className='h-[490px] absolute  md:text-left text-center  m-auto  z-10 grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full md:px-8'>
          <p className='lg:px-12 md:px-10 sm:px-8 px-4 self-start mt-4 text-3xl leading-loose font-extralight'>
            Hello my name is <br></br>
            <span className='uppercase font-black'>Abdoul Akhad Top</span>{' '}
            <br />
            and I am a
            <span
              ref={textRef}
              className={`text-vert font-black${classes.itypedCursor}`}
            ></span>
          </p>
          <div className=' self-center pb-0 text-center md:bg-transparent bg-white w-full  md:mt-0 my-5  '>
            {' '}
            <Image
              src='/nobg.svg'
              priority
              width='400'
              height='400'
              objectFit='contain'
              alt='image'
              objectPosition='bottom left'
              className=' rounded-full ring-2 ring-offset-8 ring-offset-marron  ring-marron  shadow-lg '
            />
          </div>
        </div>
        <div className='home md:mb-0 mb-[200px] '>
          <div className=' min-h-[480px]'>
            <Image
              src='/background.png'
              layout='fill'
              objectFit='cover'
              alt='image'
              objectPosition='bottom left'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
