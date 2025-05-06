import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faMobileAlt, faBolt, faShieldAlt, faThumbsUp, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white min-h-[100vh]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 text-primary drop-shadow">Fix Place KE</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-700">Professional appliance & mobile repair services in Nairobi and Kenya. Fast, reliable, and affordable solutions for your home and business.</p>
        <a href="/booking" className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-light transition">Book a Repair</a>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:+254712345678" className="flex items-center gap-2 text-secondary hover:underline">
            <FontAwesomeIcon icon={faPhoneAlt} /> Call Us
          </a>
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:underline">
            <FontAwesomeIcon icon={faMobileAlt} /> WhatsApp
          </a>
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
