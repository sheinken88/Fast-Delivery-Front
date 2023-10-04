'use client'
import PackageSelect from 'components/packageSelect'
import React, { useEffect, useState } from 'react'
import LayoutContainer from '../../../app/layoutContainer'
import { BgLayout } from '../../../app/bgLayout'
import { Button } from '../../../src/commons/generic/Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { setPackages } from 'store/slices/packagesSlice'
import { fetchPendingPackages } from 'services/fetchPendingPackages'
import type IPackage from '../../../interfaces/package.interface'
import { setSelectedPackages } from 'store/slices/selectedPackageSlice'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { addToDelivery } from 'services/addToDelivery'
// import { editPackage } from 'services/editPackage'

export default function Packages() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [canContinue, setCanContinue] = useState(false)
    const packages = useSelector((state: RootState) => state.packages.packages)
    const selectedPackages = useSelector(
        (state: RootState) => state.selectedPackages.packages
    )
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )

    const fetchPackages = async () => {
        const packages = await fetchPendingPackages()
        dispatch(setPackages(packages))
        dispatch(setSelectedPackages([]))
    }

    const handleSelect = (packageInfo: IPackage, isSelected: boolean): void => {
        let updatedSelectedPackages = [...selectedPackages]

        if (isSelected) {
            updatedSelectedPackages.push(packageInfo)
        } else {
            updatedSelectedPackages = updatedSelectedPackages.filter(
                (pkg) => pkg !== packageInfo
            )
        }

        dispatch(setSelectedPackages(updatedSelectedPackages))
    }
    const handleContinue = () => {
        router.push('/statement')
    }

    const handleAddToDelivery = async () => {
        try {
            const result = await Swal.fire({
                text: '¿Deseas agregarlos al pedido actual?',
                icon: 'question',
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                showCancelButton: true,
                confirmButtonColor: '#00EA77',
                cancelButtonColor: '#3D1DF3',
            })
            if (result.isConfirmed)
                await addToDelivery(currentDelivery._id, selectedPackages)
            router.push('/statement')
        } catch (error) {
            console.error('handleAddToDelivery error', error)
        }
    }

    useEffect(() => {
        void fetchPackages()
    }, [dispatch])

    useEffect(() => {
        if (selectedPackages.length > 0 && currentDelivery.packages.length <= 0)
            setCanContinue(true)
        else setCanContinue(false)
    }, [handleSelect])

    return (
        <BgLayout>
            <div className="text-center">
                <LayoutContainer title={'Obtener paquetes'} backUrl={'/home'}>
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
                <Button
                    onClick={handleContinue}
                    type="button"
                    customStyle={`mt-4 mx-auto block ${
                        !canContinue ? 'black-button' : ''
                    }`}
                    disabled={!canContinue}
                >
                    Iniciar Jornada
                </Button>
            </div>
        </BgLayout>
    )
}
