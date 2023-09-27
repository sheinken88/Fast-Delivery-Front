import type IPackage from '../../interfaces/package.interface'
import axiosInstance from '../../interfaces/axiosInstance'

export const createOrder = async (packages: IPackage[]) => {
    try {
        const driver = localStorage.getItem('user')
        const idPackages = getPackagesId(packages)
        const createdOrder = await axiosInstance.post('/orders/', {
            driverToken: driver,
            idPackages,
        })
        return createdOrder.data
    } catch (error) {
        console.error('createOrder service error')
    }
}

const getPackagesId = (list: IPackage[]) => {
    const idPackages = []
    for (const p of list) {
        idPackages.push(p._id)
    }
    return idPackages
}
