import axios from 'axios'

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080'

export const signup = async (data: object) => {
    try {
        const newDriver = await axios.post(`${apiUrl}/drivers/signup`, data)
        return newDriver.data
    } catch (error) {
        console.error('signup service error', error)
    }
}
