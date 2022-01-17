import SingleProject from '../singletabs/singleProject'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = () => {
  return (
    <>
      <SingleProject
        title='Personal Portfolio Website'
        description='A Personal Portfolio website to showcase all my details and projects at one place.  A Personal Portfolio website to showcase all my details and projects
          at one place.'
      >
        <p className='bg-vert border rounded-md px-2'>
          <Link href='https://github.com/abdouakhad'>
            <a className='block'>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </Link>
        </p>
      </SingleProject>

      <SingleProject
        title='Ecommerce Website'
        description='A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.'
      >
        <p className='bg-vert border rounded-md px-2'>
          <Link href='https://github.com/abdouakhad'>
            <a className='block'>
              <FontAwesomeIcon icon='eye' />
            </a>
          </Link>
        </p>
      </SingleProject>
      <SingleProject
        title='Baccalaureate App'
        description='A Personal Portfolio website to showcase all my details and projects
          at one place. A Personal Portfolio website to showcase all my details
          and projects at one place.'
      />

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
