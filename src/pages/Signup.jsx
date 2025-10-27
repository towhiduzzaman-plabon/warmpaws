import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import toast from 'react-hot-toast'

const Signup = () => {
  const { signup } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd)
    const hasLower = /[a-z]/.test(pwd)
    const longEnough = pwd.length >= 6
    if (!hasUpper) return 'Must include an uppercase letter.'
    if (!hasLower) return 'Must include a lowercase letter.'
    if (!longEnough) return 'Must be at least 6 characters.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validatePassword(password)
    if (err) {
      toast.error(err)
      return
    }
    try {
      await signup(email, password, name, photo)
      toast.success('Account created!')
      navigate('/')
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-md my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-2">Signup</h2>
          <form onSubmit={onSubmit} className="space-y-3">
            <div>
              <label className="label">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} type="text" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">Photo URL</label>
              <input value={photo} onChange={e=>setPhoto(e.target.value)} type="text" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input value={password} onChange={e=>setPassword(e.target.value)} type={show?'text':'password'} className="input input-bordered w-full pr-12" required />
                <button type="button" className="btn btn-ghost btn-xs absolute right-2 top-1/2 -translate-y-1/2" onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
              </div>
            </div>
            <button className="btn btn-primary w-full">Register</button>
          </form>
          <div className="mt-2">
            <Link to="/login" className="link">Already have an account? Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
