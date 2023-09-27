import { API_URL } from 'utils/config'
import axios from 'axios'

export const completeOrder = async (orderId: string) => {
    try {
        const completedOrder = await axios.put(
            `${API_URL}/orders/complete/${orderId}`
        )
        return completedOrder.data
    } catch (error) {
        console.error('completeOrder service error')
    }
}
