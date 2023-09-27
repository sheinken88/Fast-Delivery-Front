import { API_URL } from 'utils/config'
import axios from 'axios'

export const fetchCurrentDelivery = async (driverId: string) => {
    try {
        const currentDelivery = await axios.get(
            `${API_URL}/orders/driver/current/${driverId}`
        )
        return currentDelivery.data
    } catch (error) {
        console.error('fetchCurrentDelivery service error')
    }
}
