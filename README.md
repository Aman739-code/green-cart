# 🛒 GreenCart – Grocery Delivery Platform

A full-stack grocery delivery web application built with the MERN stack that connects customers with local stores for seamless online shopping and doorstep delivery.

---

## 📋 Table of Contents

- [Problem Statement](#-problem-statement)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [API Documentation](#-api-documentation)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Problem Statement

The project aims to develop a Grocery Delivery Web Application using the MERN stack to simplify online grocery shopping. The platform connects customers with local stores for easy ordering and doorstep delivery, featuring:

- **Convenience**: Shop from home with doorstep delivery
- **Time-Saving**: Quick ordering process with smart search and filters
- **Secure Payments**: Integrated Stripe payment gateway and COD options
- **Local Vendor Support**: Digital access for neighborhood stores

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login with JWT
- Role-based access control (Admin/User/Seller)
- Secure logout functionality

### 🛍️ Product Management
- Full CRUD operations for products
- Product categorization and inventory management
- Stock availability toggle for sellers

### 🔍 Enhanced Shopping Experience
- Advanced product search functionality
- Multi-parameter filtering system
- Product sorting options
- Pagination for better performance

### 🛒 Cart & Checkout
- Real-time cart management
- Multiple address support
- Dual payment options:
  - Cash on Delivery (COD)
  - Online payment via Stripe

### 📦 Order Management
- Order tracking for users
- Seller dashboard for order fulfillment
- Order history and status updates

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Intuitive navigation with React Router
- Fast and interactive user interface

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, React Router, Axios, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens) |
| **Payment** | Stripe Payment Gateway |
| **Hosting** | Vercel (Frontend & Backend), MongoDB Atlas |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│                  (React.js + React Router)                  │
│                    Hosted on Vercel                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTP Requests (Axios)
                     │
┌────────────────────▼────────────────────────────────────────┐
│                         Backend                             │
│                   (Node.js + Express.js)                    │
│                    Hosted on Vercel                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ MongoDB Driver
                     │
┌────────────────────▼────────────────────────────────────────┐
│                        Database                             │
│                         MongoDB                             │
│                   Hosted on MongoDB Atlas                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 API Documentation

### 👤 User Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/user/register` | POST | Register new user | Public |
| `/api/user/login` | POST | User login | Public |
| `/api/user/is-auth` | GET | Authenticate user | Authenticated |
| `/api/user/logout` | GET | Logout user | Authenticated |

### 🏪 Seller Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/seller/login` | POST | Seller login | Public |
| `/api/seller/is-auth` | GET | Authenticate seller | Authenticated |
| `/api/seller/logout` | GET | Logout seller | Authenticated |

### 📦 Product Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/product/add` | POST | Add new product | Authenticated (Seller) |
| `/api/product/list` | GET | Get all products | Public |
| `/api/product/:id` | GET | Get product by ID | Public |
| `/api/product/stock` | POST | Toggle stock availability | Authenticated (Seller) |

### 🛒 Cart Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/cart/update` | POST | Update cart items | Authenticated |

### 📍 Address Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/address/add` | POST | Add new address | Authenticated |
| `/api/address/get` | GET | Get all addresses | Authenticated |

### 💳 Order Endpoints

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/order/cod` | POST | Place COD order | Authenticated |
| `/api/order/stripe` | POST | Process Stripe payment | Authenticated |
| `/api/order/user` | GET | Get user orders | Authenticated |
| `/api/order/seller` | GET | Get seller orders | Authenticated (Seller) |

---

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Stripe account for payment integration

### Clone the Repository

```bash
git clone https://github.com/yourusername/greencart.git
cd greencart
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

Start the frontend:

```bash
npm start
```

The application will be available at `http://localhost:3000`

---

## 🔐 Environment Variables

### Backend Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port number |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret API key |
| `FRONTEND_URL` | Frontend application URL |

### Frontend Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Backend API base URL |
| `REACT_APP_STRIPE_PUBLIC_KEY` | Stripe publishable key |

---

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Backend Deployment (Vercel)

1. Create `vercel.json` in the backend root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

2. Deploy to Vercel following the same steps as frontend

### Database (MongoDB Atlas)

1. Create a cluster on MongoDB Atlas
2. Whitelist IP addresses
3. Get connection string and add to environment variables

---

## 📸 Screenshots

> Add screenshots of your application here

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request


---

## 👥 Team

- **Aman Bhatnagar** - *Lead Developer* - [GitHub](https://github.com/Aman739-code)

---

## 📞 Contact

For any queries or suggestions, please reach out:

- **Email**: aman.2024@nst.rishihood.edu.in
- **GitHub**: [@Aman739-code](https://github.com/Aman739-code)
- **LinkedIn**: [Aman Bhatnagar](www.linkedin.com/in/aman-bhatnagar-150077325)

---

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Vercel for seamless deployment
- Stripe for payment processing
- The MERN stack community

---

<div align="center">
  Made with ❤️ by Aman
</div>
