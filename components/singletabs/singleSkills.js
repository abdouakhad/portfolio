import React from 'react'
import Image from 'next/image'
const singleSkills = ({ skill, src, value }) => {
  return (
    <>
      <style jsx>{`
        .rose {
          width: ${value}%;
        }
      `}</style>
      <div className='w-full mt-8'>
        <h1 className=' text-xl font-black relative '>
          <span className=' align-text-bottom ali flex gap-2'>
            <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
              &nbsp;
            </span>{' '}
            {skill} <Image src={src} width='30px' height='30px' alt='python' />
          </span>
        </h1>
        <div className='mt-1 '>
          <div className='h-1 py-2 bg-white  rounded relative grid grid-cols-3 text-black'>
            <div className=' z-10'></div>
            <div className=' z-10'></div>
            <div className=' z-10'></div>

            <div
              id='rose'
              className=' h-1 rose py-2 bg-vert rounded-l absolute flex justify-end pr-5 items-center text-5xl rounded-r-xl animate-pulse'
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default singleSkills
