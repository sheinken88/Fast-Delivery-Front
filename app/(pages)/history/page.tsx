'use client'
import React, { useEffect, useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import { History } from '../../../src/components/history'
import type IPackage from '../../../interfaces/package.interface'
import { useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import { fetchDriverDeliveredPackages } from 'services/fetchDriverDeliveredPackages'

const HistoryPage: React.FC = () => {
    const [deliveredPackages, setDeliveredPackages] = useState<IPackage[]>([])
    const user = useSelector((state: RootState) => state.users.currentUser)

    const fetchPackages = async () => {
        try {
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
    }, [])

    return (
        <BgLayout>
            <LayoutContainer title={'Historial'} backUrl={'/home'}>
                <History packages={deliveredPackages} />
            </LayoutContainer>
        </BgLayout>
    )
}

export default HistoryPage
