import React, { useState } from 'react'
import type QuestionProps from '../../interfaces/props/questionProps.interface'

export const Question: React.FC<QuestionProps> = ({ index, handleClick }) => {
    const [yesIsSelected, setYesIsSelected] = useState(false)
    const [noIsSelected, setNoIselected] = useState(false)

    const questions = [
        '¿Ha consumido bebidas alcohólicas en las últimas 12 horas?',
        '¿Usted está haciendo uso de algún tipo de medicamento psicoactivo?',
        '¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga? ',
    ]

    const handleNo = () => {
        handleClick(index, false)
        setNoIselected(true)
        setYesIsSelected(false)
    }

    const handleYes = () => {
        handleClick(index, true)
        setYesIsSelected(true)
        setNoIselected(false)
    }

    return (
        <div className="border-2 rounded-lg py-4 px-4">
            <p className="text-center mb-4">{questions[index]}</p>
            <div className="flex gap-4 justify-center">
                <button
                    onClick={handleYes}
                    className={`w-24 border rounded-full border-secondary px-8 py-1 cursor-pointer ${
                        yesIsSelected ? 'bg-gray-300' : ''
                    }`}
                >
                    Sí
                </button>
                <button
                    onClick={handleNo}
                    className={`w-24 border rounded-full border-secondary px-8 py-1 cursor-pointer ${
                        noIsSelected ? 'bg-gray-300' : ''
                    }`}
                >
                    No
                </button>
            </div>
        </div>
    )
}
