'use client'
import React, { useState } from 'react'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { FaEdit } from 'react-icons/fa'
import { Button } from 'commons/generic/Button'
import { updateUserProfile } from 'services/updateUserProfile'

export interface FormValues {
    username: string | null
    email: string | null
    phone_number: string | null
}

const Profile: React.FC = () => {
    const profileImg: string | null = null
    const user = useSelector((state: RootState) => state.users.currentUser)
    console.log('user: ', user)

    const [formValues, setFormValues] = useState<FormValues>({
        username: user?.username ?? '',
        email: user?.email ?? '',
        phone_number: user?.phone_number ?? '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        console.log('handleFormSubmit called')
        console.log('Form submitted with values: ', formValues)

        e.preventDefault()
        console.log('user._id value:', user?._id)

        if (user?._id !== undefined) {
            console.log(
                'User ID is defined, attempting to call updateUserProfile'
            )

            try {
                await updateUserProfile(user._id, formValues)
                alert('Profile updated successfully!')
            } catch (error) {
                console.error('Error updating profile', error)
                alert('Failed to update profile. Please try again later.')
            }
        }
    }

    return (
        <BgLayout>
            <LayoutContainer title={'Profile'} backUrl={'/home'}>
                <form onSubmit={handleFormSubmit}>
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
                            src={profileImg ?? '/empty_profile_pic.jpg'}
                        />
                    </div>
                    <div className="mt-4 border-b border-b-gray-200 pb-4 px-4">
                        <p className="font-bold">USERNAME</p>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                name="username"
                                value={
                                    formValues.username ?? user?.username ?? ''
                                }
                                onChange={handleInputChange}
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
                                value={formValues.email ?? user?.email ?? ''}
                                onChange={handleInputChange}
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
                                value={
                                    formValues.phone_number ??
                                    user?.phone_number ??
                                    ''
                                }
                                onChange={handleInputChange}
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
