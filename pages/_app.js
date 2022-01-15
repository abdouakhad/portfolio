import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faStar,
  faPaintBrush,
  faGripLines,
  faCoffee,
  faCode,
  faUserGraduate,
  faHistory,
  faIcons,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  faGithub,
  faLinkedin,
  faPaintBrush,
  faStar,
  faGripLines,
  faCoffee,
  faCode,
  faUserGraduate,
  faHistory,
  faIcons,
  faCircle
)
import Layout from '../layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
