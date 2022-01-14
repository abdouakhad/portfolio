import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutPage = () => {
  return (
    <div className='about-page bg-marron  min-h-[400px] mb-10 text-white'>
      <div className='py-12'>
        <h1 className='text-center text-4xl'>About me</h1>
        <p className='text-center text-2xl'>
          <FontAwesomeIcon
            icon='grip-lines'
            color='#04DDB2'
            size='lg'
            className='shadow-xl'
          />{' '}
          Why choose me{' '}
          <FontAwesomeIcon
            icon='grip-lines'
            color='#04DDB2'
            size='lg'
            className='shadow-xl'
          />
        </p>
      </div>
    </div>
  )
}

export default AboutPage
