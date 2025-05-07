import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookingRouter from './routes/booking.routes.js'

// Load environment variables from .env file
dotenv.config()

// Verify required environment variables are set
const requiredEnvs = ['MONGO_URI']
requiredEnvs.forEach(env => {
  if (!process.env[env]) {
    console.warn(`⚠️ Required environment variable ${env} is not set. Some features may not work properly.`)
  }
})

const app = express()

// Middleware for parsing and CORS
app.use(cors())
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

// Add request logging in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} [${req.method}] ${req.url}`)
    next()
  })
}

// Routes
app.use('/api/booking', bookingRouter)

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    mongodb: mongoose.connection.readyState ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString() 
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  })
})

// Connect to MongoDB only if not already connected (avoids re-connection in serverless cold starts)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Fail fast if MongoDB is unreachable
  }).then(() => {
    console.log('✅ MongoDB connected successfully')
  }).catch(err => {
    console.error('❌ MongoDB connection error:', err.message)
    // Don't crash the application in production if MongoDB fails to connect
    if (process.env.NODE_ENV !== 'production') {
      console.warn('The application will continue without database functionality')
    }
  })

  // Add connection event listeners
  mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'))
  mongoose.connection.on('reconnected', () => console.log('MongoDB reconnected'))
}

export default app
