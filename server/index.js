import app from './app.js'

const isVercel = !!process.env.VERCEL

if (!isVercel) {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default app
