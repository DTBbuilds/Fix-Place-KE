import app from '../server/app.js';
import { connectDB } from '../server/app.js';

/**
 * Serverless function entry point for Vercel
 * This function handles API requests and ensures DB connection
 * is properly established for each serverless invocation
 */
export default async function handler(req, res) {
  // Ensure DB is connected for each serverless function invocation
  try {
    // Connect to MongoDB (the function will return immediately if already connected)
    await connectDB();
    
    // Forward the request to our Express app
    return new Promise((resolve) => {
      // Clean up the URL path
      const path = req.url.replace(/^\/?api\/?/, '') || '/';
      req.url = path;
      
      // Pass the request to our Express app
      app(req, res, () => {
        resolve();
      });
    });
  } catch (error) {
    console.error('API handler error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
    return;
  }
}
