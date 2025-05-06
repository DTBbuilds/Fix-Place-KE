import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinkStyle = ({ isActive }) => {
    return isActive 
      ? 'relative font-medium text-primary border-b-2 border-primary py-5 flex items-center gap-1.5 transition-colors duration-300' 
      : 'relative font-medium text-gray-600 hover:text-primary py-5 flex items-center gap-1.5 transition-colors duration-300'
  }
  
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary py-4 flex items-center gap-2">
          <FontAwesomeIcon icon="screwdriver" className="text-secondary" />
          Fix Place KE
        </h1>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? "times" : "bars"} size="lg" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink end to="/" className={navLinkStyle}>
            <FontAwesomeIcon icon="house" /> Home
          </NavLink>
          <NavLink to="/services" className={navLinkStyle}>
            <FontAwesomeIcon icon="wrench" /> Services
          </NavLink>
          <NavLink to="/tools" className={navLinkStyle}>
            <FontAwesomeIcon icon="toolbox" /> Tools
          </NavLink>
          <NavLink to="/mobile-repair" className={navLinkStyle}>
            <FontAwesomeIcon icon="mobile-alt" /> Mobile Repair
          </NavLink>
          <NavLink to="/booking" className={navLinkStyle}>
            <FontAwesomeIcon icon="calendar-check" /> Booking
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            <FontAwesomeIcon icon="phone" /> Contact
          </NavLink>
          <a href="/booking" className="ml-4 bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-1.5">
            <FontAwesomeIcon icon="calendar-check" /> Book Now
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}>
        <nav className="flex flex-col">
          <NavLink end to="/" 
            className={({isActive}) => 
              `px-4 py-3 border-b border-gray-100 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="house" fixedWidth /> Home
          </NavLink>
          <NavLink to="/services" 
            className={({isActive}) => 
              `px-4 py-3 border-b border-gray-100 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="wrench" fixedWidth /> Services
          </NavLink>
          <NavLink to="/tools" 
            className={({isActive}) => 
              `px-4 py-3 border-b border-gray-100 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="toolbox" fixedWidth /> Tools
          </NavLink>
          <NavLink to="/mobile-repair" 
            className={({isActive}) => 
              `px-4 py-3 border-b border-gray-100 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="mobile-alt" fixedWidth /> Mobile Repair
          </NavLink>
          <NavLink to="/booking" 
            className={({isActive}) => 
              `px-4 py-3 border-b border-gray-100 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="calendar-check" fixedWidth /> Booking
          </NavLink>
          <NavLink to="/contact" 
            className={({isActive}) => 
              `px-4 py-3 ${isActive ? 'bg-primary bg-opacity-5 text-primary' : 'text-gray-600'} flex items-center gap-2`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon="phone" fixedWidth /> Contact
          </NavLink>
          <div className="p-4">
            <a href="/booking" className="block w-full bg-secondary text-white text-center px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1.5">
              <FontAwesomeIcon icon="calendar-check" /> Book Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
