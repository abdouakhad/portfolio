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
  faSpinner,
  faPaintBrush,
  faGripLines,
  faFileCode,
  faUserGraduate,
  faHistory,
  faIcons,
  faCircle,
  faBasketballBall,
  faServer,
  faCode,
  faEye,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  faGithub,
  faLinkedin,
  faSpinner,
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
  faCode,
  faEye,
  faArrowAltCircleUp
)
import Layout from '../layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
