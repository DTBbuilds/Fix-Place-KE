import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faWrench, 
  faScrewdriver, 
  faHouse, 
  faPhone, 
  faCalendarCheck, 
  faToolbox, 
  faSnowflake, 
  faTint, 
  faBlender, 
  faTablet, 
  faEnvelope, 
  faMapMarkerAlt,
  faArrowRight,
  faShoppingCart,
  faBars,
  faTimes,
  faBatteryFull,
  faPlug,
  faCamera,
  faCog,
  faCheck,
  faMobileAlt,
  faShieldAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so we can use them anywhere
library.add(
  faWrench,
  faScrewdriver,
  faHouse,
  faPhone,
  faCalendarCheck,
  faToolbox,
  faSnowflake,
  faTint,
  faBlender,
  faTablet,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
  faShoppingCart,
  faBars,
  faTimes,
  faBatteryFull,
  faPlug,
  faCamera,
  faCog,
  faCheck,
  faMobileAlt,
  faShieldAlt,
  faClock,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
)

export default function IconProvider() {
  // This component doesn't render anything, it's just for setting up FontAwesome
  return null
}
