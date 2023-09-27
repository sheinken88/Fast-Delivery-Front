import axiosInstance from '../../interfaces/axiosInstance'
import type { FormValues } from '../../app/(pages)/profile/page'

export const updateUserProfile = async (
    userId: string,
    userData: FormValues
) => {
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
