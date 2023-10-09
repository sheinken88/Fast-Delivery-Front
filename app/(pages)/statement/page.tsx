'use client'
import React, { useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import { Button } from 'commons/generic/Button'
import { useRouter } from 'next/navigation'
import { Question } from 'components/question'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import {
    setCurrentDelivery,
    setDeliveryId,
} from 'store/slices/currentDeliverySlice'
import { createOrder } from 'services/createOrder'
import { editPackage } from 'services/editPackage'
import { createStatement } from 'services/createStatement'

const Statement: React.FC = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const selectedPackages = useSelector(
        (state: RootState) => state.selectedPackages.packages
    )

    const [selectedButtons, setSelectedButtons] = useState<boolean[]>([
        false,
        false,
        false,
    ])

    const [canContinue, setCanContinue] = useState(false)

    const handleClick = (index: number, isNo: boolean): void => {
        setSelectedButtons((prevSelectedButtons) => {
            const newSelectedButtons = [...prevSelectedButtons]
            if (isNo) newSelectedButtons[index] = false
            if (!isNo) newSelectedButtons[index] = true
            if (newSelectedButtons.includes(true)) setCanContinue(false)
            if (!newSelectedButtons.includes(false)) setCanContinue(true)

            return newSelectedButtons
        })
    }

    const handleContinue = async (): Promise<void> => {
        if (selectedButtons.every((val) => val)) {
            await createStatement(
                selectedButtons[0],
                selectedButtons[1],
                selectedButtons[2]
            )
            const order = await createOrder(selectedPackages)
            if (order !== null) router.push('/current-delivery')
            for (const p of order.packages) {
                await editPackage({ status: 'in progress' }, p._id)
            }
            dispatch(setCurrentDelivery(order.packages))
            dispatch(setDeliveryId(order._id))
        }
    }

    return (
        <BgLayout>
            <LayoutContainer title={'Declaración Jurada'} backUrl={'/login'}>
                <div className="flex flex-col gap-4 px-4 mt-4 mb-4">
                    <Question index={0} handleClick={handleClick} />
                    <Question index={1} handleClick={handleClick} />
                    <Question index={2} handleClick={handleClick} />

                    <Button
                        type="button"
                        onClick={handleContinue}
                        disabled={!canContinue}
                        customStyle={`${
                            canContinue
                                ? 'bg-secondary text-white font-bold'
                                : 'black-button'
                        } py-2 px-4 rounded`}
                    >
                        Continuar
                    </Button>
                </div>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Statement
