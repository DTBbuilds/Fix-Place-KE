import { Schema, model } from 'mongoose'

const bookingSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
}, { timestamps: true })

export default model('Booking', bookingSchema)
