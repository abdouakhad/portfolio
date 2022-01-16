import React from 'react'
import { Fade } from 'react-awesome-reveal'

import Image from 'next/image'
const singleSkills = ({ skill, src, width = '30px', height = '30px' }) => {
  return (
    <>
      <Fade cascade duration={2000} direction='right'>
        <div className='w-full mt-8'>
          <h1 className=' text-xl font-black relative '>
            <span className=' align-text-bottom  flex gap-2'>
              <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
                &nbsp;
              </span>{' '}
              {skill}{' '}
              <Image src={src} width={width} height={height} alt='python' />
            </span>
          </h1>
        </div>
      </Fade>
    </>
  )
}

export default singleSkills
