import { API_URL } from 'utils/config'
import axios from 'axios'

export const cancelOrder = async (orderId: string) => {
    try {
        const isCancelled = await axios.put(
            `${API_URL}/orders/cancel/${orderId}`
        )
        return isCancelled.data
    } catch (error) {
        console.error('cancelOrder service error')
    }
}
