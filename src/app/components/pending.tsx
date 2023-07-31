'use client'
import React, { useState, type FC } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import { PiPackageLight } from 'react-icons/pi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'

interface Package {
    id: string
    address: string
    city: string
    status: string
}

interface PendingProps {
    packages: Package[]
}

export const Pendientes: FC<PendingProps> = ({ packages }) => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full bg-white p-4 rounded-xl mb-4">
            <div
                className="flex justify-between items-center font-bold text-primary mb-4 cursor-pointer"
                onClick={toggleVisibility}
            >
                <h2 className="text-lg">Repartos pendientes</h2>
                <IconContext.Provider
                    value={{
                        color: '#3D1DF3',
                        size: '16px',
                    }}
                >
                    <BiSolidDownArrow />
                </IconContext.Provider>
            </div>
            {isVisible && (
                <div className="flex flex-col gap-4">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="flex items-center gap-4 border border-primary rounded-lg p-2"
                        >
                            <div id="cajita">
                                <IconContext.Provider
                                    value={{
                                        color: '#3D1DF3',
                                        size: '32px',
                                    }}
                                >
                                    <PiPackageLight />
                                </IconContext.Provider>
                            </div>
                            <div id="info pkg" className="flex flex-col w-full">
                                <div className="flex justify-between text-primary font-bold text-xs">
                                    <p>#{pkg.id}</p>
                                    <p className="bg-customYellow px-3 rounded-full">
                                        EN CURSO
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col mt-2 text-primary text-xs">
                                        <p>{pkg.address},</p>
                                        <p>{pkg.city}</p>
                                    </div>
                                    <IconContext.Provider
                                        value={{
                                            color: 'red',
                                            size: '16px',
                                        }}
                                    >
                                        <RiDeleteBin6Line />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
