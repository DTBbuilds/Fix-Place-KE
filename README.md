# Fix Place KE Website

This repository contains the code for **Fix Place KE**, a full-stack web application that showcases appliance repair services and allows customers to request bookings online.

---

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React + Vite + Tailwind CSS |
| Backend  | Node.js + Express |
| Database | MongoDB Atlas |

---

## Local Development

### 1. Prerequisites

* Node.js ≥ 18
* npm ≥ 9
* MongoDB Atlas connection string (or local MongoDB)

### 2. Project Structure

```
The-Fix-Place/
├── client/   # React frontend
└── server/   # Express backend API
```

### 3. Setup & Run

```bash
# Frontend
cd client
npm install
npm run dev      # http://localhost:5173

# Backend (in a second terminal)
cd ../server
cp .env.example .env   # then fill in env variables
npm install
npm run dev       # http://localhost:5000
```

### 4. Environment Variables (server/.env)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

---

## Deployment

### Vercel Deployment (Recommended)

This project is configured for seamless deployment to Vercel as a monorepo with both frontend and backend.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Keep all default settings (the project includes a `vercel.json` configuration)

3. **Environment Variables**:
   Add the following environment variables in the Vercel project settings:
   ```
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password_or_app_password
   ```

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically detect the monorepo structure and build both client and server

### Alternative Deployments

You can also deploy the frontend and backend separately:

- **Frontend**: The `client` folder can be deployed to Netlify, GitHub Pages, or any static host.
- **Backend**: The `server` folder can be deployed to Heroku, Railway, or any Node.js-capable host.

---

Feel free to open issues or pull requests if you run into problems or have suggestions.
