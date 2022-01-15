import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ section }) => {
  return (
    <div>
      <div>This is the {section} part</div>
    </div>
  )
}

const Project = () => {
  return (
    <>
      <div className='mr-2 z-20 shadow project leading-loose mt-4 bg-white text-marron rounded p-2 transition transform  hover:shadow-xl hover:cursor-crosshair ease-in-out duration-300'>
        <h1 className=' text-xl font-black relative '>
          <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
            &nbsp;
          </span>
          <span> Personal Portfolio Website</span>
        </h1>
        <p className='pl-5 not-italic'>
          Technology used:{' '}
          <span className='not-italic'>Next Js && Tailwind CSS</span>
        </p>
        <p className='not-italic pl-5 tracking-widest text-xs font-extralight'>
          A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.
        </p>
      </div>
      <div className='mr-2  shadow project leading-loose mt-4 bg-white text-marron rounded p-2 transition transform  hover:shadow-xl hover:cursor-crosshair ease-in-out duration-300'>
        <h1 className='text-xl font-black relative '>
          <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
            &nbsp;
          </span>
          <span> Personal Portfolio Website</span>
        </h1>
        <p className='pl-5 not-italic'>
          Technology used:{' '}
          <span className='not-italic'>Next Js && Tailwind CSS</span>
        </p>
        <p className='not-italic pl-5 tracking-widest text-xs font-extralight'>
          A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.
        </p>
      </div>
      <div className='mr-2 shadow project leading-loose mt-4 bg-white text-marron rounded p-2 transition transform  hover:shadow-xl ease-in-out duration-300 hover:cursor-crosshair'>
        <h1 className='text-xl font-black'>
          <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
            &nbsp;
          </span>
          <span> Ecommerce Website</span>
        </h1>
        <p className='pl-5 not-italic'>
          Technology used:{' '}
          <span className='not-italic'>Next Js && MongoDB</span>
        </p>
        <p className='not-italic pl-5 tracking-widest text-xs font-extralight'>
          A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.
        </p>
      </div>
      <div className='mr-2 shadow  project leading-loose mt-4 bg-white text-marron rounded p-2 transition transform  hover:shadow-xl ease-in-out duration-300 hover:cursor-crosshair'>
        <h1 className='text-xl font-black'>
          <span className='h-4 w-4 align-middle text- inline-block bg-gradient-to-t from-white to-marron  rounded-full'>
            &nbsp;
          </span>
          <span> Baccaluareate App</span>
        </h1>
        <p className='pl-5 not-italic'>
          Technology used:{' '}
          <span className='not-italic'>Vanilla Js && Python Django</span>
        </p>
        <p className='pl-5 tracking-widest text-xs font-extralight not-italic'>
          A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.
        </p>
      </div>
    </>
  )
}

export default Card
export { Project }
