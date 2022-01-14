import React, { useState } from 'react'
import Card from '../components/cards/Card'
const ResumePage = () => {
  const [active, setActive] = useState('project')

  return (
    <div className='about-page bg-marron  min-h-[400px] text-white'>
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
      <div className='resume py-5 mt-16 lg:px-16 px-8 md:grid md:grid-cols-2 justify-center items-center gap-4 '>
        <div className='name grid grid-cols-12 text-lg'>
          <div className='col-span-1  bg-white text-black rounded text-center'>
            <p className='p-2'> &nbsp;</p>
            <p className='p-2'>a</p>
            <p className='p-2'>b</p>
            <p className='p-2'>c</p>
            <p className='p-2'>d</p>
            <p className='p-2'>e</p>
            <p className='p-2'>&nbsp; </p>
          </div>
          <div className='col-span-11 rounded bg-marron'>
            <p className='p-2'>&nbsp; </p>
            <p className=' bg-white text-marron rounded-r w-9/12 '>
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
        <div className='property self-start'>
          {active === 'project' && <Card section='project' />}
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
