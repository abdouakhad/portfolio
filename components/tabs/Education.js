import React from "react"
import SingleEducation from "../singletabs/SingleEducation"

const Education = () => {
  return (
    <div>
      <SingleEducation
        title="SOTRAC Primary School"
        description="SOTRAC is the school wher everything started. That is where I have my first diplome[CFEE]"
        year="2006-2011"
      />
      <SingleEducation
        title="LEID High School"
        description="My [CFEE] diploma got me go to LEID high school where I also obtained my second and third diplome[BFEM & BAC]"
        year="2011-2018"
      />
      <SingleEducation
        title="DAUST University"
        description="I am currently studying at DAUST university which is the school where I develop the passion of coding
        And eventually become a Full Stack Developer."
        year="2018-Now"
      />
    </div>
  )
}

export default Education
