export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Appliance Repair Services in Kenya</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        We repair fridges, washing machines, microwaves, and more. Serving Nairobi and surrounding regions.
      </p>
      <a href="/booking" className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-light transition">
        Book a Repair
      </a>
    </section>
  )
}
