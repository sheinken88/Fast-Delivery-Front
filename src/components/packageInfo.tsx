import React, { useState } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { IconContext } from 'react-icons'

interface PackageInfo {
    address: string
    city: string
    quantity: number
}

interface Props {
    packageInfo: PackageInfo
}

const PackageCard: React.FC<Props> = ({ packageInfo }) => {
    const [quantity, setQuantity] = useState(0)
    const [isSelected, setIsSelected] = useState(false)

    const handleQuantityPlus = () => {
        if (quantity < packageInfo.quantity) setQuantity(quantity + 1)
    }

    const handleQuantityLess = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    const handleSelect = () => {
        setIsSelected(!isSelected)
    }

    return (
        <div className="w-full h-full flex flex-row justify-between items-center text-primary border-primary border rounded-xl bg-white p-2">
            <div className="p-2">
                {!isSelected ? (
                    <div
                        className="h-6 w-6 rounded-lg border-2 border-primary flex items-center justify-center text-white text-9xl"
                        onClick={handleSelect}
                    >
                        <IconContext.Provider value={{ className: 'icon' }}>
                            <BsCheckLg />
                        </IconContext.Provider>
                    </div>
                ) : (
                    <div
                        className="h-6 w-6 rounded-lg border-2 border-primary bg-customGreen flex items-center justify-center"
                        onClick={handleSelect}
                    >
                        <IconContext.Provider value={{ className: 'icon' }}>
                            <BsCheckLg />
                        </IconContext.Provider>
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 font-poppins text-left text-xs">
                {packageInfo.address},
                <br />
                {packageInfo.city}
            </div>
            <div className="flex items-center px-2 py-1 text-primary border-primary border rounded-xl space-x-2">
                <div className="w-14 h-full flex items-center justify-between">
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <div
                            onClick={handleQuantityLess}
                            className="cursor-pointer"
                        >
                            <AiOutlineMinusCircle />
                        </div>
                        <div>{quantity}</div>
                        <div
                            onClick={handleQuantityPlus}
                            className="cursor-pointer"
                        >
                            <AiOutlinePlusCircle />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default PackageCard
