'use client'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Logo from '../public/Capa_1 (1).svg'
import type { ReactNode } from 'react'
import { TbLogout } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logoutUser } from '../src/store/slices/usersSlice'
import { logoutService } from '../src/services/logout'

interface BgLayoutProps {
    children: ReactNode
}

export const BgLayout: React.FC<BgLayoutProps> = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout = () => {
        logoutService()
        dispatch(logoutUser())
        router.push('/login')
    }

    return (
        <div className="bg-primary min-h-screen min-w-screen flex flex-col">
            <div className="flex justify-between py-3 px-4 border-b border-transparent shadow-xl lg:shadow-2xl">
                <div className="cursor-pointer">
                    <Link href={'/home'}>
                        <Image
                            src={Logo}
                            alt="Fast Delivery Logo"
                            className=""
                            width={50}
                            height={24}
                            priority
                        />
                    </Link>
                </div>

                <div
                    className="cursor-pointer border-b border-transparent shadow-xl lg:shadow-2xl"
                    onClick={handleLogout}
                >
                    <IconContext.Provider
                        value={{
                            color: 'white',
                            size: '30px',
                        }}
                    >
                        <TbLogout />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="p-10 flex-grow">{children}</div>
        </div>
    )
}

BgLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
