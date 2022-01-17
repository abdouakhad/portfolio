import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  fab,
  faDeploydog,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faStar,
  faPaintBrush,
  faGripLines,
  faFileCode,
  faUserGraduate,
  faHistory,
  faIcons,
  faCircle,
  faBasketballBall,
  faServer,
  faEye,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  faGithub,
  faLinkedin,
  faPaintBrush,
  faStar,
  faGripLines,
  faFileCode,
  faUserGraduate,
  faHistory,
  faIcons,
  faCircle,
  faBasketballBall,
  faDeploydog,
  faServer,
  faEye,
  faArrowAltCircleUp
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
