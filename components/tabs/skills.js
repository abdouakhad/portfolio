import React from 'react'
import SingleSkills from '../singletabs/singleSkills'
const Skills = () => {
  return (
    <>
      <div className='grid xs:grid-cols-2 grid-cols-1  lg:gap-4'>
        <div>
          <SingleSkills src='/tech/python.svg' skill='Python' />
          <SingleSkills src='/tech/django.svg' skill='Django' />
          <SingleSkills src='/tech/js.svg' skill='js' />
          <SingleSkills src='/tech/r-lang.svg' skill='R' />
          <SingleSkills src='/tech/postgresql.svg' skill='Postgresql' />
          <SingleSkills src='/tech/electron.svg' skill='Electron JS' />
        </div>
        <div>
          <SingleSkills src='/tech/react.svg' skill='React JS' />
          <SingleSkills src='/tech/next.svg' skill='Next JS' />
          <SingleSkills src='/tech/tailwindcss.svg' skill='Tailwind css' />
          <SingleSkills src='/tech/nodejs0.svg' skill='Node JS' />
          <SingleSkills src='/tech/mongodb.svg' skill='Mongo DB' />
          <SingleSkills
            src='/tech/express3.svg'
            skill='Express JS'
            className='bg-white text-white'
          />
        </div>
      </div>
    </>
  )
}

export default Skills
