import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Tools from './Tools'
import Booking from './Booking'
import Contact from './Contact'
import MobileRepair from './MobileRepair'

import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import MobileToolbar from '../ui/MobileToolbar'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 md:pb-0 pb-16"> {/* Add bottom padding on mobile to account for toolbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/mobile-repair" element={<MobileRepair />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <MobileToolbar />
      <Footer />
    </div>
  )
}
