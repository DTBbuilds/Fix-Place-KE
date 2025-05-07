import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import apiClient from '../api/client'
import LoadingSpinner from '../ui/LoadingSpinner'

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  service: Yup.string().required('Required'),
  message: Yup.string(),
})

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 id="booking-form-heading" className="text-3xl font-bold mb-8 text-center">Book a Repair</h2>
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-xl mx-auto text-center">
          <span className="text-green-600 text-5xl block mb-4">✓</span>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Booking Successful!</h3>
          <p className="text-green-600 text-lg mb-4">Thank you! We will contact you shortly to confirm your appointment.</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Book Another Appointment
          </button>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-xl mx-auto text-center text-red-600 mb-4">
          <span className="text-red-600 text-5xl block mb-4">⚠</span>
          <h3 className="text-2xl font-bold text-red-700 mb-2">Submission Error</h3>
          <p className="mb-2">There was an error submitting your request.</p>
          <p className="text-sm mb-4">{error}</p>
          <button 
            onClick={() => setError(null)} 
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-light transition"
          >
            Try Again
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', phone: '', service: '', message: '' }}
          validationSchema={BookingSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            try {
              await apiClient.post('/booking', values)
              setSubmitted(true)
              resetForm()
              // Scroll to top to see confirmation message
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } catch (err) {
              console.error('Booking error:', err)
              setError(err.response?.data?.message || 'Network error. Please try again.')
              // Scroll to top to see error message
              window.scrollTo({ top: 0, behavior: 'smooth' })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-xl mx-auto space-y-4" aria-labelledby="booking-form-heading">
              <div>
                <label htmlFor="name" className="block font-medium">Name <span className="text-red-500">*</span></label>
                <Field 
                  name="name" 
                  id="name" 
                  className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                  aria-required="true" 
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" role="alert" />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium">Email <span className="text-red-500">*</span></label>
                <Field 
                  name="email" 
                  id="email" 
                  type="email" 
                  className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                  aria-required="true" 
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" role="alert" />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium">Phone <span className="text-red-500">*</span></label>
                <Field 
                  name="phone" 
                  id="phone" 
                  type="tel" 
                  className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                  aria-required="true" 
                  placeholder="e.g. 0712345678" 
                />
                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" role="alert" />
              </div>

              <div>
                <label htmlFor="service" className="block font-medium">Service <span className="text-red-500">*</span></label>
                <Field 
                  as="select" 
                  name="service" 
                  id="service" 
                  className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                  aria-required="true"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Fridge Repair">Fridge Repair</option>
                  <option value="Washing Machine Repair">Washing Machine Repair</option>
                  <option value="Microwave Repair">Microwave Repair</option>
                </Field>
                <ErrorMessage name="service" component="div" className="text-red-600 text-sm mt-1" role="alert" />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium">Additional Details</label>
                <Field 
                  as="textarea" 
                  name="message" 
                  id="message" 
                  rows="4" 
                  className="mt-1 block w-full rounded border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                  placeholder="Please provide any additional details about your repair needs" 
                />
              </div>
              
              <p className="text-sm text-gray-500"><span className="text-red-500">*</span> Required fields</p>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded hover:bg-primary-light transition flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" color="white" />
                    Processing...
                  </>
                ) : 'Submit Booking'}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </section>
  )
}
