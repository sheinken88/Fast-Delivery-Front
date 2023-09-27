'use client'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import { persistence } from 'services/persistence'
import { useEffect } from 'react'
import { type User, setCurrentUser } from 'store/slices/usersSlice'
import { useRouter } from 'next/navigation'

export default function Home() {
    const dispatch = useDispatch()
    const router = useRouter()
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
        const token = localStorage.getItem('user')
        if (token !== null) {
            void fetchUserByToken()
            router.push('/home')
        } else router.push('/login')
    }, [])
}
