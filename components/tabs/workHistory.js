import React from 'react'
// Since it has the same format as the skills.
// That is why I choose it

import SingleEducation from '../singletabs/singleEducation'

const WorkHistory = () => {
  return (
    <div>
      <SingleEducation
        title='DAUST University'
        subTitle='Tutoring'
        year='2019'
        description='I received an offer to teach students right after my freshman year. 
        I helped students with their lessons and homework.'
      />
      <SingleEducation
        title='Work For A Doctor'
        subTitle=''
        year='2020'
        description='Interested in machine learning and artificial intelligence at an early age, I started learning statistics, which allowed me to work for a doctor during my summer vacation 2020.'
      />
      <SingleEducation
        title='Easy Money'
        subTitle='Web App'
        year='2020-Now'
        description='I have been working for a company called Easy Money in my spare time since 2020 where we develop and maintain a product management site
        and an e-commerce website.'
      />
    </div>
  )
}

export default WorkHistory
