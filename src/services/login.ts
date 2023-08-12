import axios from 'axios'
import { API_URL } from 'utils/config'

export const login = async (text: string) => {
    try {
        await axios.post(`${API_URL}/user/secret`, {
            text,
        })
    } catch (error) {
        console.log('login service error', error)
    }
}
