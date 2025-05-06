import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mobileRepairServices = [
  {
    title: 'Screen Repair',
    description: 'Cracked or damaged screens replaced efficiently',
    price: 'From KES 2,000',
    icon: 'tablet'
  },
  {
    title: 'Battery Replacement',
    description: 'Extend your phone\'s life with a new battery',
    price: 'From KES 1,200',
    icon: 'battery-full'
  },
  {
    title: 'Charging Port Fix',
    description: 'Repair loose or damaged charging ports',
    price: 'From KES 800',
    icon: 'plug'
  },
  {
    title: 'Water Damage Recovery',
    description: 'Professional treatment for liquid-damaged phones',
    price: 'From KES 1,500',
    icon: 'tint'
  },
  {
    title: 'Camera Replacement',
    description: 'Fix blurry or non-functioning cameras',
    price: 'From KES 1,800',
    icon: 'camera'
  },
  {
    title: 'Software Issues',
    description: 'Resolve system crashes, malware, and slow performance',
    price: 'From KES 1,000',
    icon: 'cog'
  }
]

export default function MobileRepair() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Mobile Phone Repair Services</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our expert technicians can fix your smartphone quickly and affordably. 
          We service all major brands including Samsung, iPhone, Tecno, Infinix, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {mobileRepairServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <FontAwesomeIcon icon={service.icon} size="lg" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-primary font-semibold">{service.price}</p>
              </div>
            </div>
            <p className="text-gray-600">{service.description}</p>
            <a href="/booking" className="mt-4 inline-block text-secondary hover:text-primary transition-colors font-medium">
              Book Repair <FontAwesomeIcon icon="arrow-right" className="ml-1" />
            </a>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-8 my-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Expert Phone Diagnostics</h2>
            <p className="mb-4">
              Not sure what's wrong with your phone? Our technicians can perform a comprehensive 
              diagnostic check to identify any issues.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <FontAwesomeIcon icon="check" className="text-green-500 mr-2" /> Fast, accurate diagnosis
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon="check" className="text-green-500 mr-2" /> Transparent pricing with no hidden costs
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon="check" className="text-green-500 mr-2" /> Most repairs completed same-day
              </li>
            </ul>
            <a href="/booking" className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center">
              <FontAwesomeIcon icon="calendar-check" className="mr-2" /> Schedule Diagnostic
            </a>
          </div>
          <div className="md:w-1/3 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md inline-block">
              <div className="text-primary text-5xl mb-2">
                <FontAwesomeIcon icon="mobile-alt" />
              </div>
              <p className="font-bold">Diagnostic Check</p>
              <p className="text-primary font-bold">KES 500</p>
              <p className="text-sm text-gray-500">(Free with repair)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Why Choose Fix Place KE for Your Phone Repair?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-3xl mb-4">
              <FontAwesomeIcon icon="shield-alt" />
            </div>
            <h3 className="font-bold text-lg mb-2">Warranty Guaranteed</h3>
            <p className="text-gray-600">All our repairs come with a 30-day warranty for your peace of mind.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-3xl mb-4">
              <FontAwesomeIcon icon="tools" />
            </div>
            <h3 className="font-bold text-lg mb-2">Genuine Parts</h3>
            <p className="text-gray-600">We use only high-quality parts for reliable, long-lasting repairs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-secondary text-3xl mb-4">
              <FontAwesomeIcon icon="clock" />
            </div>
            <h3 className="font-bold text-lg mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">Most repairs completed within hours, not days.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
