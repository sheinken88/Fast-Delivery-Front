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

const Home: React.FC = () => {
    const profileImg: string | null = null
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
            <div className="text-primary font-poppins z-10 bg-customGreen rounded-lg flex flex-col items-center">
                <div className="flex justify-center w-200 h-200 rounded-t-lg py-4 ">
                    <Image
                        className="rounded-full"
                        height={56}
                        width={56}
                        alt="Profile Picture"
                        src={profileImg ?? '/empty_profile_pic.jpg'}
                    />
                    <div className="flex flex-col ml-4 mt-1">
                        <p className="font-semibold">
                            ¡Hola {user?.username.split(' ')[0].toString()}!
                        </p>
                        <p className="text-sm">¡Bienvenido a Fast Delivery!</p>
                    </div>
                </div>
            </div>
            <div className="bg-white z-50 rounded-lg p-2 mt-2 w-full text-primary font-poppins">
                <div className="flex justify-center mx-auto ">
                    <div className="grid grid-cols-2 gap-10 mt-2 mb-2 p-4">
                        <Link href={'/profile'}>
                            <MenuBoxComponent
                                title={'Perfil'}
                                icon={'FaUserAlt'}
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
                        <Link href={'/packages'}>
                            <MenuBoxComponent
                                title={'Paquetes'}
                                icon={'PiPackageLight'}
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

// <div className="text-primary font-poppins z-10 bg-customGreen rounded-lg flex flex-col items-center">
//     <div className="flex justify-center w-200 h-200 rounded-t-lg py-4">
//         <Image
//             className="rounded-full"
//             height={56}
//             width={56}
//             alt="Profile Picture"
//             src={profileImg ?? '/empty_profile_pic.jpg'}
//         />
//         <div className="flex flex-col ml-4 mt-2">
//             <p className="font-semibold">
//                 ¡Hola {user?.username.split(' ')[0].toString()}!
//             </p>
//             <p className="text-sm">¡Bienvenido a Fast Delivery!</p>
//         </div>
//     </div>
//     <div className="bg-white z-50 rounded-lg p-2 mt-2 w-full">
//         <div className="flex justify-center mx-auto mt-6">
//             <div className="grid grid-cols-2 gap-12 p-4">
//                 <Link href={'/profile'}>
//                     <MenuBoxComponent
//                         title={'Perfil'}
//                         icon={'FaUserAlt'}
//                         isEnabled={true}
//                     />
//                 </Link>
//                 <Link href={'/start-shift'}>
//                     <MenuBoxComponent
//                         title={'Jornada'}
//                         icon={'FaTasks'}
//                         isEnabled={true}
//                     />
//                 </Link>
//                 <Link href={'/packages'}>
//                     <MenuBoxComponent
//                         title={'Paquetes'}
//                         icon={'PiPackageLight'}
//                         isEnabled={true}
//                     />
//                 </Link>
//                 <Link href={'/current-delivery'}>
//                     <MenuBoxComponent
//                         isEnabled={isEnabled}
//                         title={'Viaje'}
//                         icon={'FaMapMarked'}
//                     />
//                 </Link>
//             </div>
//         </div>
//     </div>
// </div>
