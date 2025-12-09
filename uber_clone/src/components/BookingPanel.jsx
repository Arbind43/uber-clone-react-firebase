import React, { useState } from 'react'
import { push, ref, set } from 'firebase/database'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import { v4 as uuidv4 } from 'uuid'


export default function BookingPanel() {
const { user } = useAuth()
const [origin, setOrigin] = useState('')
const [destination, setDestination] = useState('')
const [loading, setLoading] = useState(false)


async function requestRide(e) {
e.preventDefault()
setLoading(true)
const rideId = uuidv4()
const ride = {
id: rideId,
riderId: user.uid,
origin,
destination,
status: 'requested',
createdAt: Date.now()
}
await set(ref(db, `rides/${rideId}`), ride)
setLoading(false)
}


return (
<div className="card">
<h3>Book a Ride</h3>
<form onSubmit={requestRide}>
<input placeholder="Origin (address or lat,lng)" value={origin} onChange={e => setOrigin(e.target.value)} />
<input placeholder="Destination (address or lat,lng)" value={destination} onChange={e => setDestination(e.target.value)} />
<button disabled={loading}>{loading ? 'Requesting...' : 'Request Ride'}</button>
</form>
</div>
)
}