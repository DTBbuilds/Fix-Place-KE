import express from 'express'
import nodemailer from 'nodemailer'
import Booking from '../models/Booking.js'

const router = express.Router()

// POST /api/booking
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body
    
    // Basic validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({ success: false, message: 'Missing required fields' })
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' })
    }

    // Persist to database
    const booking = await Booking.create({ name, email, phone, service, message })

    // Send notification email (to business owner & customer)
    // Skip email sending if no email credentials are available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured, skipping email notifications')
      return res.status(201).json({ success: true, booking, emailSent: false })
    }
    
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
    // More specific error messages based on error type
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors })
    } else if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Duplicate entry' })
    } else if (error.name === 'MongoServerError') {
      return res.status(503).json({ success: false, message: 'Database error' })
    }
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
