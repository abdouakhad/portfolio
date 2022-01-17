import React from 'react'
import Fade from 'react-reveal/Fade'
import Form from '../components/cards/Forms'
import Card from '../components/cards/Card'
import Image from 'next/image'
const socials = ['github', 'linkedin', 'instagram', 'facebook']
const Contact = () => {
  return (
    <div className='mt-32 ' id='contact'>
      <section className='title'>
        <Fade
          cascade={true}
          direction='bottom'
          duration={2000}
          triggerOnce={false}
        >
          <h1 className='text-center text-4xl'>Contact Me</h1>
          <p className='text-center text-2xl text-vert mb-6'>Get In Touch</p>
        </Fade>

        <p className='md:w-2/12 w-4/12 h-2  bg-vert m-auto '></p>
        <p className='md:w-2/12 w-4/12 h-2  bg-vert m-auto '></p>
        <p className='md:w-3/12 w-5/12 m-auto h-2 bg-marron flex relative '></p>
        <p className='md:w-3/12 w-5/12 m-auto h-2 bg-marron flex relative  '></p>
      </section>
      <div className='mt-16 py-10 bg-marron grid md:grid-cols-2 grid-cols-1 gap-4  lg:px-8 px-4'>
        <Form />
        <Card />
      </div>
    </div>
  )
}

export default Contact
