import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookingRouter from './routes/booking.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/booking', bookingRouter)

// Connect to MongoDB only if not already connected (avoids re-connection in serverless cold starts)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected')
  }).catch(err => {
    console.error('Mongo connection error', err)
  })
}

export default app
