'use client'
import React, { useEffect, useState } from 'react'
import { Pending } from '../../../src/components/pending'
import { BgLayout } from '../../bgLayout'
import { Button } from 'commons/generic/Button'
import type IPackage from '../../../interfaces/package.interface'
import { fetchPendingPackages } from 'services/fetchPendingPackages'
import { useRouter } from 'next/navigation'

const Jornada: React.FC = () => {
    const router = useRouter()
    const [pendingPackages, setPendingPackages] = useState<IPackage[]>([])

    const fetchPackages = async () => {
        try {
            const pending = await fetchPendingPackages()
            setPendingPackages(pending)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        void fetchPackages()
    }, [])

    return (
        <BgLayout>
            <div className="flex flex-col items-center">
                <Pending packages={pendingPackages} />
                <Button
                    type="button"
                    customStyle="mt-6"
                    onClick={() => {
                        router.push('/packages')
                    }}
                >
                    Obtener Paquetes
                </Button>
            </div>
        </BgLayout>
    )
}

export default Jornada
