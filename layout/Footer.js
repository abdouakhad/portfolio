import React from 'react'

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return (
    <div className='bg-white text-xl font-semibold flex leading-loose tracking-wider flex-col items-center justify-center text-marron py-10 mt-10'>
      <p> © Akhad {year}. All rights reserved. </p>
      <p>Built with ❤️ in Somone, SN</p>
    </div>
  )
}

export default Footer
