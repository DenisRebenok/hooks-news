import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../firebase'
import LinkItem from './LinkItem'

export default function LinkList(props) {
  const { firebase } = useContext(FirebaseContext)
  const [links, setLinks] = useState([])
  const isTopPage = props.location.pathname.includes('top')

  useEffect(() => {
    const unsubscribe = getLinks()
    return () => unsubscribe()
  }, [isTopPage])

  function getLinks() {
    return firebase.db
      .collection('links')
      .orderBy(isTopPage ? 'voteCount' : 'created', 'desc')
      .onSnapshot(handleSnapshot)
  }

  function handleSnapshot(snapshot) {
    const links = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })

    setLinks(links)
  }

  return (
    <div>
      {links.map((link, index) => (
        <LinkItem
          key={link.id}
          showCount={true}
          link={link}
          index={index + 1}
        />
      ))}
    </div>
  )
}
