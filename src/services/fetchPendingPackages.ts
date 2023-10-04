import axiosInstance from '../../interfaces/axiosInstance'

export const fetchPendingPackages = async () => {
    try {
        const packages = await axiosInstance.get('/packages/pending')
        return packages.data
    } catch (error) {
        console.error('fetchPendingPackages service error')
    }
}
