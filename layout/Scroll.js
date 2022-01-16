import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div
          className='fixed bottom-10 right-12 cursor-pointer'
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon='arrow-alt-circle-up'
            size='3x'
            color='#04DDB2'
            className='animate-bounce rounded-full ring-2 ring-offset-4 ring-offset-white ring-marron '
          />
        </div>
      )}
    </div>
  )
}
