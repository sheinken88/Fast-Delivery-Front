'use client'
import React, { useState } from 'react'
import type { FC } from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import PackageCard from 'commons/PackageCard'
import type PendingProps from '../../interfaces/props/pendingProps.interface'

export const Pending: FC<PendingProps> = ({ packages }) => {
    const [isVisible, setIsVisible] = useState(true)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full bg-white p-4 rounded-xl mb-4 mt-2">
            <div
                className="flex justify-between items-center font-bold text-primary mb-4 cursor-pointer"
                onClick={toggleVisibility}
            >
                <h2 className="text-lg">{`Repartos disponibles (${
                    packages.length ?? 0
                })`}</h2>
                {packages[0] !== null && (
                    <IconContext.Provider
                        value={{
                            color: '#3D1DF3',
                            size: '16px',
                        }}
                    >
                        {isVisible ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                    </IconContext.Provider>
                )}
            </div>
            {isVisible && (
                <div>
                    {packages[0] !== null ? (
                        <div className="flex flex-col gap-4">
                            {packages?.map((pkg) => (
                                <PackageCard
                                    key={pkg._id}
                                    packageData={pkg}
                                    showDeleteIcon={false}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>No tienes repartos pendientes</p>
                    )}
                </div>
            )}
        </div>
    )
}
