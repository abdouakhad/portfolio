import SingleProject from '../singletabs/singleProject'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = () => {
  return (
    <>
      <SingleProject
        title='Personal Portfolio Website'
        subTitle='Next Js & Tailwind CSS '
        description='A Personal Portfolio website to showcase all my details and projects at one place.
        And also provide information such as what I do, what services I  offer, and how to contact me. 
        '
      >
        <p className='bg-vert border rounded-md px-2 flex justify-between gap-2'>
          <Link href='/'>
            <a className='block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out duration-300'>
              <FontAwesomeIcon icon='eye' />
            </a>
          </Link>
          <Link href='https://github.com/abdouakhad/portfolio'>
            <a className='block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out dura duration-300'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </Link>
        </p>
      </SingleProject>

      <SingleProject
        title='Ecommerce Website'
        subTitle='Next JS'
        description='A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.'
      >
        <p className='bg-vert border rounded-md px-2 flex justify-between gap-2'>
          <Link href='https://github.com/abdouakhad/portfolio'>
            <a className='block'>
              <FontAwesomeIcon icon='eye' />
            </a>
          </Link>
        </p>
      </SingleProject>
      <SingleProject
        title='Baccalaureate App'
        subTitle='HTML, CSS && Django'
        description='A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.'
      >
        <p className='bg-vert border rounded-md px-2 flex justify-between gap-2'>
          <Link href='https://github.com/abdouakhad/baccalaureate'>
            <a className='block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out dura duration-300'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </Link>
        </p>
      </SingleProject>

      <SingleProject
        title='Music Player App'
        description='A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.'
      />
    </>
  )
}

export default Project
