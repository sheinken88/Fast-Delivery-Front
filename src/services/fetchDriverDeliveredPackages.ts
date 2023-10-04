import axiosInstance from '../../interfaces/axiosInstance'

export const fetchDriverDeliveredPackages = async (driverId: string) => {
    try {
        if (driverId) {
            const packages = await axiosInstance.get(
                `/orders/delivered/${driverId}`
            )
            return packages.data
        }
    } catch (error) {
        console.error('fetchDriverDeliveredPackages service error')
    }
}
