# Full Stack Development 🚀

This is a full-stack MERN application built for task.  
It features a fully functional **landing page** and **admin panel** for managing projects, clients, contact forms, and newsletter subscriptions.

---

## 🔧 Tech Stack

### 🚀 Frontend
- **React** (with Vite)
- **Tailwind CSS**
- **DaisyUI**
- **Axios**
- **React Router**

### 🌐 Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Cloudinary** (for image uploads)
- **Multer** (for handling image upload)
- **CORS**
- **dotenv**

### ☁️ Deployment
- **Backend**: [Render.com](https://render.com)
- **Frontend**: [Render.com](https://render.com)

---

## 📁 Project Structure

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

## 🔌 API Endpoints (Backend)

| Method | Route               | Description                  |
|--------|---------------------|------------------------------|
| POST   | `/api/projects/add` | Add a new project (with image) |
| GET    | `/api/projects`     | Get all projects             |
| POST   | `/api/clients/add`  | Add a new client (with image) |
| GET    | `/api/clients`      | Get all clients              |
| POST   | `/api/contacts/add` | Submit a contact form        |
| GET    | `/api/contacts`     | Get all contact submissions  |
| POST   | `/api/subscribers/add` | Subscribe to newsletter   |
| GET    | `/api/subscribers`  | Get all subscribers          |

---

## You can explor site by this link
https://fullstack-task-e6w6.onrender.com
---

## 🔧 Setup Instructions

### 🧪 Project

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


