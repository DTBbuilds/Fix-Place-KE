const services = [
  { name: 'Fridge Repair', price: 'From KES 2,000', desc: 'Fix cooling issues, gas refilling, thermostat replacement.' },
  { name: 'Washing Machine Repair', price: 'From KES 2,500', desc: 'Drum issues, draining problems, motor replacement.' },
  { name: 'Microwave Repair', price: 'From KES 1,500', desc: 'Heating issues, fuse replacement, door switch problems.' },
]

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((svc) => (
          <div key={svc.name} className="bg-white shadow p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
            <p className="text-primary font-bold mb-2">{svc.price}</p>
            <p className="text-gray-700 mb-4">{svc.desc}</p>
            <a href="/booking" className="text-primary hover:underline">Book Now →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
