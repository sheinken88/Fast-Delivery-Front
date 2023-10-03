import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'

export const ProfilePicture = () => {
    const user = useSelector((state: RootState) => state.users.currentUser)
    const noPic =
        'https://res.cloudinary.com/db3pcwsrm/image/upload/v1696036778/fast-delivery/assets/generic_profile_pic.png'

    const picture = user?.profile_pic ?? noPic

    return (
        <Image
            className="rounded-full"
            height={56}
            width={56}
            alt="Profile Picture"
            src={picture}
        />
    )
}
