📌 Project Overview

This Uber Clone includes:

✔ Rider ride-booking flow
✔ Driver accepting and updating ride status
✔ Real-time driver location updates
✔ Firebase as backend (Auth + Realtime DB)
✔ Google Maps integration for visualization
✔ Modular React components
✔ Fully responsive UI

🧪 Live Demo (Optional)

Add link here when deployed.

⭐ Features
👤 User Authentication

Register/login using email & password

Role-based access (Rider / Driver)

🚗 Rider Features

Request a ride by entering pickup and destination

View real-time ride status

Track driver on Google Maps

Automatically receives updates as the ride progresses

🧑‍✈️ Driver Features

Update real-time location

View available ride requests

Accept rides

Rider sees driver movement instantly

🔥 Backend Features (Firebase)

Firebase Authentication

Realtime Database for driver–rider sync

Secure read/write DB rules

WebSocket-based live updates (handled by Firebase)

🛠 Tech Stack
Frontend

React.js

Vite

React Hooks

React Google Maps API

Modern ES6 JavaScript

Backend

Firebase Authentication

Firebase Realtime Database

APIs

Google Maps JavaScript API

📁 Project Structure
uber-clone/
│── public/
│── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
│── README.md
│── package.json
│── vite.config.js

🚀 Getting Started (Run Locally)
1️⃣ Clone the repository
git clone https://github.com/Arbind43/uber-clone-react-firebase.git
cd uber-clone-react-firebase

2️⃣ Install dependencies
npm install

🔐 Configure Firebase
Step 1 — Create Firebase Project

Go to: https://console.firebase.google.com

Create a new project → Add Web App

Step 2 — Enable Services

✔ Authentication → Email/Password
✔ Realtime Database → Start in test mode (or use rules below)

Step 3 — Add Firebase Config

Paste your Firebase config into:

src/firebase.js

🌍 Add Google Maps API Key

Create .env file in project root:

VITE_GOOGLE_MAPS_KEY=YOUR_API_KEY


Enable Maps API from:
https://console.cloud.google.com/apis/

▶️ Start Development Server
npm run dev


Open in browser:
👉 http://localhost:5173

🔐 Firebase Database Rules (Example)
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "drivers": {
      "$driverId": {
        ".write": "auth.uid === $driverId"
      }
    }
  }
}
