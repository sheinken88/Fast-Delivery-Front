import axiosInstance from '../../interfaces/axiosInstance'

export const fetchDeliveredPackages = async () => {
    try {
        const packages = await axiosInstance.get('/packages/delivered')
        return packages.data
    } catch (error) {
        console.error('fetchDeliveredPackages service error')
    }
}
