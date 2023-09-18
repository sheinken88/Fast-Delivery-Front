import axios from 'axios'
import { API_URL } from 'utils/config'

export const signup = async (data: object) => {
    try {
        const newDriver = await axios.post(`${API_URL}/drivers/signup`, data)
        return newDriver.data
    } catch (error) {
        console.error('signup service error', error)
    }
}
