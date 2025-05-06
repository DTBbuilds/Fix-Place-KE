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

The project is ready for deployment to **Vercel** (both frontend & backend) or any Node-capable host. Each folder (`client`, `server`) has its own `package.json` and can be deployed separately.

---

Feel free to open issues or pull requests if you run into problems or have suggestions.
