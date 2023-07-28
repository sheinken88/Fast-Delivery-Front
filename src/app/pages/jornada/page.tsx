import React from 'react'
import { Pendientes } from 'app/components/pendientes'
import { Historial } from 'app/components/historial'
import { BgLayout } from 'app/bgLayout'
import Link from 'next/link'

export interface Package {
    id: string
    address: string
    city: string
    status: string
}

const Jornada: React.FC = () => {
    const packages: Package[] = [
        {
            id: 'PKG12345',
            address: 'Av. Corrientes 123',
            city: 'Buenos Aires',
            status: 'en curso',
        },
        {
            id: 'PKG98765',
            address: 'Calle Florida 456',
            city: 'Buenos Aires',
            status: 'entregado',
        },
        {
            id: 'PKG24680',
            address: 'Av. Santa Fe 789',
            city: 'Córdoba',
            status: 'pendiente',
        },
        {
            id: 'PKG13579',
            address: 'Av. Belgrano 321',
            city: 'Rosario',
            status: 'en curso',
        },
        {
            id: 'PKG86420',
            address: 'Calle Lavalle 987',
            city: 'Buenos Aires',
            status: 'pendiente',
        },
        {
            id: 'PKG64237',
            address: 'Av. 9 de Julio 753',
            city: 'Buenos Aires',
            status: 'entregado',
        },
        {
            id: 'PKG19283',
            address: 'Calle Mitre 159',
            city: 'La Plata',
            status: 'en curso',
        },
        {
            id: 'PKG37482',
            address: 'Av. San Martín 258',
            city: 'Mendoza',
            status: 'pendiente',
        },
        {
            id: 'PKG50673',
            address: 'Calle San Juan 456',
            city: 'Salta',
            status: 'entregado',
        },
        {
            id: 'PKG92073',
            address: 'Av. Rivadavia 753',
            city: 'Buenos Aires',
            status: 'en curso',
        },
    ]

    const pendingPackages = packages.filter((pkg) => pkg.status === 'pendiente')
    const deliveredPackages = packages.filter(
        (pkg) => pkg.status === 'entregado'
    )

    return (
        <BgLayout>
            <div className="flex flex-col items-center">
                <Pendientes packages={pendingPackages} />
                <Historial packages={deliveredPackages} />
                <Link href={'/packages'}>
                    <button className="bg-secondary px-6 py-1 rounded-full text-primary mt-4">
                        Obtener paquetes
                    </button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default Jornada
