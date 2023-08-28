import React from 'react'

interface ButtonProps {
    customStyle?: string
    children: string
    onClick?: () => void | Promise<void>
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    customStyle,
    children,
    onClick,
    disabled,
}) => {
    return (
        <button
            className={`relative bg-secondary text-primary py-2 w-full rounded-3xl ${
                customStyle ?? ''
            }`}
            type="button"
            style={{ maxWidth: '100%' }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
