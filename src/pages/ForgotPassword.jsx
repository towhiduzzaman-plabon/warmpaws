import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
  const { resetPassword, rememberedEmail } = useContext(AuthContext)
  const location = useLocation()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const incoming = location.state?.email || rememberedEmail
    if (incoming) setEmail(incoming)
  }, [location.state, rememberedEmail])

  const submit = async (e) => {
    e.preventDefault()
    try {
      await resetPassword(email)
      toast.success('Password reset email sent! Redirecting to Gmail...')
      setTimeout(() => {
        window.location.href = 'https://mail.google.com'
      }, 1000)
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-md my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="label">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="input input-bordered w-full" required />
            </div>
            <button className="btn btn-primary w-full">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
