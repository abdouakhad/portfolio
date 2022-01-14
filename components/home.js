import React from 'react'
import Image from 'next/image'
import Typical from 'react-typical'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
const HomePage = () => {
  return (
    <>
      <div className='relative md:mt-20'>
        <div className=' h-[490px] absolute  md:text-left text-center  m-auto  z-10 grid md:grid-cols-2 grid-cols-1 justify-center items-center w-full lg:px-8 md:px-1 px-0 '>
          <p className=' md:my-0 my-48 lg:px-12 md:px-10 sm:px-8 px-4 self-start mt-4 lg:text-3xl text-2xl lg:leading-loose md:leading-loose leading-loose font-extralight'>
            Hello, my name is <br></br>
            <span className='uppercase font-black text-3xl'>
              Abdoul Akhad Top
            </span>{' '}
            <br />
            and I am a {''}
            <span className='text-vert font-black shadow-xl bg-marron rounded p-2'>
              <Typical
                className='inline'
                steps={[
                  ' web designer ✍︎',
                  2000,
                  ' freelancer 👨🏾‍💻',
                  2000,
                  ' web developer 💻',
                  2000,
                ]}
                loop={Infinity}
                wrapper='b'
              />
            </span>
          </p>
          <div className=' self-center overflow-hidden pb-0 text-center md:bg-transparent bg-white w-full  md:mt-0  '>
            {' '}
            <div className=''>
              <Image
                src='/nobg.svg'
                priority
                width='400'
                height='400'
                objectFit='contain'
                alt='image'
                objectPosition='bottom left'
                className='transition transform hover:scale-95 w-full scale-90 ease-in-out duration-1000 rounded-full border-2 ring-2 ring-offset-8 ring-marron ring-offset-marron  shadow-lg '
              />
            </div>
          </div>
        </div>
        <div className='home md:mb-0 mb-[200px] '>
          <div className=' min-h-[480px]'>
            <Image
              src='/background.png'
              layout='fill'
              objectFit='cover'
              alt='image'
              objectPosition='bottom left'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
