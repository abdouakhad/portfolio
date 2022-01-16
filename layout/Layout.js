import { Fragment } from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import ScrollToTop from './Scroll'

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {/* <main className='my-5 min-h-screen lg:px-12 md:px-10 sm:px-8 px-4 m-auto'> */}
      <main className='text-marron '>{props.children}</main>
      <Footer />
      <ScrollToTop />
    </Fragment>
  )
}

export default Layout
