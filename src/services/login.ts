import axios from 'axios'
import { API_URL } from 'utils/config'

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/drivers/login`, {
            email,
            password,
        })
        localStorage.setItem('user', response.data)
        return response.data
    } catch (error) {
        console.log('login service error', error)
    }
}
