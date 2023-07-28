import React from 'react'
import Link from 'next/link'
import { BgLayout } from 'app/bgLayout'
import LayoutContainer from 'app/layoutContainer'

const Signup = () => {
    return (
        <BgLayout>
            <LayoutContainer title={'Creá tu cuenta'}>
                <div className="mb-4 mt-20">
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        id="email"
                        type="text"
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
                <div className="mb-6">
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                        id="password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="mt-20 flex justify-center flex-col items-center">
                    <button className="bg-secondary rounded-full px-4 py-2 text-primary w-72">
                        Crear cuenta
                    </button>
                    <p className="text-primary mt-2 mb-2">
                        ¿Ya tenés una cuenta?
                    </p>
                    <Link href="/login">
                        <button className="bg-secondary rounded-full px-4 py-2 mb-2 text-primary w-72">
                            Iniciar sesión
                        </button>
                    </Link>
                </div>
            </LayoutContainer>
        </BgLayout>
    )
}

export default Signup
