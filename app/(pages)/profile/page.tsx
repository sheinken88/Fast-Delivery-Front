'use client'
import React from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { FaEdit } from 'react-icons/fa'
import { Button } from 'commons/generic/Button'

const Profile: React.FC = () => {
    const profileImg: string | null = null

    const user = useSelector((state: RootState) => state.users.currentUser)

    return (
        <BgLayout>
            <LayoutContainer title={'Profile'} backUrl={'/home'}>
                <p className="font-semibold mt-10 px-4 mb-4">EDITAR PERFIL</p>
                <div className="bg-gray-100 w-full h-[150px] flex items-center justify-center relative">
                    <div className="absolute top-4 right-4">
                        <FaEdit className="text-xl text-primary cursor-pointer" />
                    </div>
                    <Image
                        className="rounded-full"
                        height={64}
                        width={64}
                        alt="Profile Picture"
                        src={profileImg ?? '/empty_profile_pic.jpg'}
                    />
                </div>
                <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                    <p className="font-bold">USERNAME</p>
                    <div className="flex justify-between">
                        <p>{user?.username}</p>
                        <FaEdit className="text-xl text-primary cursor-pointer" />
                    </div>
                </div>
                <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                    <p className="font-bold">EMAIL</p>
                    <div className="flex justify-between">
                        <p>{user?.email}</p>
                        <FaEdit className="text-xl text-primary cursor-pointer" />
                    </div>
                </div>
                <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                    <p className="font-bold">PHONE</p>
                    <div className="flex justify-between">
                        <p>{user?.phone_number}</p>
                        <FaEdit className="text-xl text-primary cursor-pointer" />
                    </div>
                </div>
                <Button type="button" customStyle="mt-8 mb-4 mx-auto block">
                    Guardar
                </Button>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Profile
