import axios from 'axios'
import { API_URL } from 'utils/config'

export const persistence = async () => {
    try {
        const token: string | null = localStorage.getItem('user')

        if (token === null) return null

        const response = await axios.post(`${API_URL}/drivers/secret`, {
            tokenData: token,
        })

        return response.data.user
    } catch (error) {
        console.error('Persistence service error', error)
    }
}
