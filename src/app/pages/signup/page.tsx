'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { BgLayout } from 'app/bgLayout'
import LayoutContainer from 'app/layoutContainer'
import { Button } from 'app/commons/Button'
import { Input } from 'app/commons/Input'
import { FaRegUser } from 'react-icons/fa'
import { CiLock } from 'react-icons/ci'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const [showPassword1, setShowPassword1] = useState(false)

    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevShowPassword1) => !prevShowPassword1)
    }

    return (
        <BgLayout>
            <LayoutContainer title={'Creá tu cuenta'}>
                <div className="mt-20">
                    <Input
                        type="text"
                        placeholder="email@contraseña.com"
                        iconType={
                            <FaRegUser className="w-full h-full text-primary" />
                        }
                    />
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        iconType={
                            <CiLock className="w-full h-full text-primary" />
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
                        iconType={
                            <CiLock className="w-full h-full text-primary" />
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
                <div className="mt-20 flex justify-center flex-col items-center">
                    <Button customStyle="absolute w-72">Crear</Button>
                    <p className="text-primary mt-2 mb-2">
                        ¿Ya tenés una cuenta?
                    </p>
                </div>
                <Link href="/pages/login">
                    <div className="mb-4">
                        <Button customStyle="bg-transparent border border-secondary absolute w-72">
                            Iniciar sesión
                        </Button>
                    </div>
                </Link>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Signup
