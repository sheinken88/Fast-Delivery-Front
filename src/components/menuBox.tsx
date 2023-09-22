'use client'
import React from 'react'
import { FaUserAlt, FaTasks, FaMapMarked } from 'react-icons/fa'
import { PiPackageLight } from 'react-icons/pi'
import type MenuProps from '../../interfaces/props/menuProps.interface'

const iconMap = {
    FaUserAlt: <FaUserAlt />,
    FaTasks: <FaTasks />,
    PiPackageLight: <PiPackageLight />,
    FaMapMarked: <FaMapMarked />,
}

export const MenuBoxComponent: React.FC<MenuProps> = ({
    icon,
    title,
    isEnabled = true,
}) => {
    return (
        <button
            className={`flex items-center w-full h-12 p-4 rounded-lg shadow-md ${
                isEnabled ? 'bg-customGreen' : 'grey-button'
            }`}
            disabled={!isEnabled}
        >
            <div className="mr-4">{iconMap[icon]}</div>
            <div className="font-semibold">{title}</div>
        </button>
    )
}
