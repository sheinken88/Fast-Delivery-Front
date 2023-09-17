'use client'
import React from 'react'
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
                        <p className="font-semibold">¡Hola {user?.username}!</p>
                        <p className="text-sm">Estos son lospedidos del día</p>
                    </div>
                </div>
                <p className="font-semibold mt-10 px-4">Menu</p>
                <div className="grid grid-cols-2 gap-4 p-4 mt-6">
                    <Link href={'/profile'}>
                        <MenuBoxComponent title={'Perfil'} icon={'FaUserAlt'} />
                    </Link>
                    <Link href={'/start-shift'}>
                        <MenuBoxComponent title={'Jornada'} icon={'FaTasks'} />
                    </Link>
                    <Link href={'/packages'}>
                        <MenuBoxComponent
                            title={'Paquetes'}
                            icon={'PiPackageLight'}
                        />
                    </Link>
                    <Link href={'/current-delivery'}>
                        <MenuBoxComponent
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
