'use client'
import React, { useEffect } from 'react'
import { BgLayout } from '../../bgLayout'
import dynamic from 'next/dynamic'
import LayoutContainer from '../../layoutContainer'
import { Button } from '../../../src/commons/generic/Button'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import { editPackage } from 'services/editPackage'
import {
    deliverPackage,
    removePackage,
} from 'store/slices/currentDeliverySlice'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { cancelOrder } from 'services/cancelOrder'
import { completeOrder } from 'services/completeOrder'
import { setSelectedPackages } from 'store/slices/selectedPackageSlice'

const MapComponent = dynamic(
    async () =>
        await import('../../../src/components/map').then(
            (mod) => mod.MapComponent
        ),
    { ssr: false }
)

const CurrentDelivery = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )
    const packageInfo = currentDelivery.packages[0]

    const handlePackageDelivered = async () => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Quieres marcar este paquete como entregado?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                confirmButtonColor: '#00EA77',
                cancelButtonColor: '#3D1DF3',
            })
            if (result.isConfirmed) {
                await editPackage({ status: 'delivered' }, packageInfo._id)
                dispatch(deliverPackage(currentDelivery.packages))
            }
        } catch (error) {
            console.error('handlePackageDelivered service error', error)
        }
    }

    const handleCancelDelivery = async () => {
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
                await editPackage({ status: 'pending' }, packageInfo._id)
                dispatch(removePackage(packageInfo._id))

                if (currentDelivery.packages.length <= 1) {
                    await cancelOrder(currentDelivery._id)
                    dispatch(setSelectedPackages([]))
                    router.push('/home')
                }
            }
        } catch (error) {
            console.error('handleDeletePackage error', error)
        }
    }

    const handleFinishOrder = async () => {
        try {
            await handlePackageDelivered()
            await completeOrder(currentDelivery._id)
            dispatch(setSelectedPackages([]))
            router.push('/home')
        } catch (error) {
            console.error('handleFinishOrder service error', error)
        }
    }

    useEffect(() => {}, [])

    return (
        <BgLayout>
            <LayoutContainer title="Reparto en curso" backUrl={'/home'}>
                <div className="flex flex-col md:flex-row">
                    <div className="text-left text-sm py-2 mx-auto">
                        <MapComponent
                            address={packageInfo?.address}
                            city={packageInfo?.city}
                        />
                        <div className="py-2">
                            <strong>Destino: </strong>
                            {packageInfo?.address}, {packageInfo?.city}
                        </div>
                        <div className="py-2">
                            <strong>Número de paquete: </strong>
                            {packageInfo?._id
                                .slice(
                                    packageInfo._id.length - 5,
                                    packageInfo._id.length
                                )
                                .toUpperCase()}
                        </div>
                        <div className="py-2">
                            <strong>Recibe: </strong>
                            {packageInfo?.receiver_name}
                        </div>
                    </div>
                    {currentDelivery.packages.length > 1 ? (
                        <Button type="button" onClick={handlePackageDelivered}>
                            Entregado!
                        </Button>
                    ) : (
                        <Button type="button" onClick={handleFinishOrder}>
                            Finalizar!
                        </Button>
                    )}
                </div>
            </LayoutContainer>
            <div className="py-4">
                <Button
                    type="button"
                    customStyle="text-white bg-transparent border-secondary border"
                    onClick={handleCancelDelivery}
                >
                    Cancelar entrega
                </Button>
            </div>
        </BgLayout>
    )
}

export default CurrentDelivery
