'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Capa_1.svg'
import { login } from 'services/login'
import { Input } from 'commons/generic/Input'
import useInput from 'hooks/useInput'
import {
    AiOutlineUser,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../src/store/slices/usersSlice'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const email = useInput('')
    const password = useInput('')
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const user = await login(email.value, password.value)
            if (user !== null && user !== undefined) {
                dispatch(setCurrentUser(user))
                router.push('/home')
            } else {
                await Swal.fire({
                    text: 'Email y/o contraseña incorrectos',
                    icon: 'error',
                })
            }
        } catch (error) {
            console.error('handleLogin error', error)
        }
    }

    return (
        <main className="bg-primary p-20 h-screen flex flex-col justify-center items-center">
            <div className="animate-fade-down animate-once animate-ease-linear">
                <Image
                    src={Logo}
                    alt="Fast Delivery Logo"
                    className=""
                    width={300}
                    height={24}
                    priority
                />
            </div>
            <form
                onSubmit={handleLogin}
                className="rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <div className="mb-4">
                    <Input
                        customStyle="bg-primary text-white placeholder-white border-white rounded-lg"
                        placeholder="email@contraseña.com"
                        type="text"
                        iconType={
                            <AiOutlineUser className="w-full h-full text-white" />
                        }
                        value={email.value}
                        onChange={email.onChange}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        customStyle="bg-primary text-white placeholder-white border-white rounded-lg"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password.value}
                        onChange={password.onChange}
                        iconType={
                            <HiOutlineLockClosed className="w-full h-full text-white" />
                        }
                        iconTypeRight={
                            showPassword ? (
                                <AiOutlineEye className="w-full h-full text-white cursor-pointer" />
                            ) : (
                                <AiOutlineEyeInvisible className="w-full h-full text-white cursor-pointer" />
                            )
                        }
                        togglePasswordVisibility={togglePasswordVisibility}
                    />
                    {/* <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        id="password"
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Password"
                    /> */}
                </div>
                <div className="flex flex-col items-center justify-between text-center">
                    <button
                        className="bg-secondary text-primary py-2 w-72 rounded-3xl"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    <Link href={'/signup'}>
                        <button
                            className="border-2 border-secondary text-white whitespace-nowrap	 py-2 w-72 rounded-3xl mt-4"
                            type="button"
                        >
                            Crear cuenta
                        </button>
                    </Link>
                    <a href="" className="text-white font-extralight mt-4">
                        OLVIDÉ MI CONTRASEÑA
                    </a>
                </div>
            </form>
        </main>
    )
}

export default Login
