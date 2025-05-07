import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTools, 
  faMobileAlt, 
  faBolt, 
  faShieldAlt, 
  faThumbsUp, 
  faClock, 
  faPhoneAlt,
  faEnvelope,
  faComment,
  faArrowRight,
  faMapMarkerAlt,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white min-h-[100vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="animate-fade-in space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                  Expert Repairs,<br />
                  <span className="text-secondary">Peace of Mind</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-xl">
                  Professional appliance & mobile repair services in Nairobi and across Kenya. Fast, reliable, and affordable solutions for your home and business.                  
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="/booking" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-primary-light transition duration-300 transform hover:-translate-y-1">
                    <FontAwesomeIcon icon={faCalendarCheck} /> Book a Repair
                  </a>
                  <a href="#contact-options" className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-50 transition duration-300">
                    <FontAwesomeIcon icon={faPhoneAlt} /> Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <a href="tel:+254712345678" className="flex flex-col items-center bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition duration-300 group">
                    <div className="bg-primary text-white p-3 rounded-full mb-2 group-hover:scale-110 transition duration-300">
                      <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                    </div>
                    <span className="font-medium text-gray-700">Call Us</span>
                    <span className="text-sm text-gray-500">+254 712 345 678</span>
                  </a>
                  <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-green-50 rounded-lg p-4 hover:bg-green-100 transition duration-300 group">
                    <div className="bg-green-500 text-white p-3 rounded-full mb-2 group-hover:scale-110 transition duration-300">
                      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    </div>
                    <span className="font-medium text-gray-700">WhatsApp</span>
                    <span className="text-sm text-gray-500">Text Us Anytime</span>
                  </a>
                  <a href="mailto:info@fixplaceke.com" className="flex flex-col items-center bg-red-50 rounded-lg p-4 hover:bg-red-100 transition duration-300 group">
                    <div className="bg-red-500 text-white p-3 rounded-full mb-2 group-hover:scale-110 transition duration-300">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </div>
                    <span className="font-medium text-gray-700">Email</span>
                    <span className="text-xs text-gray-500">info@fixplaceke.com</span>
                  </a>
                  <a href="#chat-bot" className="flex flex-col items-center bg-purple-50 rounded-lg p-4 hover:bg-purple-100 transition duration-300 group" id="contact-options">
                    <div className="bg-purple-500 text-white p-3 rounded-full mb-2 group-hover:scale-110 transition duration-300">
                      <FontAwesomeIcon icon={faComment} size="lg" />
                    </div>
                    <span className="font-medium text-gray-700">Live Chat</span>
                    <span className="text-sm text-gray-500">Start Chatting</span>
                  </a>
                </div>
                <div className="text-center pt-2">
                  <a href="https://maps.google.com/?q=Nairobi,Kenya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-dark">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                    <span>Nairobi, Kenya</span>
                    <FontAwesomeIcon icon={faArrowRight} size="xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition group">
          <FontAwesomeIcon icon={faTools} className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold mb-2">Appliance Repair</h3>
          <p className="text-gray-600 text-sm">Fridges, washing machines, ovens, microwaves, and more. Quick diagnostics and repairs.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition group">
          <FontAwesomeIcon icon={faMobileAlt} className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold mb-2">Mobile Repair</h3>
          <p className="text-gray-600 text-sm">Expert phone and tablet repairs, screen replacements, battery issues, and software support.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition group">
          <FontAwesomeIcon icon={faBolt} className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-bold mb-2">Fast Response</h3>
          <p className="text-gray-600 text-sm">Same-day service available in Nairobi. Emergency repairs for urgent needs.</p>
        </div>
      </section>

      {/* Quick Booking Widget */}
      <section className="container mx-auto px-4 py-8 flex flex-col items-center animate-fade-in-delay">
        <div className="bg-primary text-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-lg w-full">
          <h4 className="text-2xl font-semibold mb-2">Need Help Fast?</h4>
          <p className="mb-4 text-center">Request a callback and our technician will contact you shortly.</p>
          <form className="flex flex-col w-full gap-3">
            <input type="text" placeholder="Your Name" className="rounded px-4 py-2 text-gray-800" />
            <input type="tel" placeholder="Phone Number" className="rounded px-4 py-2 text-gray-800" />
            <button type="submit" className="bg-secondary text-white px-6 py-2 rounded mt-2 hover:bg-secondary-dark transition">Request Callback</button>
          </form>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faThumbsUp} className="text-3xl text-primary mb-2" />
          <span className="font-bold">1000+ Happy Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-primary mb-2" />
          <span className="font-bold">Trusted & Certified Technicians</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faClock} className="text-3xl text-primary mb-2" />
          <span className="font-bold">24/7 Customer Support</span>
        </div>
      </section>
    </div>
  );
}
