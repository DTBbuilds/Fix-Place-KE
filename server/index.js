import app from './app.js'

// For local development
const isVercel = !!process.env.VERCEL

if (!isVercel) {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

// Export the Express API for Vercel serverless functions
export default app
