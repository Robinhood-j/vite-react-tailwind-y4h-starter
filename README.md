# Youth4Health - Full Stack Application

🚀 **Youth4Health** is a full-stack application built with **React**, **Vite**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB Atlas**. It allows tracking youth-related incidents and posts, with a health check endpoint for backend monitoring.

---

## 🗂 Project Structure


---

## ⚡ Features

- **Backend**:
  - MongoDB connection via Mongoose
  - CRUD operations for incidents and posts
  - Health check endpoint (`/health`)
- **Frontend**:
  - React + Vite setup
  - Tailwind CSS styling
  - Fetches and displays incidents and posts
  - Forms to create new incidents and posts

---

## 🛠 Prerequisites

- Node.js v24+
- npm
- MongoDB Atlas account

---

## 🔧 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
npm install
MONGODB_URI=<your_mongodb_connection_string>
PORT=5177
JWT_SECRET=your_jwt_secret_here
node server.js
🎯 Server running on port 5177
🌐 Health check: http://localhost:5177/health
✅ MongoDB Connected Successfully!
cd frontend
npm install
@tailwind base;
@tailwind components;
@tailwind utilities;
npm run dev
GET /health
{
  "status": "OK",
  "database": "connected",
  "uptime": 1671.42,
  "timestamp": "2025-10-22T12:55:07.603Z"
}
GET /api/incidents      # Fetch all incidents
POST /api/incidents     # Create a new incident
{
  "title": "Sample Incident",
  "description": "Details about the incident"
}
GET /api/posts          # Fetch all posts
POST /api/posts         # Create a new post
{
  "title": "Sample Post",
  "content": "This is a sample post content"
}
