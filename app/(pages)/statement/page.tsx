'use client'
import React, { useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import { Button } from 'commons/generic/Button'
import { useRouter } from 'next/navigation'

const Statement: React.FC = () => {
    const [selectedButtons, setSelectedButtons] = useState<boolean[]>([
        false,
        false,
        false,
    ])
    const router = useRouter()

    const handleClick = (index: number): void => {
        const newSelectedButtons = [...selectedButtons]
        newSelectedButtons[index] = true
        setSelectedButtons(newSelectedButtons)
    }

    const handleContinue = async (): Promise<void> => {
        if (selectedButtons.every((val) => val)) {
            router.push('/start-shift')
        }
    }

    const questions = [
        '¿Ha consumido bebidas alcohólicas en las últimas 12 horas?',
        '¿Usted está haciendo uso de algún tipo de medicamento psicoactivo?',
        '¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga? ',
    ]

    return (
        <BgLayout>
            <LayoutContainer title={'Declaración Jurada'}>
                <div className="flex flex-col gap-4 px-4 mt-4">
                    {questions.map((question, index) => (
                        <div
                            className="border-2 rounded-lg py-4 px-4"
                            key={index}
                        >
                            <p className="text-center mb-4">{question}</p>
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        handleClick(index)
                                    }}
                                    className={`w-24 border rounded-full border-secondary px-8 py-1 cursor-pointer ${
                                        selectedButtons[index]
                                            ? 'bg-gray-300'
                                            : ''
                                    }`}
                                >
                                    Sí
                                </button>
                                <button className="w-24 border rounded-full border-secondary px-8 py-1 cursor-pointer">
                                    No
                                </button>
                            </div>
                        </div>
                    ))}
                    <Button
                        onClick={handleContinue}
                        disabled={!selectedButtons.every((val) => val)}
                    >
                        Continuar
                    </Button>
                </div>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Statement
