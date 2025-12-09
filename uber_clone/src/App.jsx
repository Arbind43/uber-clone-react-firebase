import React from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import AuthPage from './pages/AuthPage'
import RiderDashboard from './pages/RiderDashboard'
import DriverDashboard from './pages/DriverDashboard'


function AppContent() {
const { user } = useAuth()
// simple role detection: if email contains "driver" treat as driver (for demo only)
if (!user) return <AuthPage />
if (user.email && user.email.includes('driver')) return <DriverDashboard />
return <RiderDashboard />
}


export default function App() {
return (
<AuthProvider>
<AppContent />
</AuthProvider>
)
}