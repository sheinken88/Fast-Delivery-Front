import React from 'react'
import type { FC } from 'react'
import { IconContext } from 'react-icons'
import { PiPackageLight } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder } from 'services/cancelOrder'
import { editPackage } from 'services/editPackage'
import { removePackage } from 'store/slices/currentDeliverySlice'
import { type RootState } from 'store/store'
import Swal from 'sweetalert2'

interface Package {
    _id: string
    address: string
    city: string
    status: string
}

interface PackageCardProps {
    packageData: Package
    showDeleteIcon?: boolean
}

const PackageCard: FC<PackageCardProps> = ({
    packageData,
    showDeleteIcon = true,
}) => {
    const dispatch = useDispatch()
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )

    const handleDeletePackage = async () => {
        try {
            const result = await Swal.fire({
                text: '¿Deseas eliminar el paquete del envío?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                confirmButtonColor: '#00EA77',
                cancelButtonColor: '#3D1DF3',
            })
            if (result.isConfirmed) {
                await editPackage({ status: 'pending' }, packageData._id)
                dispatch(removePackage(packageData._id))
                if (currentDelivery.packages.length === 0) {
                    const cancelledOrder = await cancelOrder(
                        currentDelivery._id
                    )
                }
            }
        } catch (error) {
            console.error('handleDeletePackage error', error)
        }
    }
    return (
        <div
            key={packageData._id}
            className="flex items-center gap-4 border border-primary rounded-lg p-2"
        >
            <div id="cajita">
                <IconContext.Provider
                    value={{
                        color: '#3D1DF3',
                        size: '32px',
                    }}
                >
                    <PiPackageLight />
                </IconContext.Provider>
            </div>
            <div id="info pkg" className="flex flex-col w-full">
                <div className="flex justify-between text-primary font-bold text-xs">
                    <p>
                        #
                        {packageData._id
                            .toUpperCase()
                            .substring(
                                packageData._id.length - 5,
                                packageData._id.length
                            )}
                    </p>
                    {packageData.status === 'en curso' ? (
                        <p className="bg-customYellow px-3 rounded-full">
                            EN CURSO
                        </p>
                    ) : packageData.status === 'pendiente' ? (
                        <p className="bg-customGreen px-3 rounded-full">
                            PENDIENTE
                        </p>
                    ) : null}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col mt-2 text-primary text-xs">
                        <p>{packageData.address},</p>
                        <p>{packageData.city}</p>
                    </div>
                    {showDeleteIcon && (
                        <IconContext.Provider
                            value={{
                                color: 'red',
                                size: '16px',
                            }}
                        >
                            <RiDeleteBin6Line onClick={handleDeletePackage} />
                        </IconContext.Provider>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PackageCard
