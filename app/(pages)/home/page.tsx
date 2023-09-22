'use client'
import React, { useEffect, useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { MenuBoxComponent } from 'components/menuBox'
import Link from 'next/link'

const Home: React.FC = () => {
    const profileImg: string | null = null

    const user = useSelector((state: RootState) => state.users.currentUser)
    const currentDelivery = useSelector(
        (state: RootState) => state.currentDelivery
    )
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        if (currentDelivery[0]) setIsEnabled(true)
        else setIsEnabled(false)
    }, [])

    return (
        <BgLayout>
            <LayoutContainer title={'Home'} backUrl={'/login'}>
                <div className="flex items-center">
                    <Image
                        className="rounded-full"
                        height={56}
                        width={56}
                        alt="Profile Picture"
                        src={profileImg ?? '/empty_profile_pic.jpg'}
                    />
                    <div className="flex flex-col ml-4">
                        <p className="font-semibold">
                            ¡Hola {user?.username.split(' ')[0].toString()}!
                        </p>
                        <p className="text-sm">Estos son los pedidos del día</p>
                    </div>
                </div>
                <p className="font-semibold mt-10 px-4">Menu</p>
                <div className="grid grid-cols-2 gap-4 p-4 mt-6">
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
                            title={'En Curso'}
                            icon={'FaMapMarked'}
                        />
                    </Link>
                </div>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Home
