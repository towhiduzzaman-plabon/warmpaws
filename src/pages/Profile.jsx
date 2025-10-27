import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import toast from 'react-hot-toast'

const Profile = () => {
  const { user, updateProfile } = useContext(AuthContext)
  const [editing, setEditing] = useState(false)

  if (!user) return null

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    try {
      await updateProfile(user, { displayName: name, photoURL: photo })
      toast.success('Profile updated')
      setEditing(false)
    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-3xl my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <img className="w-20 h-20 rounded-full" src={user.photoURL || 'https://i.ibb.co/4m7r5S5/user.png'} />
            <div>
              <h2 className="text-xl font-semibold">{user.displayName || 'Anonymous'}</h2>
              <p className="opacity-80">{user.email}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-outline" onClick={() => setEditing(!editing)}>Update Profile</button>
          </div>
          {editing && (
            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 mt-4">
              <input name="name" defaultValue={user.displayName || ''} className="input input-bordered" placeholder="Name" />
              <input name="photo" defaultValue={user.photoURL || ''} className="input input-bordered" placeholder="Photo URL" />
              <button className="btn btn-primary md:col-span-2">Save</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
//kfgjhfgjkjjsbjshkjshkjs