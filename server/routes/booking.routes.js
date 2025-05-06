import express from 'express'
import nodemailer from 'nodemailer'
import Booking from '../models/Booking.js'

const router = express.Router()

// POST /api/booking
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body

    // Persist to database
    const booking = await Booking.create({ name, email, phone, service, message })

    // Send notification email (to business owner & customer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `Fix Place KE <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Booking Request - ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    }

    await transporter.sendMail(mailOptions)

    // Optionally send confirmation email to customer
    if (email) {
      await transporter.sendMail({
        from: `Fix Place KE <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Fix Place KE – We received your booking',
        text: `Hi ${name},\n\nThank you for booking a ${service}. Our team will contact you shortly.\n\n— Fix Place KE`,
      })
    }

    res.status(201).json({ success: true, booking })
  } catch (error) {
    console.error('Booking error', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
