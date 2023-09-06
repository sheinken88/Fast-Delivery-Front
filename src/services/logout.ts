import axios from 'axios'
import { API_URL } from 'utils/config'

export const logout = async () => {
    try {
        localStorage.removeItem('user')
    } catch (error) {
        console.log('logout service error', error)
    }
}
