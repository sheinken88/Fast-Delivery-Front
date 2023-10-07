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
import { completedDay } from 'services/completedDay'
import Swal from 'sweetalert2'

export default function Packages() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [canContinue, setCanContinue] = useState(false)
    const [totalPackages, setTotalPackages] = useState(0)
    const packages = useSelector((state: RootState) => state.packages.packages)
    const driver = useSelector((state: RootState) => state.users.currentUser)
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

    const fetchCompletedDay = async () => {
        try {
            if (driver !== null) {
                const isCompleted = await completedDay(driver._id)

                if (isCompleted.count >= 10) {
                    await Swal.fire({
                        text: 'Ya ocupaste tus 10 paquetes diarios, mañana podras entregar más. ¡Buen trabajo!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                    router.push('/home')
                } else {
                    setTotalPackages(isCompleted.count)
                }
            }
        } catch (error) {
            console.error('fetchCompletedDay error')
        }
    }

    useEffect(() => {
        void fetchCompletedDay()
        void fetchPackages()
    }, [])

    useEffect(() => {
        if (
            selectedPackages.length > 0 &&
            currentDelivery.packages.length <= 0 &&
            selectedPackages.length + totalPackages <= 10
        )
            setCanContinue(true)
        else setCanContinue(false)
    }, [handleSelect])

    return (
        <BgLayout>
            <div className="text-center">
                <LayoutContainer title={'Obtener paquetes'} backUrl={'/home'}>
                    <div className="border-b-primary border-b border-dotted text-xs font-poppins p-2">
                        ¿Cuántos paquetes repartirás hoy?
                        <p>
                            recuerda que solo puedes repartir un máximo de 10
                            paquetes diarios
                        </p>
                        <p>¡Mucha suerte!</p>
                    </div>
                    <br />
                    <p className="mb-4">
                        Paquetes restantes por entregar: {10 - totalPackages}
                    </p>
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
