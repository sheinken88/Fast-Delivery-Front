import axiosInstance from '../../interfaces/axiosInstance'

export const signup = async (data: object) => {
    try {
        const newDriver = await axiosInstance.post('/drivers/signup', data)
        return newDriver.data
    } catch (error) {
        console.error('signup service error', error)
    }
}
