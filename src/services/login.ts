import axios from 'axios'
import { API_URL } from 'utils/config'

export const login = async (text: string) => {
    try {
        const token = await axios.post(`${API_URL}/user/secret`, {
            text,
        })
        localStorage.setItem('jwt', token.data)
    } catch (error) {
        console.log('login service error', error)
    }
}
