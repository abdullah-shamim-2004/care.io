# 🏥 Care.io – Trusted Care Service Platform

Care.io is a full-stack care service booking platform built with **Next.js (App Router)**.  
It helps users find and book **Baby Care, Elderly Care, and Sick Patient Care** services easily and securely.

---

## 🌐 Live Website

🔗 https://care-io-six.vercel.app/

---

## 🎯 Project Purpose

The goal of Care.io is to provide a **reliable, trusted, and user-friendly caregiving platform** where users can:

- Explore care services
- Book services securely
- Manage bookings with real-time cost calculation

---

## 🚀 Features

### 🔐 Authentication

- User authentication using **NextAuth**
- Credentials based login
- Protected routes (Private Pages)
- Session handling

### 🛎️ Services

- View all caregiving services
- Service details page
- Dynamic routing 

### 📅 Booking System

- Private booking page 
- Select service duration (hours / days)
- Select location:
  - Division
  - District
  - City
  - Area / Address
- Dynamic total price calculation
- Booking saved with **Pending** status

### 🎨 UI Sections

- Hero Banner with caregiving motivation
- About section (platform mission)
- Services overview
- Testimonials & success metrics
- Professional footer

---

## 🧑‍💻 Tech Stack

### Frontend

- **Next.js 16 (App Router)**
- **React**
- **Tailwind CSS**
- **DaisyUI**
- **Framer Motion**
- **React Icons**

### Backend

- **Next.js API Routes**
- **MongoDB**
- **NextAuth (Credentials Provider)**

### Deployment

- **Vercel**

---

## 📂 Project Structure

```bash
care.io/
├── app/
│   ├── api/
│   │   └── auth/[...nextauth]
│   ├── booking/[id]
│   ├── services/
│   ├── login/
│   ├── register/
│   └── page.js
├── actions/
│   └── server/
├── components/
├── provider/
├── data/
├── public/
├── .env.local
├── package.json
└── README.md
```
