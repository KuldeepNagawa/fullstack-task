# Full Stack Development

This is a full-stack MERN application built for task.  
It features a fully functional **landing page** and **admin panel** for managing projects, clients, contact forms, and newsletter subscriptions.

---

##  MERN Stack

###  Frontend
- **React** (with Vite)
- **Tailwind CSS**
- **DaisyUI**
- **Axios**

###  Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Cloudinary** (for image uploads)
- **Multer** (for handling image upload)

### ☁️ Deployment
- **Backend**: [Render.com](https://render.com)
- **Frontend**: [Render.com](https://render.com)

---

## Project Structure

### `/backend`
- `controllers/`: All business logic for handling requests
- `routes/`: Route definitions
- `models/`: Mongoose schemas for MongoDB
- `utils/cloudinary.js`: Cloudinary setup
- `index.js`: Main server file with Express

### `/frontend`
- `pages/`: All page components (Landing, Admin)
- `components/`: Reusable UI components like `ClientCard`, `ProjectCard`
- `api/axios.js`: Axios instance for backend communication
- Tailwind & DaisyUI integrated

---

## You can explore site by this link
https://fullstack-task-e6w6.onrender.com
--- for admin panal use /admin

##  Setup Instructions

###  Project

```bash
cd backend
npm install
# Add your .env
node index.js

cd frontend
npm install
npm run dev

## .env looklike
PORT=10000
MONGO_URI=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret


