import axiosInstance from '../../interfaces/axiosInstance'

export const fetchCurrentDelivery = async (driverId: string) => {
    console.log('driver ID:', driverId)
    try {
        const currentDelivery = await axiosInstance.get(
            `/orders/driver/current/${driverId}`
        )
        return currentDelivery.data
    } catch (error) {
        console.error('fetchCurrentDelivery service error')
    }
}
