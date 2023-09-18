import React, { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { IconContext } from 'react-icons'

interface PackageInfo {
    address: string
    city: string
}

interface Props {
    packageInfo: PackageInfo
    order: number | null
    onSelect: (isSelected: boolean) => void
}

const PackageSelect: React.FC<Props> = ({ packageInfo, order, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelect = () => {
        setIsSelected(!isSelected)
        onSelect(!isSelected)
    }

    return (
        <div
            className="w-full h-full flex flex-row justify-between items-center text-primary border-primary border rounded-xl bg-white p-2"
            onClick={handleSelect}
        >
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
                    <div className="h-6 w-6 rounded-lg border-2 border-primary bg-customGreen flex items-center justify-center">
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
            <div>
                {order !== null && order !== 0 ? <span>{order}. </span> : null}
            </div>
        </div>
    )
}

export default PackageSelect
