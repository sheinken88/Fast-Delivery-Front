import axiosInstance from '../../interfaces/axiosInstance'

export const completedDay = async (id: string) => {
    try {
        const isCompleted = await axiosInstance.get(`/orders/completed/${id}`)
        return isCompleted.data
    } catch (error) {
        console.error('cancelOrder service error')
    }
}
