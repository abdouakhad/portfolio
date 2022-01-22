import SingleProject from '../singletabs/singleProject'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = () => {
  return (
    <>
      <SingleProject
        title='Personal Portfolio Website'
        subTitle='Next js & Tailwind CSS '
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
        title='Easy Money (Own by a company)'
        subTitle='React js & Express js'
        description='Easy Money is a brand for a company that is selling recycling materials. It is actually two web apps. One that organize products 
        bought or sold and does estimation for new up coming products, and another that is an E Commerce where they sell the actual products(in development).'
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
        description={`An app developed during my free time: It's a platefrom that students can use to check their grades without 
        having to go to the school specially during the pandemic of COVID-19. `}
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
        title='Yaay ak Domm '
        subTitle='Electron js, React js && MongoDB'
        description='Yaay ak Domm meaning [mother & child] in our local language is an app that we are working on in our startup project
        that can help women get consulted online by linking doctors and patients through a telemedecin.'
      />
    </>
  )
}

export default Project
