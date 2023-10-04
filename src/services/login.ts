import axios from 'axios'
import axiosInstance from '../../interfaces/axiosInstance'

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post(
            '/drivers/login',
            {
                email,
                password,
            },
            {
                withCredentials: true,
            }
        )
        const { token, user } = response.data
        localStorage.setItem('user', token)
        return user
    } catch (error) {
        console.error('login service error', error)
    }
}
