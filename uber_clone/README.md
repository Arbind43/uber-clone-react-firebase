# Uber Clone (React + Firebase)


## Features
- Rider: book ride, realtime ride status
- Driver: advertise location, accept ride requests
- Realtime syncing using Firebase Realtime Database
- Authentication with Firebase Auth (Email/Password)
- Google Maps integration for visualization


## Setup
1. Clone the repository
2. Run `npm install`
3. Create a Firebase project and enable Email/Password auth + Realtime Database
4. Copy Firebase web config into `src/firebase.js`
5. Enable Google Maps JavaScript API and set `VITE_GOOGLE_MAPS_KEY` in a `.env` file
6. Run `npm run dev` and open the app


## DB structure (example)
- /drivers/{driverId}/location: {lat, lng}
- /rides/{rideId}: { riderId, origin, destination, status, driverId?, driverLocation? }


## Notes / Next steps
- Replace simple string origin/destination with geocoded lat/lng
- Add driver matching algorithm (closest driver)
- Add payments, trip history, ratings
- Move heavy logic to Cloud Functions for production
```


---


That's all the files. Follow the README steps to run locally.