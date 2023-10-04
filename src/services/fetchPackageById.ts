import axiosInstance from '../../interfaces/axiosInstance'

export const fetchPackageById = async (_id: string) => {
    try {
        const foundPackage = await axiosInstance.get(`/packages/${_id}`)
        return foundPackage.data
    } catch (error) {
        console.error('fetchPackageById service error')
    }
}
