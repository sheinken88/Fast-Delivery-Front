'use client'
import React, { useEffect } from 'react'
import { Pending } from '../../../src/components/pending'
import { History } from '../../../src/components/history'
import { BgLayout } from '../../bgLayout'
import Link from 'next/link'
import { Button } from 'commons/generic/Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { setPackages } from 'store/slices/packagesSlice'
import { loadPackages } from 'services/packagesService'

export interface Package {
    id: string
    address: string
    city: string
    status: string
}

const Jornada: React.FC = () => {
    const packages = useSelector((state: RootState) => state.packages.packages)
    // const user = useSelector((state: RootState) => state.users.currentUser)
    const dispatch = useDispatch()

    const pendingPackages = packages.filter(
        (pkg) => pkg.status === 'pendiente' || pkg.status === 'en curso'
    )
    const deliveredPackages = packages.filter(
        (pkg) => pkg.status === 'entregado'
    )

    useEffect(() => {
        dispatch(setPackages(loadPackages()))
    }, [dispatch])

    return (
        <BgLayout>
            <div className="flex flex-col items-center">
                <Pending packages={pendingPackages} />
                <History packages={deliveredPackages} />
                <Link href={'/packages'}>
                    <Button customStyle="mt-4 mx-auto w-64 block ">
                        Obtener Paquetes
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}

export default Jornada
