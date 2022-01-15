import React, { useState } from 'react'
import Card, { Project } from '../components/cards/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
const ResumePage = () => {
  const [active, setActive] = useState('project')

  return (
    <div className='about-page bg-marron pb-10 text-white'>
      <div className='title'>
        <h1 className='text-center text-4xl'>Resume</h1>
        <p className='text-center text-2xl text-vert mb-6'>
          My Formal Bio Details
        </p>
        <p className='w-3/12 m-auto h-2 bg-white flex relative rounded'></p>
        <p className='w-2/12 h-2  bg-vert m-auto rounded animate-bounce'></p>
        <p className='w-2/12 h-2  bg-vert m-auto rounded animate-bounce'></p>
        <p className='w-3/12 m-auto h-2 bg-white flex relative rounded '></p>
      </div>
      <div className='resume py-5 mt-16 lg:px-16 md:px-8 px-4 md:grid  md:grid-cols-4 grid-cols-1 justify-center items-center gap-4 '>
        <div className=' lg:h-[400px] md:col-span-2 name grid grid-cols-12 text-lg md:justify-self-end  '>
          <div className='col-span-1  bg-white text-black rounded text-center'>
            <p className='p-2 text-marron'> &nbsp;</p>
            <p className='p-2 text-marron'>
              <FontAwesomeIcon icon={['fab', 'r-project']} />
            </p>
            <p className='p-2 text-marron'>
              {' '}
              <FontAwesomeIcon icon='code' />
            </p>
            <p className='p-2 text-marron'>
              {' '}
              <FontAwesomeIcon icon='user-graduate' />
            </p>
            <p className='p-2 text-marron'>
              <FontAwesomeIcon icon='history' />
            </p>
            <p className='p-2 text-marron'>
              <FontAwesomeIcon icon='icons' />
            </p>
            <p className='p-2 text-marron'>&nbsp; </p>
          </div>

          <div className='col-span-10 rounded bg-marron h-full'>
            <p className='p-2'>&nbsp; </p>
            <p className=' bg-white text-marron rounded-r md:w-9/12 w-11/12 '>
              <button
                onClick={() => setActive('project')}
                className={`${
                  active === 'project'
                    ? 'p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out'
                    : ' p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white'
                }`}
              >
                {' '}
                Projects
              </button>
            </p>
            <p className=' bg-white text-marron rounded-r w-9/12'>
              <button
                onClick={() => setActive('skills')}
                className={`${
                  active === 'skills'
                    ? 'p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out'
                    : ' p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white'
                }`}
              >
                {' '}
                Skills
              </button>
            </p>
            <p className=' bg-white text-marron rounded-r w-9/12'>
              <button
                onClick={() => setActive('education')}
                className={`${
                  active === 'education'
                    ? 'p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out'
                    : ' p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white'
                }`}
              >
                {' '}
                Education
              </button>
            </p>

            <p className=' bg-white text-marron rounded-r w-9/12'>
              <button
                onClick={() => setActive('workHistory')}
                className={`${
                  active === 'workHistory'
                    ? 'p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out'
                    : ' p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white'
                }`}
              >
                Work history
              </button>
            </p>
            <p className=' bg-white text-marron rounded-r w-9/12'>
              <button
                onClick={() => setActive('hobby')}
                className={`${
                  active === 'hobby'
                    ? 'p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out'
                    : ' p-2 block w-full text-left transition transform hover:translate-x-2 duration-500 ease-in-out bg-marron text-white'
                }`}
              >
                {' '}
                Hobby
              </button>
            </p>
            <p className='p-2 w-9/12'>
              <button> </button>
              &nbsp;{' '}
            </p>
          </div>
        </div>

        <div className='lg:h-[400px] md:col-span-2 property md:justify-self-start md:self-start md:mt-0 mt-10 '>
          {active === 'project' && <Project section='project' />}
          {active === 'skills' && <Card section='skills' />}
          {active === 'education' && <Card section='education' />}
          {active === 'workHistory' && <Card section='WorkHistory' />}
          {active === 'hobby' && <Card section='hobby' />}
        </div>
      </div>
    </div>
  )
}

export default ResumePage
