import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  service: Yup.string().required('Required'),
  message: Yup.string(),
})

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Book a Repair</h2>
      {submitted ? (
        <p className="text-center text-green-600 text-lg">Thank you! We will contact you shortly.</p>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', phone: '', service: '', message: '' }}
          validationSchema={BookingSchema}
          onSubmit={async (values, { resetForm }) => {
            await axios.post('/api/booking', values)
            setSubmitted(true)
            resetForm()
          }}
        >
          {() => (
            <Form className="max-w-xl mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">Name</label>
                <Field name="name" className="mt-1 block w-full rounded border-gray-300" />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <Field name="email" type="email" className="mt-1 block w-full rounded border-gray-300" />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium">Phone</label>
                <Field name="phone" className="mt-1 block w-full rounded border-gray-300" />
                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="service" className="block font-medium">Service</label>
                <Field as="select" name="service" className="mt-1 block w-full rounded border-gray-300">
                  <option value="">Select a service</option>
                  <option value="Fridge Repair">Fridge Repair</option>
                  <option value="Washing Machine Repair">Washing Machine Repair</option>
                  <option value="Microwave Repair">Microwave Repair</option>
                </Field>
                <ErrorMessage name="service" component="div" className="text-red-600 text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium">Message</label>
                <Field as="textarea" name="message" rows="4" className="mt-1 block w-full rounded border-gray-300" />
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 rounded hover:bg-primary-light transition">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </section>
  )
}
