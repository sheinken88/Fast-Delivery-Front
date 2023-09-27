import axiosInstance from '../../interfaces/axiosInstance'
import type IPackage from '../../interfaces/package.interface'

export const addToDelivery = async (id: string, packages: IPackage[]) => {
    try {
        console.log('received packages', packages)

        await axiosInstance.put(`/orders/add-packages/${id}`, {
            packages,
        })
    } catch (error) {
        console.error('addToDelivery service error')
    }
}
