import React, { useEffect, useState } from 'react'
import MapView from '../components/MapView'
import BookingPanel from '../components/BookingPanel'
import RideStatus from '../components/RideStatus'
import { useAuth } from '../contexts/AuthContext'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'


export default function RiderDashboard() {
const { user } = useAuth()
const [activeRide, setActiveRide] = useState(null)


useEffect(() => {
if (!user) return
const ridesRef = ref(db, 'rides')
const unsub = onValue(ridesRef, (snap) => {
const data = snap.val() || {}
const myRide = Object.values(data).find(r => r.riderId === user.uid && r.status !== 'completed')
setActiveRide(myRide || null)
})
return () => unsub()
}, [user])


return (
<div className="layout">
<div className="map-col"><MapView activeRide={activeRide} /></div>
<div className="side-col">
{activeRide ? <RideStatus ride={activeRide} /> : <BookingPanel />}
</div>
</div>
)
}