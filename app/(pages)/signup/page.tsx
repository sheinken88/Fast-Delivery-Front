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
} from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'

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
            <LayoutContainer title={'Creá tu cuenta'} backUrl={'/login'}>
                <div className="mt-20">
                    <Input
                        type="text"
                        placeholder="email@contraseña.com"
                        iconType={
                            <AiOutlineUser className="w-full h-full text-primary" />
                        }
                    />
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
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
                <Link href={'/start-shift'}>
                    <div className="mt-20 flex justify-center flex-col items-center">
                        <Button>Crear</Button>
                        <p className="text-primary mt-2 mb-2">
                            ¿Ya tenés una cuenta?
                        </p>
                    </div>
                </Link>
                <Link href="/login">
                    <div className="mb-4">
                        <Button customStyle="bg-transparent border border-secondary">
                            Iniciar sesión
                        </Button>
                    </div>
                </Link>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Signup
