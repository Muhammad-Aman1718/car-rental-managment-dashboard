# 🚗 Car Rental Management System

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-6.13.0-47A248?style=for-the-badge&logo=mongodb)
![Prisma](https://img.shields.io/badge/Prisma-6.4.1-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern car rental management system with role-based access, booking management, and comprehensive dashboard analytics.**

[Features](#-features) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Usage](#-usage)

</div>

---

## 🎯 Overview

A comprehensive **Car Rental Management System** built with Next.js that streamlines car rental operations. Features include role-based authentication, car inventory management, booking system, services tracking, and analytics dashboard with dark mode support.

### Key Highlights

- ✨ Modern UI/UX with dark mode support
- 🔐 Secure authentication with NextAuth.js (ADMIN/USER roles)
- 📊 Real-time dashboard analytics
- 🚗 Complete car management (CRUD operations)
- 📅 Calendar integration for bookings
- ☁️ Cloudinary image uploads
- 📱 Fully responsive design

---

## ✨ Features

### Core Functionality
- **Home Page** - Landing page with vehicle search, brand/category filters, car collection display
- **Authentication** - Sign up/Sign in with email/password, JWT sessions, role-based access
- **Admin Dashboard** - Performance metrics, statistics, recommendations, quick actions
- **Car Management** - Add/View/Update cars with comprehensive details and Cloudinary image uploads
- **Booking System** - Browse cars, filter options, view details, booking calendar
- **Services Management** - Service stations, maintenance tracking, service schedules, order management
- **Assets Management** - Fuel usage, KM tracking, cost overview, activity cards, notifications
- **Calendar** - FullCalendar integration for event and booking management
- **Sell Cars** - Car listings, offers management, pricing
- **Settings** - Profile management, email/password updates, theme toggle

---

## 🛠️ Tech Stack

**Frontend:** Next.js 16.1.6, React 19.2.4, TypeScript, Tailwind CSS, React Icons, FullCalendar, Chart.js

**Backend:** Next.js API Routes, NextAuth.js 4.24.11, Prisma 6.4.1, MongoDB 6.13.0, Bcryptjs, Axios

**State Management:** Redux Toolkit 2.5.1, React Redux 9.2.0

**Cloud Services:** Cloudinary (image uploads)

---

## 📦 Prerequisites

- Node.js (v18+)
- npm/yarn/pnpm
- MongoDB (local or Atlas)
- Cloudinary account

---

## 🚀 Installation

### 1. Clone Repository
```bash
git clone <your-repository-url>
cd car-rental-managment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create `.env.local`:
```env
DATABASE_URL="mongodb://localhost:27017/car-rental"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key" # Generate: openssl rand -base64 32
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### 4. Setup Prisma
```bash
npm run prisma:generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

**MongoDB:** Use local MongoDB or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - update `DATABASE_URL` in `.env.local`

**Cloudinary:** Get credentials from [Cloudinary Dashboard](https://cloudinary.com/) and add to `.env.local`

**NextAuth Secret:** Generate with `openssl rand -base64 32`

---

## 📖 Usage

### Administrators
1. Sign up/Login as ADMIN
2. Access dashboard for analytics and metrics
3. Add/manage cars, bookings, assets, services
4. Use calendar for scheduling
5. Manage settings and profile

### Users
1. Sign up/Login as USER
2. Browse available cars
3. View car details and make bookings
4. Manage profile in settings

---

## 📁 Project Structure

```
car-rental-managment/
├── public/assets/          # Images and media files
├── prisma/schema.prisma   # Database schema
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (admin)/dashboard/  # Admin pages
│   │   ├── api/           # API routes
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities (auth, cloudinary)
│   ├── store/             # Redux store
│   ├── types/             # TypeScript types
│   └── utils/             # Helper functions
└── .env.local             # Environment variables
```

---

## 🔌 API Routes

- `POST /api/auth/[...nextauth]` - NextAuth authentication
- `GET /api/carData` - Get all cars (role-based)
- `POST /api/carData` - Add car (Admin only)
- `POST /api/signUp` - User registration
- `GET /api/userData` - Get user data

---

## 🗄️ Database Schema

**User Model:** id, firstName, lastName, email, password, role (ADMIN/USER), profile fields

**Car Model:** id, adminId, carName, fuelType, transmission, mileage, topSpeed, price, color, engineCapacity, seatingCapacity, registrationNumber, carType, modelYear, doors, imageUrl, purpose, timestamps

---

## 🔐 Authentication

- **NextAuth.js** with Credentials Provider
- **JWT Strategy** for sessions
- **Role-Based Access** (ADMIN/USER)
- **Password Hashing** with Bcryptjs

**Create Admin:** Sign up normally, then update role in database using `npx prisma studio`

---

## 🚀 Deployment

### Build & Start
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

**Required Env Variables:** `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `CLOUDINARY_*`

---

## 📝 Available Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm start                # Production server
npm run prisma:generate  # Generate Prisma Client
npm run lint             # Run ESLint
```

---

## 🐛 Troubleshooting

**Database Error:** Check MongoDB is running, verify `DATABASE_URL`, run `prisma:generate`

**Auth Issues:** Verify `NEXTAUTH_SECRET` and `NEXTAUTH_URL`, clear browser cookies

**Image Upload:** Check Cloudinary credentials and account status

**Build Errors:** Run `prisma:generate` before build, check TypeScript errors

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

<div align="center">

**⭐ If you find this project helpful, please give it a star! ⭐**

Made with ❤️ using Next.js and TypeScript

</div>
