import React from 'react'

interface ButtonProps {
    customStyle?: string
    children: string
}

export const Button: React.FC<ButtonProps> = ({ customStyle, children }) => {
    return (
        <button
            className={`relative bg-secondary text-primary py-2 w-full rounded-3xl ${
                customStyle ?? ''
            }`}
            type="button"
            style={{
                maxWidth: '100%',
            }}
        >
            {children}
        </button>
    )
}
