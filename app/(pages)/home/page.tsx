'use client'
import React, { useEffect, useState } from 'react'
import { BgLayout } from '../../bgLayout'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { MenuBoxComponent } from 'components/menuBox'
import Link from 'next/link'
import type IPackage from '../../../interfaces/package.interface'
import { CurrentPackages } from 'components/currentPackages'
import { useRouter } from 'next/navigation'
import { BsArrowRight } from 'react-icons/bs'

const Home: React.FC = () => {
    const router = useRouter()
    const [isEnabled, setIsEnabled] = useState(false)
    const [pendingPackages, setPendingPackages] = useState<IPackage[]>([])
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )
    const user = useSelector((state: RootState) => state.users.currentUser)

    useEffect(() => {
        if (currentDelivery.packages.length > 0) setIsEnabled(true)
        else setIsEnabled(false)
        setPendingPackages(currentDelivery.packages)
    }, [currentDelivery])

    return (
        <BgLayout>
            <div className="text-primary font-poppins z-10 bg-customGreen rounded-lg flex flex-row items-center">
                <div
                    className="w-200 h-200 rounded-l-lg p-4 flex items-center"
                    onClick={() => {
                        router.push('/profile')
                    }}
                >
                    <Image
                        className="rounded-full"
                        height={56}
                        width={56}
                        alt="Profile Picture"
                        src={
                            user?.profile_pic
                                ? user?.profile_pic
                                : 'https://res.cloudinary.com/db3pcwsrm/image/upload/v1696036778/fast-delivery/assets/generic_profile_pic.png'
                        }
                    />
                    <div className="ml-4">
                        <p className="font-bold text-lg">
                            ¡Hola {user?.username.split(' ')[0].toString()}!
                        </p>
                        <p>Ir al perfil</p>
                    </div>
                </div>
                <div className="ml-auto pr-4">
                    <BsArrowRight size={35} />
                </div>
            </div>
            <div className="bg-white z-50 rounded-lg p-2 mt-2 w-full text-primary font-poppins">
                <div className="flex justify-center mx-auto ">
                    <div className="grid grid-cols-2 gap-10 mt-2 mb-2 p-4">
                        <Link href={'/packages'}>
                            <MenuBoxComponent
                                title={'Paquetes'}
                                icon={'PiPackageLight'}
                                isEnabled={true}
                            />
                        </Link>
                        <Link href={'/start-shift'}>
                            <MenuBoxComponent
                                title={'Jornada'}
                                icon={'FaTasks'}
                                isEnabled={true}
                            />
                        </Link>
                        <Link href={'/history'}>
                            <MenuBoxComponent
                                title={'Historial'}
                                icon={'FaHistory'}
                                isEnabled={true}
                            />
                        </Link>
                        <Link href={'/current-delivery'}>
                            <MenuBoxComponent
                                isEnabled={isEnabled}
                                title={'Viaje'}
                                icon={'FaMapMarked'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <CurrentPackages packages={pendingPackages} />
        </BgLayout>
    )
}

export default Home
