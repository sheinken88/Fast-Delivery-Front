'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Capa_1.svg'
import { login } from 'services/login'

const Login = () => {
    const [email, setEmail] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            await login(email)
            console.log('Hola Mundo')
        } catch (error) {
            console.error('handleLogin error', error)
        }
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
        console.log('email', email)
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
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        id="email"
                        type="text"
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="email@contraseña.com"
                    />
                </div>
                <div className="mb-6">
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div className="flex flex-col items-center justify-between text-center">
                    {/* <Link href={'/start-shift'}> */}
                    <button
                        className="bg-secondary text-primary py-2 w-72 rounded-3xl"
                        type="submit"
                    >
                        Ingresar
                    </button>
                    {/* </Link> */}
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
