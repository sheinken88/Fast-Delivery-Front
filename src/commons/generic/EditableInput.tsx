import React from 'react'
import type { ChangeEvent, FC } from 'react'

interface EditableInputProps {
    name: string
    value: string
    isEditing: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const EditableInput: FC<EditableInputProps> = ({
    name,
    value,
    isEditing,
    onChange,
}) => {
    return (
        <div className={'mt-4 border-b border-b-gray-200 pb-4 px-4'}>
            <p className="font-bold">{name.toUpperCase()}</p>
            <div className="flex justify-between">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!isEditing}
                    className={`border rounded w-full py-2 px-3 ${
                        !isEditing ? 'grey-button' : ''
                    }`}
                />
            </div>
        </div>
    )
}

export default EditableInput
