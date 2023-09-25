'use client'
import React from 'react'
import { BgLayout } from '../../bgLayout'
import dynamic from 'next/dynamic'
import LayoutContainer from '../../layoutContainer'
import { Button } from '../../../src/commons/generic/Button'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { type RootState } from 'store/store'

const MapComponent = dynamic(
    async () =>
        await import('../../../src/components/map').then(
            (mod) => mod.MapComponent
        ),
    { ssr: false }
)

const CurrentDelivery = () => {
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )
    const packageInfo = currentDelivery[0]

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
                            {packageInfo?._id}
                        </div>
                        <div className="py-2">
                            <strong>Recibe: </strong>
                            {packageInfo?.receiver_name}
                        </div>
                    </div>
                    <Link href={'/start-shift'}>
                        <Button type="button">Finalizar</Button>
                    </Link>
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
