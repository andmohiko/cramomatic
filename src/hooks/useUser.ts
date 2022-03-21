import { useState, useEffect } from 'react'
import { collection, doc, query, orderBy, Firestore, DocumentData, Timestamp } from 'firebase/firestore'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { User, UserId } from '../entities'
import { convertDate } from '../utils/date'

const UsersCollection = 'users'

export const useFetchUserById = (db: Firestore, userId: UserId) => {
  const [user, setUser] = useState<User>()
  const [value, loading, error] = useDocument(doc(db, UsersCollection, userId))

  useEffect(() => {
    if (!value) return
    setUser(userFactory(value))
  }, [value])

  return user
}

const userFactory = (doc: DocumentData): User | undefined => {
  const data = doc.data()
  if (!data) return

  return {
    userId: doc.id,
    createdAt: convertDate(data.createdAt),
    updatedAt: convertDate(data.updatedAt),
    username: data.username
  }
}
