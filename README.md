# 🏥 Care.xyz - Professional Caregiving Service Platform


## 🚀 Live Demo
**[🌐 View Live Site](https://carehub-xyz.vercel.app/)** *(Replace this link with your actual Vercel deployment link)*

---

## 📖 Project Overview
**Care.xyz** is a full-stack web application designed to connect users with professional caregivers. Whether it's **Child Care**, **Elderly Care**, or **Medical Support**, users can easily browse services, view details, and book appointments.

The platform ensures a seamless user experience with secure authentication, real-time booking management, and automated email invoices.

---

## ✨ Key Features

### 🔐 Authentication & Security
- **User Registration & Login:** Secure email/password authentication using **Bcrypt** for encryption.
- **Social Login:** One-click sign-in with **Google (Firebase Auth)**.
- **Session Management:** Persisted user sessions using LocalStorage.

### 🛠 Service Management
- **Dynamic Service Pages:** Detailed view for each service (Child Care, Physiotherapy, etc.) with dynamic metadata for SEO.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop using **Tailwind CSS**.

### 📅 Booking System
- **Smart Booking Form:** Users can select dates, duration, and calculate total cost instantly.
- **Database Integration:** All bookings are stored securely in **MongoDB**.
- **User Dashboard:** A private "My Bookings" route where users can track their booking history.

### 📧 Automated Notifications
- **Email Invoices:** Automated booking confirmation emails sent via **Nodemailer**.
- **Interactive UI:** Beautiful pop-up alerts using **SweetAlert2** for success/error messages.

---

## 💻 Tech Stack Used

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion |
| **Backend** | Next.js API Routes (Serverless) |
| **Database** | MongoDB, Mongoose |
| **Authentication** | Firebase Auth, Custom JWT Logic |
| **Tools** | Nodemailer (Email), SweetAlert2 (UI), React Icons |
| **Deployment** | Vercel |

---
