import axios from 'axios'

interface IStatement {
    consumedAlcohol: boolean
    usingPsychoactiveMedication: boolean
    havingEmotionalIssues: boolean
    date: string
}

interface IUser {
    _id: string
    username: string
    email: string
    password: string
    phone_number: string
    status: boolean
    profile_pic: string
    statements: IStatement[]
}

export const login = async (
    email: string,
    password: string
): Promise<IUser> => {
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
    const user: IUser = response.data.user
    const token = response.data.token
    if (token !== undefined) {
        localStorage.setItem('user', token)
    }
    return user
}
