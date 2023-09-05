'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { BgLayout } from '../../bgLayout'
import LayoutContainer from '../../layoutContainer'
import { Button } from '../../../src/commons/generic/Button'
import { Input } from '../../../src/commons/generic/Input'
import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineUser,
    AiOutlineMail,
} from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import useInput from 'hooks/useInput'
import { signup } from 'services/signup'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Signup = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const username = useInput('')
    const phoneNumber = useInput('')
    const email = useInput('')
    const password = useInput('')
    const confirmPassword = useInput('')

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const [showPassword1, setShowPassword1] = useState(false)

    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword1) => !prevShowPassword1)
    }

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (!validateEmail(email.value)) {
                await Swal.fire({
                    text: 'El email debe tener formato de mail',
                    icon: 'error',
                })
                return
            }

            if (password.value !== confirmPassword.value) {
                await Swal.fire({
                    text: 'Las contraseñas deben ser iguales',
                    icon: 'error',
                })
                return
            }
            console.log('email', email.value)
            await signup({
                username: username.value,
                phone_number: phoneNumber.value,
                email: email.value,
                password: password.value,
            })
            router.push('/start-shift')
        } catch (error) {
            console.error(error)
        }
    }
    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return regex.test(email)
    }

    return (
        <BgLayout>
            <LayoutContainer title={'Creá tu cuenta'}>
                <form onSubmit={handleSignup}>
                    <div className="mt-20">
                        <Input
                            type="text"
                            placeholder="Nombre y Apellido"
                            iconType={
                                <AiOutlineUser className="w-full h-full text-primary" />
                            }
                            value={username.value}
                            onChange={username.onChange}
                        />
                        <Input
                            type="text"
                            placeholder="Teléfono"
                            iconType={
                                <FiPhone className="w-full h-full text-primary" />
                            }
                            value={phoneNumber.value}
                            onChange={phoneNumber.onChange}
                        />
                        <Input
                            type="text"
                            placeholder="email@contraseña.com"
                            iconType={
                                <AiOutlineMail className="w-full h-full text-primary" />
                            }
                            value={email.value}
                            onChange={email.onChange}
                        />
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password.value}
                            onChange={password.onChange}
                            iconType={
                                <HiOutlineLockClosed className="w-full h-full text-primary" />
                            }
                            iconTypeRight={
                                showPassword ? (
                                    <AiOutlineEye className="w-full h-full text-primary cursor-pointer" />
                                ) : (
                                    <AiOutlineEyeInvisible className="w-full h-full text-primary cursor-pointer" />
                                )
                            }
                            togglePasswordVisibility={togglePasswordVisibility}
                        />
                        <Input
                            type={showPassword1 ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword.value}
                            onChange={confirmPassword.onChange}
                            iconType={
                                <HiOutlineLockClosed className="w-full h-full text-primary" />
                            }
                            iconTypeRight={
                                showPassword1 ? (
                                    <AiOutlineEye className="w-full h-full text-primary cursor-pointer" />
                                ) : (
                                    <AiOutlineEyeInvisible className="w-full h-full text-primary cursor-pointer" />
                                )
                            }
                            togglePasswordVisibility={togglePasswordVisibility1}
                        />
                    </div>
                    {/* <Link href={'/start-shift'}> */}
                    <div className="mt-20 flex justify-center flex-col items-center">
                        <Button type="submit">Crear</Button>
                        <p className="text-primary mt-2 mb-2">
                            ¿Ya tenés una cuenta?
                        </p>
                    </div>
                    {/* </Link> */}
                    <Link href="/login">
                        <div className="mb-4">
                            <Button
                                type="submit"
                                customStyle="bg-transparent border border-secondary"
                            >
                                Iniciar sesión
                            </Button>
                        </div>
                    </Link>
                </form>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Signup
