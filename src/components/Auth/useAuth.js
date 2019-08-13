import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      user ? setAuthUser(user) : setAuthUser(null)
    })

    return () => unsubscribe()
  }, [])

  return authUser
}
