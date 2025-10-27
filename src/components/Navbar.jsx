import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
//lovelovelove
const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

  const navLinkClass = ({ isActive }) => isActive ? 'text-primary font-semibold' : 'hover:text-primary'

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/profile" className={navLinkClass}>My Profile</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl gap-2">
          <img src="/paw.png" alt="logo" className="w-6 h-6" />
          WarmPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
          <li><NavLink to="/profile" className={navLinkClass}>My Profile</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
              <div className="avatar placeholder">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || 'https://i.ibb.co/4m7r5S5/user.png'} alt="avatar" />
                </div>
              </div>
            </div>
            <button onClick={logout} className="btn btn-outline btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/signup" className="btn btn-primary btn-sm">Register</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
