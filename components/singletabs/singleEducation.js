import React from 'react'
import { Fade } from 'react-awesome-reveal'

const singleEducation = ({ title, subTitle, year, description }) => {
  return (
    <Fade cascade duration={2000} direction='right'>
      <div className='mr-2 z-20 shadow project leading-loose mt-4 bg-white text-marron rounded p-2 transition transform  hover:shadow-xl hover:cursor-crosshair ease-in-out duration-300'>
        <div className='flex justify-between'>
          <h1 className=' text-xl font-black relative '>
            <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
              &nbsp;
            </span>
            <span> {title}</span>
          </h1>
          <p className='bg-vert rounded-md px-2'>{year}</p>
        </div>
        <p className='pl-5 not-italic'>{subTitle} </p>
        <p className='not-italic pl-5 leading-relaxed tracking-widest text-xs font-extralight'>
          {description}
        </p>
      </div>
    </Fade>
  )
}

export default singleEducation
