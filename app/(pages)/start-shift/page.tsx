'use client'
import React, { useEffect, useState } from 'react'
import { Pending } from '../../../src/components/pending'
import { History } from '../../../src/components/history'
import { BgLayout } from '../../bgLayout'
import Link from 'next/link'
import { Button } from 'commons/generic/Button'
import { useDispatch } from 'react-redux'
import type IPackage from '../../../interfaces/package.interface'
import { fetchPendingPackages } from 'services/fetchPendingPackages'
import { fetchDeliveredPackages } from 'services/fetchDeliveredPackages'

const Jornada: React.FC = () => {
    // const user = useSelector((state: RootState) => state.users.currentUser)
    const dispatch = useDispatch()
    const [pendingPackages, setPendingPackages] = useState<IPackage[]>([])
    const [deliveredPackages, setDeliveredPackages] = useState<IPackage[]>([])

    const fetchPackages = async () => {
        try {
            const pending = await fetchPendingPackages()
            const delivered = await fetchDeliveredPackages()
            setPendingPackages(pending)
            setDeliveredPackages(delivered)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        void fetchPackages()
    }, [dispatch])

    return (
        <BgLayout>
            <div className="flex flex-col items-center">
                <Pending packages={pendingPackages} />
                <History packages={deliveredPackages} />
                <Link href={'/packages'}>
                    <Button type="button" customStyle="mt-4 mx-auto block w-80">
                        Obtener Paquetes
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default Jornada
