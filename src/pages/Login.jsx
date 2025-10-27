import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import toast from 'react-hot-toast'

const Login = () => {
  const { login, loginWithGoogle, setRememberedEmail } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      toast.success('Logged in!')
      navigate(from, { replace: true })
    } catch (e) {
      toast.error(e.message)
    }
  }

  const googleLogin = async () => {
    try {
      await loginWithGoogle()
      toast.success('Logged in with Google!')
      navigate(from, { replace: true })
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-md my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-2">Login</h2>
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="label">Email</label>
              <input value={email} onChange={e=>{ setEmail(e.target.value); setRememberedEmail(e.target.value) }} type="email" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input value={password} onChange={e=>setPassword(e.target.value)} type={show?'text':'password'} className="input input-bordered w-full pr-12" required />
                <button type="button" className="btn btn-ghost btn-xs absolute right-2 top-1/2 -translate-y-1/2" onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
              </div>
            </div>
            <button className="btn btn-primary w-full">Login</button>
          </form>
          <div className="flex justify-between items-center mt-2">
            <Link to="/forgot" state={{ email }} className="link">Forget Password?</Link>
            <Link to="/signup" className="link">No account? Signup</Link>
          </div>
          <div className="divider">OR</div>
          <button onClick={googleLogin} className="btn btn-outline w-full">Continue with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
