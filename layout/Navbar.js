import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className=' flex items-center flex-wrap bg-white py-3 lg:px-12 md:px-10 sm:px-8 px-4 font-myFont '>
        <Link href='/'>
          <a className='inline-flex items-center py-2 mr-4 '>
            <span className='text-xl text-marron font-bold  tracking-wide'>
              Mr T
              <span className='text-marron'>
                <FontAwesomeIcon
                  color='#04DDB2'
                  icon='star'
                  spin
                  className='shadow-xl'
                />
              </span>
              P
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-marron rounded lg:hidden text-marron ml-auto hover:text-marron outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col gap-10 lg:h-auto '>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                About Us
              </a>
            </Link>
            <Link href='/resume'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                Resume
              </a>
            </Link>
            <Link href='/services'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                Services
              </a>
            </Link>
            <Link href='/skills'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                Skills
              </a>
            </Link>
            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light text-marron  hover:text-marron transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                {' '}
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
