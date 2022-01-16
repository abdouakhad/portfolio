import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-awesome-reveal'

import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='about-page md:px-8 px-4 bg-marron md:mt-0 mt-32  min-h-[400px] text-white pt-16'>
      <div className='py-8'>
        <Fade cascade={true} direction='bottom' duration={1000}>
          <h1 className='text-center text-4xl'>About me</h1>
          <p className='text-center text-2xl'>
            <FontAwesomeIcon
              icon='grip-lines'
              color='#04DDB2'
              size='lg'
              className='shadow-xl'
            />{' '}
            <span className='text-vert'>Why choose me </span>
            <FontAwesomeIcon
              icon='grip-lines'
              color='#04DDB2'
              size='lg'
              className='shadow-xl'
            />
          </p>
        </Fade>
      </div>
      <div className=' md:grid md:grid-cols-2 justify-center items-center text-center tracking-widest leading-loose'>
        <Fade direction='left' duration={2000} triggerOnce={true}>
          <div className='not-italic'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit .
          </div>
        </Fade>

        <Fade direction='right' duration={3000} triggerOnce={true}>
          <div>
            <Image
              src='/design.svg'
              width='400px'
              height='400px'
              alt='design'
              className=''
              priority='true'
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default AboutPage
