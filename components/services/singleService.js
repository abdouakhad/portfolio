import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-awesome-reveal'

import { useState } from 'react'

const SingleService = ({ icon, title, description }) => {
  const [state, setState] = useState(false)
  const mouseEnter = () => {
    setState(true)
    console.log(state)
  }
  const mouseLeave = () => {
    setState(false)
    console.log(state)
  }
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className=' mt-10 bg-marron h-full text-white rounded-lg py-2 sm:px-4 px-8 flex flex-col text-center justify-center items-center transition transform  duration-700 hover:bg-vert hover:text-marron hover:scale-105'
    >
      <p className='inline '>
        <FontAwesomeIcon
          icon={icon}
          color={state === true ? '#333333 ' : '#fff'}
          className={
            state === true
              ? 'rounded-full mt-2 ring-4 ring-marron ring-offset-8 ring-offset-vert'
              : 'rounded-full mt-2 ring-4 ring-white ring-offset-8 ring-offset-marron'
          }
          size='3x'
        />{' '}
      </p>
      <h1 className='not-italic text-2xl mt-8 mb-4 font-black'>{title}</h1>
      <p className='not-italic tracking-widest'>{description}</p>
    </div>
  )
}

export default SingleService
