'use client'
import React from 'react'
import { FaUserAlt, FaTasks, FaMapMarked } from 'react-icons/fa'
import { PiPackageLight } from 'react-icons/pi'

const iconMap = {
    FaUserAlt: <FaUserAlt />,
    FaTasks: <FaTasks />,
    PiPackageLight: <PiPackageLight />,
    FaMapMarked: <FaMapMarked />,
}

interface Props {
    title: string
    icon: 'FaUserAlt' | 'FaTasks' | 'PiPackageLight' | 'FaMapMarked'
}

export const MenuBoxComponent: React.FC<Props> = ({ icon, title }) => {
    return (
        <div className="flex items-center p-4 bg-customGreen rounded-lg shadow-md">
            <div className="mr-4">{iconMap[icon]}</div>
            <div className="font-semibold">{title}</div>
        </div>
    )
}