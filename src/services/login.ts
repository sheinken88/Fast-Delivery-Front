import axios from 'axios'
import { API_URL } from 'utils/config'

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/drivers/login`, {
            email,
            password,
        })
        console.log('Response Data:', response.data)
        const { token, user } = response.data
        console.log('Token before setting:', token)
        localStorage.setItem('jwt', token)
        console.log('Token after setting:', localStorage.getItem('jwt'))

        return user
    } catch (error) {
        console.log('login service error', error)
    }
}
