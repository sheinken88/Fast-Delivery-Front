import axios from 'axios'
import { API_URL } from 'utils/config'

export const logout = async () => {
    try {
        const token = await axios.post(`${API_URL}/driver/logout`)
        console.log('logout response', token)
    } catch (error) {
        console.log('logout service error', error)
    }
}
