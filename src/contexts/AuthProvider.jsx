import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rememberedEmail, setRememberedEmail] = useState('')

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, current => {
      setUser(current)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const login = (email, password) => {
    setRememberedEmail(email)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const signup = (email, password, name, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      return updateProfile(user, { displayName: name, photoURL })
    })
  }

  const logout = () => signOut(auth)

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  const value = { user, loading, login, loginWithGoogle, signup, logout, updateProfile, resetPassword, rememberedEmail, setRememberedEmail }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
