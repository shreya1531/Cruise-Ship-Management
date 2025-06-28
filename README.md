
# 🚢 Cruise Ship Management System

A web-based platform that digitizes and streamlines the onboard experience for cruise ship voyagers and staff. This system enables role-based login, real-time booking, and service management using Firebase Authentication and Firestore.

---

## 📌 Table of Contents
- [Introduction](#introduction)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Modules](#system-modules)
- [Firebase Collections](#firebase-collections)
- [Code Structure](#code-structure)
- [HTML Page Descriptions](#Page Description)
- [Role-Based Pages](#role-based-pages)
- [Future Enhancements](#future-enhancements)
- [Conclusion](#conclusion)


---

## 📘 Introduction

Traditionally, passengers used physical communication like walkie-talkies to access services on a cruise ship. This system replaces that with a digital solution offering:

- Secure voyager login
- Service bookings (catering, stationery, movies, fitness, salon, etc.)
- Real-time admin/staff interaction
- Centralized data management with Firebase

---

## 🌐 Live Demo

👉 [Click here to try the live version](https://shreya1531.github.io/Cruise-Ship-Management/)

> Note: Some features require Firebase backend access.

---

## ✨ Features

- 🔐 Firebase Authentication
- 📄 Voyager Registration with ID Validation
- 🧾 Catering and Stationery Orders
- 🎬 Booking Salon, Movies, Fitness, Resort, and Party Hall
- 🧑‍💼 Admin Panel for Menu and Voyager Management
- 🗂️ Role-based UI for Manager, Head Cook, and Supervisor
- 📡 Real-time Firestore Database Operations

---

## 🛠️ Tech Stack

| Category     | Tools Used                     |
|--------------|-------------------------------|
| Frontend     | HTML5, CSS3, JavaScript        |
| Authentication | Firebase Authentication     |
| Database     | Firebase Firestore             |
| Hosting      | GitHub Pages                   |
| IDE          | Visual Studio Code             |
| Browser      | Google Chrome / Microsoft Edge |

---

## 📦 System Modules

1. **Voyager** – Place orders and bookings
2. **Admin** – Manage voyagers and items
3. **Manager** – Monitor all bookings
4. **Head-Cook** – View catering orders
5. **Supervisor** – View stationery orders

---

## 🔥 Firebase Collections

- `menuItems`
- `stationeryItemList`
- `cateringOrders`
- `stationeryOrders`
- `salonBookings`
- `fitnessBookings`
- `movieBookings`
- `resortBookings`
- `partyHallBookings`
- `validVoyagers`


---

## 📁 Code Structure

```bash
├── index.html                # Home page
├── register.html             # Voyager registration
├── login.html                # Firebase login
├── home.html                 # Voyager UI with navigation
├── dashboard.html            # Booking options for voyager
├── admin
    add_voyager_id.html       # Admin adds valid voyager IDs
    admin.html                # Manage items
├── manager.html              # View all bookings
├── head-cook.html            # View catering orders
├── supervisor_stationery.html # View stationery orders
├── firebase.js               # Firebase setup and config
└── assets/                   # Images, icons, CSS, JS


---

##📄 HTML Page Descriptions
1. index.html
Welcome page showing cruise highlights and navigation to Register and Login pages.

2. register.html
Allows voyager signup using a valid Voyager ID (checked in Firestore).

Uses Firebase Authentication to create an account and redirect to login.

3. login.html
Firebase login with email/password.

Redirects to home.html after successful login.

4. home.html
Sidebar navigation layout:

🏡 Home

🛳️ Services

📋 Bookings

👤 Profile

🚪 Logout

5. dashboard.html
Central hub for making bookings:

Catering, Stationery, Salon, Fitness, Movies, Resort, Party Hall.

Uses Firestore to read/write data.

6.Admin
1)admin.html
Admin-only page.

Add/Edit/Delete catering & stationery items using Firestore collections.

2)add_voyager_id.html
Admin adds valid Voyager IDs to Firestore so users can register.

7. manager.html
Displays all bookings (salon, resort, movie, fitness, party hall) in one place.

8. head-cook.html
Lists all catering orders placed by voyagers.

9. supervisor_stationery.html
Displays stationery orders along with time, user, and total.


---

##🔐 Role-Based Pages
These pages are not publicly linked in the main UI and are accessed through secure direct URLs. Each role-specific page is designed for internal staff operations only:
-admin.html – Admin Dashboard to manage catering and stationery items, and register voyager IDs
-add_voyager_id.html - Admin adds valid Voyager IDs to Firestore so users can register.
-manager.html – Manager Dashboard to view all bookings (movies, fitness, salon, resort, party hall)
-head-cook.html – Head Cook Dashboard to view all catering orders placed by voyagers
-supervisor_stationery.html – Supervisor Dashboard to view stationery requests by voyagers
This structure ensures separation between voyager-facing UI and staff-facing controls.

---

##🚀 Future Enhancements
The project is structured to support scalable future upgrades, including:
💳 Payment Gateway Integration for prepaid services
⭐ Ratings and Feedback System for each service
🔔 Real-Time Notifications to update users instantly
🌐 Multilingual Support for global user experience
📶 Offline Mode with Sync using service workers
📊 Admin Analytics Dashboard with graphs and trends
📱 Mobile App Version for Android/iOS
🤖 AI-based Suggestions for recommending services based on history


---

##Conclusion
✅ Delivers a smooth, app-like booking experience to voyagers
✅ Simplifies management for cruise ship staff through role-based dashboards
✅ Uses Firebase for real-time database sync and secure authentication
✅ Modular structure allows easy maintenance and scalable future development
✅ Successfully bridges communication gaps between voyagers and onboard services




   


