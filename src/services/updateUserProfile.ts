import axios from 'axios'
import { API_URL } from 'utils/config'
import type { FormValues } from '../../app/(pages)/profile/page'

// export const updateUserProfile = async (userId: string, userData: FormData) => {
//     try {
//         const response = await axios.put(
//             `${API_URL}/drivers/${userId}`,
//             userData,
//             {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             }
//         )
//         return response.data
//     } catch (error) {
//         console.log('updateUserProfile service error', error)
//         throw error
//     }
// }

export const updateUserProfile = async (
    userId: string,
    userData: FormValues
) => {
    console.log('updateUserProfile function called')
    try {
        const response = await axios.put(
            `${API_URL}/drivers/${userId}`,
            userData,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
    } catch (error) {
        console.log('updateUserProfile service error', error)
        throw error
    }
}
