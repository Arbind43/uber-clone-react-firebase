# 🚖 Uber Clone — Real-Time Ride Booking System (React + Firebase)

A fully functional Uber-like ride-hailing simulation built using **React**, **Firebase Realtime Database**, and **Google Maps API**.  
This project demonstrates real-time location updates, live ride tracking, authentication, and driver–rider interaction.

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── BookingPanel.jsx        # Rider selects pickup & drop locations
│   ├── DriverSimulator.jsx     # Simulated driver sending live coordinates
│   ├── MapView.jsx             # Renders Google Maps and markers
│   ├── RideStatus.jsx          # Shows confirmation, arrival, ongoing status
│
├── contexts/
│   └── AuthContext.jsx         # Firebase auth & user state mgmt
│
├── pages/
│   ├── AuthPage.jsx            # Login / Register
│   ├── DriverDashboard.jsx     # Driver location + ride handling
│   ├── RiderDashboard.jsx      # Ride booking, tracking
│
├── App.jsx                     # App router + context provider
├── firebase.js                 # Firebase config + SDK initialization
├── main.jsx                    # Entry point
├── style.css                   # UI styling
│
├── .env.example                # Template for Google Maps + Firebase keys
└── vite.config.js              # Vite configuration
```

---

## 🚀 Features

### 🧭 Rider-Side Features
- Search pickup and destination  
- View estimated distance & route  
- Request ride in real-time  
- Track driver live on map  
- Live ride updates (Accepted → Arriving → Started → Completed)

### 🚗 Driver-Side Features
- Driver login & dashboard  
- Accept or reject ride requests  
- Real-time driver location updates  
- Simulated driving path  
- Ride lifecycle management  

### ⚡ Real-Time System (Firebase)
- Stores user profiles & ride data  
- Listens for live location changes  
- Auto-syncs rider & driver dashboards  
- Ensures instant UI updates without page refresh

---

## 🗺️ Tech Stack

### **Frontend**
- React.js  
- React Router  
- Context API  
- Tailwind / CSS (custom styles)

### **Backend / Services**
- Firebase Authentication  
- Firebase Realtime Database  
- Google Maps JavaScript API  
- Geocoding API  
- Directions API  

### **Tools**
- Vite  
- JavaScript (ESNext)  
- VSCode  

---

## 🔐 Environment Setup

Create a `.env` file (use `.env.example` as reference):

```
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_DB_URL=xxxx
VITE_GOOGLE_MAPS_API_KEY=xxxx
```

---

## ▶️ Installation & Run Locally

```
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

npm install
npm run dev
```

---

## 🗺️ How It Works (High-Level Flow)

### 1️⃣ Rider Requests Ride  
- Stores pickup/destination in DB  
- Notifies driver side in real-time  

### 2️⃣ Driver Accepts Ride  
- Rider gets instant status update  
- Driver routes are calculated via Google Directions  

### 3️⃣ Driver Location Simulation  
- `DriverSimulator.jsx` pushes coordinates every few seconds  
- Rider map updates instantly  

### 4️⃣ Ride Completion  
- Both dashboards reset to idle state  

---

## 📌 Key Components — Explanation

### **BookingPanel.jsx**
Handles user input for pickup/drop, calculates distance, requests ride.

### **DriverSimulator.jsx**
Simulates driving using:
- Polyline from Google Directions API  
- Timed location updates  

### **MapView.jsx**
- Displays map  
- Updates driver/rider markers  
- Draws route dynamically  

### **RideStatus.jsx**
Shows:
- Searching for driver  
- Driver accepted  
- Driver arriving  
- Ride started  
- Ride completed  

---

## 📂 Firebase Architecture

### **Database Structure**
```
/
├── users/
│   ├── driverId/
│   └── riderId/
│
├── rides/
│   ├── rideId/
│       ├── status: searching | accepted | enroute | started | completed
│       ├── pickup: { lat, lng }
│       ├── drop:   { lat, lng }
│       ├── driverLocation: { lat, lng }
```

---

## 🛠️ Future Enhancements

- Real driver app (GPS instead of simulator)  
- Payment integration  
- Advanced dispatch algorithm  
- User ride history  
- Push notifications  
- Surge pricing model  

---


