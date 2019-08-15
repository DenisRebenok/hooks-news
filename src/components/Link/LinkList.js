import React, { useContext, useEffect } from 'react'
import { FirebaseContext } from '../../firebase'

export default function LinkList(props) {
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    getLinks()
  }, [])

  function getLinks() {
    firebase.db.collection('links').onSnapshot(handleSnapshot)
  }

  function handleSnapshot(snapshot) {
    const links = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })

    console.log({ links })
  }
  return <div>LinkList</div>
}
