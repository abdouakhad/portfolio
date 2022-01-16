import React from 'react'
import SingleSkills from '../singletabs/singleSkills'
const Skills = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4'>
        <div>
          <SingleSkills src='/tech/python.svg' skill='Python' value={89} />
          <SingleSkills src='/tech/django.svg' skill='Django' value={80} />
          <SingleSkills src='/tech/js.svg' skill='js' value={95} />
          <SingleSkills src='/tech/r-lang.svg' skill='R' value={54} />
        </div>
        <div>
          <SingleSkills src='/tech/react.svg' skill='React JS' value={90} />
          <SingleSkills src='/tech/next.svg' skill='Next JS' value={60} />
          <SingleSkills
            src='/tech/tailwindcss.svg'
            skill='Tailwind css'
            value={98}
          />
          <SingleSkills src='/tech/mongodb.svg' skill='Mongo DB' value={70} />
        </div>
      </div>
    </>
  )
}

export default Skills
