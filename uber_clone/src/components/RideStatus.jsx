import React, { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'


export default function RideStatus({ ride }) {
const { user } = useAuth()
const [liveRide, setLiveRide] = useState(ride)


useEffect(() => {
const rRef = ref(db, `rides/${ride.id}`)
const unsub = onValue(rRef, snap => setLiveRide(snap.val()))
return () => unsub()
}, [ride.id])


if (!liveRide) return null


return (
<div className="card">
<h3>Ride Status: {liveRide.status}</h3>
<p><strong>From:</strong> {liveRide.origin}</p>
<p><strong>To:</strong> {liveRide.destination}</p>
<p>{liveRide.driverId ? `Driver: ${liveRide.driverId}` : 'Searching driver...'}</p>
{liveRide.driverLocation && <p>Driver location: {liveRide.driverLocation.lat.toFixed(5)}, {liveRide.driverLocation.lng.toFixed(5)}</p>}
</div>
)
}