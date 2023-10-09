import axios from 'axios'
import type IDriver from '../../interfaces/IDriver'

export const login = async (
    email: string,
    password: string
): Promise<IDriver> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080'

    const response = await axios.post(
        `${apiUrl}/drivers/login`,
        {
            email,
            password,
        },
        {
            withCredentials: true,
        }
    )
    const user: IDriver = response.data.user
    const token = response.data.token
    if (token !== undefined) {
        localStorage.setItem('user', token)
    }

    return user
}
