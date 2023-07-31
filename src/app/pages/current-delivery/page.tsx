import React from 'react'
import { BgLayout } from 'app/bgLayout'
import { MapComponent } from '../../components/map'
import LayoutContainer from '../../layoutContainer'
import { Button } from '../../commons/Button'
import Link from 'next/link'

interface Package {
    id: string
    address: string
    city: string
    quantity: number
    receiver: string
}

const CurrentDelivery = () => {
    const packageInfo: Package = {
        id: '#0A235',
        address: 'Amenabar 2356',
        city: 'CABA',
        quantity: 2,
        receiver: 'David Rodriguez',
    }

    return (
        <BgLayout>
            <LayoutContainer title="Reparto en curso">
                <div className="flex flex-col md:flex-row">
                    <div className="text-left text-sm py-2 mx-auto">
                        <MapComponent />
                        <div className="py-2">
                            <strong>Destino: </strong>
                            {packageInfo.address}, {packageInfo.city}
                        </div>
                        <div className="py-2">
                            <strong>Número de paquete: </strong>
                            {packageInfo.id}
                        </div>
                        <div className="py-2">
                            <strong>Recibe: </strong>
                            {packageInfo.receiver}
                        </div>
                    </div>
                    <Link href={'/pages/start-shift'}>
                        <Button>Finalizar</Button>
                    </Link>
                </div>
            </LayoutContainer>
            <div className="py-4">
                <Link href={'/pages/packages'}>
                    <Button customStyle="text-white bg-transparent border-secondary border">
                        Cancelar entrega
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default CurrentDelivery
