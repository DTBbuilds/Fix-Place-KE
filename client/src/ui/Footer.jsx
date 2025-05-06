import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon="screwdriver" className="text-secondary" />
              Fix Place KE
            </h3>
            <p className="text-gray-300">Professional appliance repair services in Kenya. We fix fridges, washing machines, microwaves and more.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon="phone" fixedWidth />
                <a href="tel:+254712345678" className="hover:text-primary-light">+254 712 345 678</a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon="envelope" fixedWidth />
                <a href="mailto:info@fixplaceke.co.ke" className="hover:text-primary-light">info@fixplaceke.co.ke</a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon="map-marker-alt" fixedWidth />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="https://facebook.com" className="hover:text-primary-light">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary-light">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="https://instagram.com" className="hover:text-primary-light">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="https://wa.me/254712345678" className="hover:text-primary-light">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>© {new Date().getFullYear()} Fix Place KE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
