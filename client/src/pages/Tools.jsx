import { useState } from 'react'
import ToolCard from '../ui/ToolCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Tool category data
const toolCategories = [
  {
    id: 'general',
    title: 'General Appliance Repair Tools',
    icon: 'toolbox',
    description: 'Essential tools for diagnosing and repairing most household appliances',
    tools: [
      { name: 'Multimeter', description: 'For testing electrical circuits and components', price: 'KES 2,500' },
      { name: 'Screwdriver Set', description: 'Various sizes and types for different appliances', price: 'KES 1,800' },
      { name: 'Pliers Set', description: 'For gripping, bending and cutting wires', price: 'KES 1,200' },
      { name: 'Socket Set', description: 'For various nuts and bolts', price: 'KES 2,000' },
    ]
  },
  {
    id: 'refrigerator',
    title: 'Refrigerator Repair Tools',
    icon: 'snowflake',
    description: 'Specialized tools for repairing refrigerators and freezers',
    tools: [
      { name: 'Refrigerant Gauge Set', description: 'For measuring refrigerant pressure', price: 'KES 4,500' },
      { name: 'Refrigerant Recovery System', description: 'For safe removal of refrigerant', price: 'KES 15,000' },
      { name: 'Leak Detector', description: 'For finding refrigerant leaks', price: 'KES 3,000' },
      { name: 'Vacuum Pump', description: 'For removing air from refrigeration systems', price: 'KES 7,500' },
    ]
  },
  {
    id: 'washer',
    title: 'Washer & Dryer Repair Tools',
    icon: 'tint',
    description: 'Tools specifically designed for washing machine and dryer repairs',
    tools: [
      { name: 'Appliance Puller', description: 'For removing agitators and pulleys', price: 'KES 1,800' },
      { name: 'Spanner Wrench', description: 'For accessing internal components', price: 'KES 1,200' },
      { name: 'Drive Belt', description: 'Replacement for worn out belts', price: 'KES 800' },
      { name: 'Washing Machine Hoses', description: 'High-quality replacement hoses', price: 'KES 1,500' },
    ]
  },
  {
    id: 'microwave',
    title: 'Microwave Repair Tools',
    icon: 'blender',
    description: 'Safety equipment and tools for microwave oven repairs',
    tools: [
      { name: 'High Voltage Gloves', description: 'For safety when working with capacitors', price: 'KES 2,200' },
      { name: 'Capacitor Discharge Tool', description: 'For safely discharging capacitors', price: 'KES 1,500' },
      { name: 'Microwave Leakage Detector', description: 'For testing door seals', price: 'KES 3,500' },
      { name: 'Door Switch', description: 'Common replacement part', price: 'KES 600' },
    ]
  },
  {
    id: 'digital',
    title: 'Digital Diagnostic Tools',
    icon: 'tablet',
    description: 'Software and digital tools for modern appliance repair',
    tools: [
      { name: 'Appliance Diagnostic App', description: 'For connecting to smart appliances', price: 'KES 3,000/year' },
      { name: 'Temperature Sensor', description: 'Digital sensor with smartphone connectivity', price: 'KES 4,200' },
      { name: 'Circuit Analyzer', description: 'For complex circuit diagnosis', price: 'KES 5,500' },
      { name: 'Repair Manual Subscription', description: 'Digital access to repair guides', price: 'KES 2,000/year' },
    ]
  },
]

export default function Tools() {
  const [openCategory, setOpenCategory] = useState('general')

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Professional Appliance Repair Tools</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our collection of high-quality tools and supplies for DIY repairs or professional technicians.
          All items are available for purchase at our physical store or can be ordered online.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {toolCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setOpenCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
              ${openCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            <FontAwesomeIcon icon={category.icon} />
            {category.title}
          </button>
        ))}
      </div>

      {/* Tool Listings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolCategories
          .find(cat => cat.id === openCategory)
          ?.tools.map((tool, idx) => (
            <ToolCard key={idx} tool={tool} />
          ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Tools?</h2>
        <p className="mb-6">Our experts can guide you in selecting the best tools for your repair needs.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-light transition flex items-center gap-2">
            <FontAwesomeIcon icon="phone" />
            Contact Us
          </a>
          <a href="/booking" className="bg-white border border-primary text-primary px-6 py-3 rounded hover:bg-gray-50 transition flex items-center gap-2">
            <FontAwesomeIcon icon="calendar-check" />
            Book a Repair
          </a>
        </div>
      </div>

      {/* SEO Optimization Section (Hidden visually but good for SEO) */}
      <div className="mt-12 text-sm text-gray-500">
        <h2 className="text-lg font-semibold mb-2">Quality Appliance Repair Tools in Kenya</h2>
        <p>
          The Fix Place KE offers the best selection of professional appliance repair tools in Nairobi and throughout Kenya.
          Whether you need refrigerator repair tools, washing machine parts, or diagnostic equipment for modern appliances,
          we have everything you need for successful repairs.
        </p>
      </div>
    </div>
  )
}
