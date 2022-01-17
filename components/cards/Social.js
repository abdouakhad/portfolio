import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'

import Image from 'next/image'
import Link from 'next/link'
const Social = () => {
  return (
    <>
      <div className='my-4 bg-marron py-2 flex justify-around xs:w-9/12 w-11/12 rounded-lg'>
        <Link href='/'>
          <a className='transition transform ease-in-out duration-500 hover:scale-110 '>
            <FontAwesomeIcon icon={['fab', 'github']} color='white' size='3x' />
          </a>
        </Link>

        <Link href='/'>
          <a className='transition transform ease-in-out duration-500 hover:scale-110'>
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              color='white'
              size='3x'
            />
          </a>
        </Link>

        <Link href='/'>
          <a className='transition transform ease-in-out duration-500 hover:scale-110'>
            <FontAwesomeIcon
              icon={['fab', 'facebook']}
              color='white'
              size='3x'
            />
          </a>
        </Link>

        <Link href='/'>
          <a className='transition transform ease-in-out duration-500 hover:scale-110'>
            <FontAwesomeIcon
              icon={['fab', 'instagram']}
              color='white'
              size='3x'
            />
          </a>
        </Link>
      </div>

      <div className='relative md:w-full rounded'>
        <Image
          className='rounded  bg-marron'
          src='/email2.png'
          width='620px'
          height='200px'
          priority
          objectFit='cover'
          alt='email'
          objectPosition='center center'
        />
      </div>
    </>
  )
}

export default Social
