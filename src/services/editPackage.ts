import { API_URL } from 'utils/config'
import axios from 'axios'

export const editPackage = async (data: object, id: string) => {
    try {
        await axios.put(`${API_URL}/packages/edit`, {
            data,
            _id: id,
        })
    } catch (error) {
        console.error('editPackage service error')
    }
}
