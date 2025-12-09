import React from 'react'
import MapView from '../components/MapView'
import DriverSimulator from '../components/DriverSimulator'


export default function DriverDashboard() {
return (
<div className="layout">
<div className="map-col"><MapView /></div>
<div className="side-col">
<DriverSimulator />
</div>
</div>
)
}