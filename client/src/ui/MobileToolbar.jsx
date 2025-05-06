import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MobileToolbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-20">
      <div className="flex justify-around items-center py-2">
        <a 
          href="tel:+254712345678" 
          className="flex flex-col items-center px-3 py-1 text-primary"
        >
          <FontAwesomeIcon icon="phone" size="lg" />
          <span className="text-xs mt-1">Call Us</span>
        </a>
        
        <a 
          href="https://wa.me/254712345678" 
          className="flex flex-col items-center px-3 py-1 text-green-600"
        >
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="lg" />
          <span className="text-xs mt-1">WhatsApp</span>
        </a>
        
        <a 
          href="/booking" 
          className="flex flex-col items-center px-3 py-1 text-secondary"
        >
          <FontAwesomeIcon icon="calendar-check" size="lg" />
          <span className="text-xs mt-1">Book Now</span>
        </a>
        
        <a 
          href="/mobile-repair" 
          className="flex flex-col items-center px-3 py-1 text-gray-700"
        >
          <FontAwesomeIcon icon="mobile-alt" size="lg" />
          <span className="text-xs mt-1">Phone Repair</span>
        </a>
      </div>
    </div>
  )
}
