import axios from 'axios'

export const login = async (email: string, password: string) => {
    try {
        const apiUrl =
            process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080'
        console.log('api url:', apiUrl)

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
        const { token, user } = response.data
        localStorage.setItem('user', token)
        return user
    } catch (error) {
        console.error('login service error', error)
    }
}
