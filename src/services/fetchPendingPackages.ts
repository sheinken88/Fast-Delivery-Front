import { API_URL } from 'utils/config'
import axios from 'axios'

export const fetchPendingPackages = async () => {
    try {
        const packages = await axios.get(`${API_URL}/packages/pending`)
        return packages.data
    } catch (error) {
        console.error('fetchPendingPackages service error')
    }
}
