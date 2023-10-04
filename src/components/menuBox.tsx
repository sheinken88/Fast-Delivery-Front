'use client'
import React from 'react'
import { FaHistory, FaTasks, FaMapMarked } from 'react-icons/fa'
import { PiPackageLight } from 'react-icons/pi'
import type MenuProps from '../../interfaces/props/menuProps.interface'

const iconMap = {
    FaHistory: <FaHistory size={24} />,
    FaTasks: <FaTasks size={24} />,
    PiPackageLight: <PiPackageLight size={30} />,
    FaMapMarked: <FaMapMarked size={24} />,
}

export const MenuBoxComponent: React.FC<MenuProps> = ({
    icon,
    title,
    isEnabled,
}) => {
    return (
        <button
            className={`flex flex-col items-center w-full h-12 p-4 rounded-lg shadow-md ${
                isEnabled ? 'bg-customGreen' : 'grey-button'
            }`}
            style={{ height: '100px', width: '100px' }}
            disabled={isEnabled === null ? true : !isEnabled}
        >
            <div className="mt-2">{iconMap[icon]}</div>
            <div className="font-semibold mt-2">{title}</div>
        </button>
    )
}
