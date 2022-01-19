import React from 'react'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
const Forms = () => {
  const [done, setDone] = useState(false)
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_3g1g2x5',
        'template_mrzd91h',
        formRef.current,
        'user_2GPcRMRNXINnnlOtPXuXi'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className=''>
        <div className='p-2 rounded bg-gradient-to-r from-vert to-marron '>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='bg-white rounded py-6 text-marron   px-4 '
          >
            <div className='mb-4'>
              <input
                className='bg-marron text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-vertClair'
                id='name'
                type='text'
                name='name'
                placeholder='name'
                autoComplete='name'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                className='bg-marron text-white shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-vertClair'
                id='email'
                // name='email'
                type='email'
                name='email'
                placeholder='email'
              />
              <p className='text-marron opacity-80 text-xs italic'>
                Please enter a valid email.
              </p>
            </div>
            <div className='mb-6'>
              <textarea
                id='message'
                name='message'
                type='text'
                placeholder='message'
                className='w-full h-16 px-3 py-2 text-base bg-marron text-white focus:outline-none focus:border-vertClair border rounded focus:shadow-outline'
              ></textarea>
            </div>
            <div className='flex items-center justify-between '>
              <button
                className='hover:cursor-pointer w-32 bg-gradient-to-r from-vert to-marron text-white transition ease-out duration-1000 transform hover:scale-110 hover:bg-gradient-to-r hover:from-marron hover:to-vert outline outline-offset-5 outline-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
                name='send'
                id='send'
              >
                send
              </button>
              {done && (
                <p className='bg-vert lg:text-2xl md:text-xl sm:text-2xl text-xl lg:px-4 px-2 py-2 rounded'>
                  Thanks for your message!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Forms
