import { API_URL } from 'utils/config'
import axios from 'axios'

export const fetchCurrentDelivery = async () => {
    try {
        const currentDelivery = await axios.get(`${API_URL}/order/current`)
        return currentDelivery.data
    } catch (error) {
        console.error('fetchCurrentDelivery service error')
    }
}
