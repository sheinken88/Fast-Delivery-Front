import axios from 'axios'
import { API_URL } from 'utils/config'

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(
            `${API_URL}/drivers/login`,
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
