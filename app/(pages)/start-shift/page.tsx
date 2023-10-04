'use client'
import React, { useEffect, useState } from 'react'
import { Pending } from '../../../src/components/pending'
import { History } from '../../../src/components/history'
import { BgLayout } from '../../bgLayout'
import Link from 'next/link'
import { Button } from 'commons/generic/Button'
import { useDispatch, useSelector } from 'react-redux'
import type IPackage from '../../../interfaces/package.interface'
import { fetchPendingPackages } from 'services/fetchPendingPackages'
import { fetchDriverDeliveredPackages } from 'services/fetchDriverDeliveredPackages'
import { type RootState } from 'store/store'

const Jornada: React.FC = () => {
    // const user = useSelector((state: RootState) => state.users.currentUser)
    const dispatch = useDispatch()
    const [pendingPackages, setPendingPackages] = useState<IPackage[]>([])
    const [deliveredPackages, setDeliveredPackages] = useState<IPackage[]>([])
    const user = useSelector((state: RootState) => state.users.currentUser)

    const fetchPackages = async () => {
        try {
            const pending = await fetchPendingPackages()
            setPendingPackages(pending)
            if (user) {
                const delivered = await fetchDriverDeliveredPackages(user._id)
                setDeliveredPackages(delivered)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        void fetchPackages()
    }, [dispatch])

    return (
        <BgLayout>
            <div className="flex flex-col items-center w-full">
                <Pending packages={pendingPackages} />
                <History packages={deliveredPackages} />
                <Link href={'/packages'}>
                    <Button
                        type="button"
                        customStyle="mt-4 mx-auto block w-80 w-full"
                    >
                        Obtener Paquetes
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default Jornada
