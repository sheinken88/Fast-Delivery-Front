'use client'
import PackageSelect from 'components/packageSelect'
import React, { useEffect, useState } from 'react'
import LayoutContainer from '../../../app/layoutContainer'
import { BgLayout } from '../../../app/bgLayout'
import { Button } from '../../../src/commons/generic/Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { setPackages } from 'store/slices/packagesSlice'
import { fetchPendingPackages } from 'services/fetchPendingPackages'

interface PackageInfo {
    address: string
    city: string
}

export default function Packages() {
    const [selectedPackages, setSelectedPackages] = useState<PackageInfo[]>([])

    const dispatch = useDispatch()
    const packages = useSelector((state: RootState) => state.packages.packages)

    const fetchPackages = async () => {
        const packages = await fetchPendingPackages()
        dispatch(setPackages(packages))
    }

    useEffect(() => {
        void fetchPackages()
    }, [dispatch])

    const handleSelect = (
        packageInfo: PackageInfo,
        isSelected: boolean
    ): void => {
        let updatedSelectedPackages = [...selectedPackages]

        if (isSelected) {
            updatedSelectedPackages.push(packageInfo)
        } else {
            updatedSelectedPackages = updatedSelectedPackages.filter(
                (pkg) => pkg !== packageInfo
            )
        }

        setSelectedPackages(updatedSelectedPackages)
    }

    return (
        <BgLayout>
            <div className="text-center">
                <LayoutContainer
                    title={'Obtener paquetes'}
                    backUrl={'/start-shift'}
                >
                    <div className="border-b-primary border-b border-dotted text-xs font-poppins p-2">
                        ¿Cuántos paquetes repartirás hoy?
                    </div>
                    <br />
                    <div className="flex flex-col gap-2 p-2 rounded-lg">
                        {packages.map((packageInfo, index) => (
                            <PackageSelect
                                key={index}
                                packageInfo={packageInfo}
                                order={
                                    selectedPackages.indexOf(packageInfo) + 1
                                }
                                onSelect={(isSelected) => {
                                    handleSelect(packageInfo, isSelected)
                                }}
                            />
                        ))}
                    </div>
                </LayoutContainer>
                <Link href={'/statement'}>
                    <Button type="button" customStyle="mt-4 mx-auto block">
                        Iniciar Jornada
                    </Button>
                </Link>
            </div>
        </BgLayout>
    )
}
