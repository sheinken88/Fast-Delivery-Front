'use client'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../app/(pages)/login/page'
import HomePage from '../app/(pages)/home/page'
import { type RootState } from 'store/store'
import { persistence } from 'services/persistence'
import { useEffect } from 'react'
import { type User, setCurrentUser } from 'store/slices/usersSlice'

export default function Home() {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.users.currentUser)

    const fetchUserByToken = async () => {
        try {
            const userToken: User = await persistence()
            if (userToken != null) {
                dispatch(setCurrentUser(userToken))
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error)
        }
    }

    useEffect(() => {
        void fetchUserByToken()
    }, [])

    if (user != null) {
        return <HomePage />
    } else return <Login />
}
