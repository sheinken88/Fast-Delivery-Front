'use client'
import React, { use, useEffect } from 'react'
import { BgLayout } from '../../bgLayout'
import dynamic from 'next/dynamic'
import LayoutContainer from '../../layoutContainer'
import { Button } from '../../../src/commons/generic/Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import { editPackage } from 'services/editPackage'
import { deliverPackage } from 'store/slices/currentDeliverySlice'
import { useRouter } from 'next/navigation'

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
    const packageInfo = currentDelivery[0]

    const handlePackageDelivered = async () => {
        try {
            await editPackage({ status: 'delivered' }, packageInfo._id)
            dispatch(deliverPackage(currentDelivery))
        } catch (error) {
            console.error('handlePackageDelivered service error')
        }
    }

    const handleFinishOrder = async () => {
        try {
            await handlePackageDelivered()
            router.push('/home')
        } catch (error) {
            console.error('handleFinishOrder service error')
        }
    }

    return (
        <BgLayout>
            <LayoutContainer title="Reparto en curso" backUrl={'/packages'}>
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
                            {packageInfo?._id.slice(0, 5)}
                        </div>
                        <div className="py-2">
                            <strong>Recibe: </strong>
                            {packageInfo?.receiver_name}
                        </div>
                    </div>
                    {currentDelivery.length > 1 ? (
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
                <Link href={'/packages'}>
                    <Button
                        type="button"
                        customStyle="text-white bg-transparent border-secondary border"
                    >
                        Cancelar entrega
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default CurrentDelivery
