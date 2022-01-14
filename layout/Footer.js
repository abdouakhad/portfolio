import React from 'react'

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return (
    <div className='bg-marron text-xl font-semibold flex items-center justify-center text-white py-10 mt-10'>
      <p>copyright © Akhad {year} </p>
    </div>
  )
}

export default Footer
