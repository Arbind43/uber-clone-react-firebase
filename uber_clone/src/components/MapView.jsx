import React, { useEffect, useRef, useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from 'react-google-maps-api'
import { useAuth } from '../contexts/AuthContext'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'


const libs = ['places']


export default function MapView({ activeRide }) {
const { user } = useAuth()
const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY, libraries: libs })
const [drivers, setDrivers] = useState({})


useEffect(() => {
const driversRef = ref(db, 'drivers')
const unsub = onValue(driversRef, (snap) => {
setDrivers(snap.val() || {})
})
return () => unsub()
}, [])


if (loadError) return <div>Error loading maps</div>
if (!isLoaded) return <div>Loading map...</div>


return (
<GoogleMap zoom={13} center={{ lat: 28.67, lng: 77.22 }} mapContainerStyle={{ width: '100%', height: '100%' }}>
{Object.keys(drivers).map(k => {
const d = drivers[k]
if (!d || !d.location) return null
return <Marker key={k} position={{ lat: d.location.lat, lng: d.location.lng }} />
})}
{activeRide && activeRide.driverLocation && (
<Marker position={{ lat: activeRide.driverLocation.lat, lng: activeRide.driverLocation.lng }} />
)}
</GoogleMap>
)
}