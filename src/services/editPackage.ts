import axiosInstance from '../../interfaces/axiosInstance'

export const editPackage = async (data: object, id: string) => {
    try {
        await axiosInstance.put('/packages/edit', {
            data,
            _id: id,
        })
    } catch (error) {
        console.error('editPackage service error')
    }
}
