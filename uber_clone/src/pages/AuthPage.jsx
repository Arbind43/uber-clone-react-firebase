import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'


export default function AuthPage() {
const [isLogin, setIsLogin] = useState(true)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)


async function submit(e) {
e.preventDefault()
setError(null)
try {
if (isLogin) await signInWithEmailAndPassword(auth, email, password)
else await createUserWithEmailAndPassword(auth, email, password)
} catch (err) {
setError(err.message)
}
}


return (
<div className="auth-page">
<form onSubmit={submit} className="card">
<h2>{isLogin ? 'Login' : 'Register'}</h2>
<input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
<input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
<button type="submit">{isLogin ? 'Login' : 'Register'}</button>
<p className="muted">Tip: use an email containing "driver" to test the driver flow.</p>
{error && <div className="error">{error}</div>}
<p>
<button type="button" onClick={() => setIsLogin(!isLogin)} className="link">{isLogin ? 'Create account' : 'Have an account? Login'}</button>
</p>
</form>
</div>
)
}