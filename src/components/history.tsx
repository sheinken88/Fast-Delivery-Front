'use client'
import React, { useState } from 'react'
import type { FC } from 'react'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import PackageCard from 'commons/PackageCard'
import type IPackage from '../../interfaces/package.interface'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface DeliveredProps {
    packages: IPackage[]
}

export const History: FC<DeliveredProps> = ({ packages }) => {
    const [isVisible, setIsVisible] = useState(true)

    const sliderSettings = {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        vertical: true,
        verticalSwiping: true,
        // touchMove: false, sirve para que no se mueva el slider al deslizar
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full bg-white p-4 rounded-xl mt-2">
            <div
                className="flex justify-between items-center font-bold text-primary mb-4 cursor-pointer"
                onClick={toggleVisibility}
            >
                <h2 className="text-lg">Historial</h2>
                <IconContext.Provider
                    value={{
                        color: '#3D1DF3',
                        size: '16px',
                    }}
                >
                    {isVisible ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                </IconContext.Provider>
            </div>
            <p className="text-primary text-sm mb-2">
                {packages[0]
                    ? `${packages.length} Paquetes Entregados`
                    : 'Tus historial de envíos se verá aquí'}
            </p>
            {isVisible && (
                <div className="flex flex-col gap-4">
                    <Slider className="mb-8" {...sliderSettings}>
                        {packages?.map((pkg) => (
                            <PackageCard
                                key={pkg._id}
                                packageData={pkg}
                                showDeleteIcon={false}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    )
}
