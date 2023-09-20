'use client'
import React, { useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import { Button } from 'commons/generic/Button'
import { useRouter } from 'next/navigation'
import { createOrder } from 'services/createOrder'
import { Question } from 'components/question'
import type IPackage from '../../../interfaces/package.interface'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from 'store/store'
import { setSelectedPackages } from 'store/slices/selectedPackageSlice'

interface SelectedPackages {
    selectedPackages: IPackage[]
}

const Statement: React.FC<SelectedPackages> = () => {
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
            if (isNo) newSelectedButtons[index] = true
            if (!isNo) newSelectedButtons[index] = false
            if (!newSelectedButtons.includes(false)) setCanContinue(true)
            if (newSelectedButtons.includes(false)) setCanContinue(false)

            return newSelectedButtons
        })
    }

    const handleContinue = async (): Promise<void> => {
        if (selectedButtons.every((val) => val)) {
            const order = await createOrder(selectedPackages)
            if (order !== null) router.push('/current-delivery')
            dispatch(setSelectedPackages([]))
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
