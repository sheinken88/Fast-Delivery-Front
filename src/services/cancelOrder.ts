import axiosInstance from '../../interfaces/axiosInstance'

export const cancelOrder = async (orderId: string) => {
    try {
        const isCancelled = await axiosInstance.put(`/orders/cancel/${orderId}`)
        return isCancelled.data
    } catch (error) {
        console.error('cancelOrder service error')
    }
}
