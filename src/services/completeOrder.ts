import axiosInstance from '../../interfaces/axiosInstance'

export const completeOrder = async (orderId: string) => {
    try {
        const completedOrder = await axiosInstance.put(
            `/orders/complete/${orderId}`
        )
        return completedOrder.data
    } catch (error) {
        console.error('completeOrder service error')
    }
}
