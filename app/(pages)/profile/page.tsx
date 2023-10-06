'use client'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../../app/layoutContainer'
import { Button } from 'commons/generic/Button'
import useInput from 'hooks/useInput'
import { updateUserProfile } from '../../../src/services/updateUserProfile'
import EditableInput from 'commons/generic/EditableInput'
import ImageUploader from 'components/ImageUploader'
import { setCurrentUser } from 'store/slices/userSlice'
import dotenv from 'dotenv'

dotenv.config()

export interface FormValues {
    username: string | undefined
    email: string | undefined
    profile_pic: string | undefined
}

const Profile: React.FC = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.users.currentUser)
    const username = useInput(
        typeof user?.username === 'string' ? user.username : ''
    )
    const email = useInput(user != null ? user.email : '')
    const [isEditing, setIsEditing] = useState(false)
    const [selectedImage, setSelectedImage] = useState(user?.profile_pic)

    const changeEditing = () => {
        setIsEditing(!isEditing)
    }

    const handleSubmit = async () => {
        if (user && selectedImage) {
            const data = new FormData()
            const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER
            const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY
            const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET
            const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME
            data.append('file', selectedImage)

            if (uploadPreset && cloudName && cloudinary_url && folder) {
                data.append('upload_preset', uploadPreset)
                data.append('cloud_name', cloudName)

                void fetch(`${cloudinary_url}${folder}`, {
                    method: 'post',
                    body: data,
                })
                    .then(async (res) => {
                        if (res.ok) return await res.json()
                    })
                    .then(async (data) => {
                        const profileUpdated = await updateUserProfile(
                            user?._id,
                            {
                                profile_pic: data.url,
                                username: username.value,
                                email: email.value,
                            }
                        )
                        dispatch(setCurrentUser(profileUpdated))
                    })
                    .then(async () => {
                        changeEditing()
                        await Swal.fire({
                            icon: 'success',
                            text: 'Subida correctamente',
                            confirmButtonText: 'Genial!',
                        })
                    })
                    .catch((error) => {
                        console.error('profile update error', error)
                    })
            }
        }
    }

    useEffect(() => {}, [isEditing])

    return (
        <BgLayout>
            <LayoutContainer title={'Profile'} backUrl={'/home'}>
                <div>
                    {!isEditing ? (
                        <div
                            className="flex justify-center items-center w-full"
                            style={{
                                backgroundColor: 'lightgrey',
                                height: 120,
                            }}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected Image"
                                className="h-20 w-20 border rounded-full"
                            />
                        </div>
                    ) : (
                        <ImageUploader
                            selectedImage={selectedImage ?? ''}
                            setSelectedImage={setSelectedImage}
                        />
                    )}
                    <EditableInput
                        name="username"
                        value={username.value}
                        isEditing={isEditing}
                        onChange={username.onChange}
                    />
                    <EditableInput
                        name="email"
                        value={email.value}
                        isEditing={isEditing}
                        onChange={email.onChange}
                    />
                    {isEditing ? (
                        <div>
                            <Button
                                type="submit"
                                customStyle="mt-8 mb-4 mx-auto font-semibold block"
                                onClick={
                                    handleSubmit as () => void | Promise<void>
                                }
                            >
                                Guardar
                            </Button>

                            <Button
                                type="button"
                                customStyle="mt-8 mb-4 mx-auto block font-bold red-button"
                                onClick={changeEditing}
                            >
                                Cancelar
                            </Button>
                        </div>
                    ) : (
                        <Button
                            type="button"
                            customStyle="mt-8 mb-4 mx-auto font-semibold block"
                            onClick={changeEditing}
                        >
                            Editar
                        </Button>
                    )}
                </div>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Profile
