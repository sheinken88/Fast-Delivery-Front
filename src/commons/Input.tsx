import React from 'react'

interface InputProps {
    customStyle?: string
    placeholder: string
    type: string
    iconType: React.ReactNode
    iconTypeRight?: React.ReactNode
    togglePasswordVisibility?: () => void
    showPassword?: boolean
}

export const Input: React.FC<InputProps> = ({
    customStyle = '',
    placeholder,
    type,
    iconType,
    iconTypeRight,
    togglePasswordVisibility,
}) => {
    return (
        <div className="relative py-2">
            <input
                className={`text-primary border border-primary rounded-lg p-2 pl-10 w-full placeholder-primary ${customStyle}`}
                type={type}
                style={{
                    maxWidth: '100%',
                }}
                placeholder={placeholder}
            />
            <span className="absolute top-1/2 left-0 w-6 h-6 ml-3 transform -translate-y-1/2">
                {iconType}
            </span>
            <span
                className="absolute top-1/2 right-3 w-6 h-6 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
            >
                {iconTypeRight}
            </span>
        </div>
    )
}
