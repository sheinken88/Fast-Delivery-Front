import axios, { type AxiosInstance } from 'axios'

let token: string | null = ''

if (typeof window !== 'undefined') {
    token = localStorage.getItem('user')
}

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    headers: {
        Authorization: token !== null ? `${token}` : undefined,
        'Content-Type': 'application/json',
    },
})

export default axiosInstance
