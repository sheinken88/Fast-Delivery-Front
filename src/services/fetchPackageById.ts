import { API_URL } from 'utils/config'
import axios from 'axios'

export const fetchPackageById = async (_id: string) => {
    try {
        const foundPackage = await axios.get(`${API_URL}/packages/${_id}`)
        return foundPackage.data
    } catch (error) {
        console.error('fetchPackageById service error')
    }
}
