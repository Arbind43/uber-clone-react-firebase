import React, { useEffect, useState } from 'react'
const [availableRides, setAvailableRides] = useState([])


useEffect(() => {
if (!user) return
// register driver location in DB
const driverRef = ref(db, `drivers/${user.uid}`)
set(driverRef, { location: { lat, lng }, updatedAt: Date.now() })
}, [user])


useEffect(() => {
const ridesRef = ref(db, 'rides')
return onValue(ridesRef, snap => {
const data = snap.val() || {}
const requested = Object.values(data).filter(r => r.status === 'requested')
setAvailableRides(requested)
})
}, [])


function updateLocation() {
if (!user) return
const driverRef = ref(db, `drivers/${user.uid}`)
set(driverRef, { location: { lat: Number(lat), lng: Number(lng) }, updatedAt: Date.now() })
}


async function acceptRide(rideId) {
const rideRef = ref(db, `rides/${rideId}`)
await update(rideRef, { status: 'accepted', driverId: user.uid, driverLocation: { lat: Number(lat), lng: Number(lng) } })
}


return (
<div className="card">
<h3>Driver Console (Simulator)</h3>
<label>Lat <input value={lat} onChange={e => setLat(e.target.value)} /></label>
<label>Lng <input value={lng} onChange={e => setLng(e.target.value)} /></label>
<button onClick={updateLocation}>Update Location</button>


<h4>Available Rides</h4>
{availableRides.length === 0 && <p>No requests</p>}
<ul>
{availableRides.map(r => (
<li key={r.id}>
{r.origin} → {r.destination} <button onClick={() => acceptRide(r.id)}>Accept</button>
</li>
))}
</ul>
</div>
)
