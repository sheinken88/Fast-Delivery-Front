// import { packages } from '../../fake-data/packages'
import axios from 'axios'
import { API_URL } from 'utils/config'

export const loadPackages = async () => {
    try {
        const packages = await axios.get(`${API_URL}/packages`)
        return packages.data
    } catch (error) {
        console.error('loadPackages service error')
    }
}
