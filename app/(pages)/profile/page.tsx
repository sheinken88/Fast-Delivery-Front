'use client'
import React from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { FaEdit } from 'react-icons/fa'
import { Button } from 'commons/generic/Button'
import { updateUserProfile } from 'services/updateUserProfile'
import useInput from 'hooks/useInput'
import Swal from 'sweetalert2'

export interface FormValues {
    username: string | undefined
    email: string | undefined
    phone_number: string | undefined
    profile_pic: string | undefined
}

const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.users.currentUser)
    const username = useInput(user != null ? user.username : '')
    const email = useInput(user != null ? user.email : '')
    const phoneNumber = useInput(user != null ? user.phone_number : '')
    const profilePic = useInput(user != null ? user.profile_pic : '')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const userData: FormValues = {
                username: username.value,
                email: email.value,
                phone_number: phoneNumber.value,
                profile_pic: profilePic.value,
            }
            if (user != null) {
                await updateUserProfile(user._id, userData)
                await Swal.fire({
                    text: 'Profile updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                })
            }
        } catch (error) {
            console.error('Error updating profile', error)
            await Swal.fire({
                text: 'Failed to update profile. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok',
            })
        }
    }

    return (
        <BgLayout>
            <LayoutContainer title={'Profile'} backUrl={'/home'}>
                <form onSubmit={handleSubmit}>
                    <p className="font-semibold mt-10 px-4 mb-4">
                        EDITAR PERFIL
                    </p>
                    <div className="bg-gray-100 w-full h-[150px] flex items-center justify-center relative">
                        <div className="absolute top-4 right-4">
                            <FaEdit className="text-xl text-primary cursor-pointer" />
                        </div>
                        <Image
                            className="rounded-full"
                            height={64}
                            width={64}
                            alt="Profile Picture"
                            src={
                                profilePic.value !== ''
                                    ? profilePic.value
                                    : '/generic-user.png'
                            }
                        />
                    </div>
                    <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                        <p className="font-bold">USERNAME</p>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="username"
                                value={username.value}
                                onChange={username.onChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            <FaEdit className="text-xl text-primary cursor-pointer" />
                        </div>
                    </div>
                    <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                        <p className="font-bold">EMAIL</p>
                        <div className="flex justify-between">
                            <input
                                type="email"
                                name="email"
                                value={email.value}
                                onChange={email.onChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            <FaEdit className="text-xl text-primary cursor-pointer" />
                        </div>
                    </div>
                    <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                        <p className="font-bold">PHONE</p>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="phone_number"
                                value={phoneNumber.value}
                                onChange={phoneNumber.onChange}
                                className="border rounded w-full py-2 px-3"
                            />
                            <FaEdit className="text-xl text-primary cursor-pointer" />
                        </div>
                    </div>
                    <Button type="submit" customStyle="mt-8 mb-4 mx-auto block">
                        Guardar
                    </Button>
                </form>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Profile
