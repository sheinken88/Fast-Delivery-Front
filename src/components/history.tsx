'use client'
import React, { useState } from 'react'
import type { FC } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import PackageCard from 'commons/PackageCard'

interface Package {
    id: string
    address: string
    city: string
    status: string
}

interface DeliveredProps {
    packages: Package[]
}

export const History: FC<DeliveredProps> = ({ packages }) => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full bg-white p-4 rounded-xl">
            <div
                className="flex justify-between items-center font-bold text-primary mb-4 cursor-pointer"
                onClick={toggleVisibility}
            >
                <h2 className="text-lg">Historial de repartos</h2>
                <IconContext.Provider
                    value={{
                        color: '#3D1DF3',
                        size: '16px',
                    }}
                >
                    <BiSolidDownArrow />
                </IconContext.Provider>
            </div>
            <p className="text-primary text-sm mb-2">
                {packages.length} paquetes entregados
            </p>
            {isVisible && (
                <div className="flex flex-col gap-4">
                    {packages.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            packageData={pkg}
                            showDeleteIcon={false}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
