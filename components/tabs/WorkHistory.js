import React from "react"
// Since it has the same format as the skills.
// That is why I choose it

import SingleEducation from "../singletabs/SingleEducation"

const WorkHistory = () => {
  return (
    <div>
      <SingleEducation
        title="DAUST University"
        subTitle="Tutoring"
        year="2019"
        description="I received an offer to teach students right after my freshman year. 
        I helped students with their lessons and homework."
      />
      <SingleEducation
        title="Easy Money"
        subTitle="Web App"
        year="2020-2022"
        description="I have been working for a company called Easy Money in my spare time since 2020 where we develop and maintain a product management site
          and an e-commerce website."
      />
      <SingleEducation
        title="Work As A Freelancer"
        subTitle=""
        year="Now"
        description="As of my free time, I use it to generate extra cash working for local companies, teachers and colleagues."
      />
    </div>
  )
}

export default WorkHistory
