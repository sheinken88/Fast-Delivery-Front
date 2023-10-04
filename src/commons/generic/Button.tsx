import React from 'react'

interface ButtonProps {
    customStyle?: string
    children: string
    onClick?: () => void | Promise<void>
    disabled?: boolean
    type: string
}

export const Button: React.FC<ButtonProps> = ({
    customStyle,
    children,
    onClick,
    disabled,
    type,
}) => {
    return (
        <button
            className={`relative py-2 w-full rounded-3xl bg-secondary text-primary ${
                customStyle ?? ''
            }`}
            type={type === 'button' ? 'button' : 'submit'}
            style={{ maxWidth: '100%' }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
