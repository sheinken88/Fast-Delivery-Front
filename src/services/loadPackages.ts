import axiosInstance from '../../interfaces/axiosInstance'

export const loadPackages = async () => {
    try {
        const packages = await axiosInstance.get('/packages')
        return packages.data
    } catch (error) {
        console.error('loadPackages service error')
    }
}
