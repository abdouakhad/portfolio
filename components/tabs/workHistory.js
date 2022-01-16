import React from 'react'
// Since it has the same format as the skills.
// That is why I choose it

import SingleEducation from '../singletabs/singleEducation'

const WorkHistory = () => {
  return (
    <div>
      <SingleEducation
        title='DAUST University'
        subTitle='A Personal Portfolio website to showcase all my details and projects at one place.'
        year='2019-2020'
        description='I am currently pursuing my B.Tech in Computer Science and Engineering from DAUST University. '
      />
      <SingleEducation
        title='DAUST University'
        subTitle='A Personal Portfolio website to showcase all my details and projects at one place.'
        year='2021-2022'
        description='I am currently pursuing my B.Tech in Computer Science and Engineering from DAUST University. '
      />
    </div>
  )
}

export default WorkHistory
