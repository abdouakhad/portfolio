import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='about-page bg-marron  min-h-[400px] text-white'>
      <div className='py-8'>
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
      </div>
      <div className='px-8 md:grid md:grid-cols-2 justify-center items-center text-center tracking-widest leading-loose'>
        <div className='not-italic'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit .
        </div>
        <div>
          <Image src='/design.svg' width={400} height={400} alt='design' />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
