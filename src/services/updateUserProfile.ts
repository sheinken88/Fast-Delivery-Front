import axiosInstance from '../../interfaces/axiosInstance'

export const updateUserProfile = async (userId: string, userData: object) => {
    try {
        const response = await axiosInstance.put(
            `/drivers/${userId}`,
            userData,
            {
                withCredentials: true,
            }
        )
        return response.data
    } catch (error) {
        console.error('updateUserProfile service error', error)
        throw error
    }
}
