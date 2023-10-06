import axiosInstance from '../../interfaces/axiosInstance'
import { formatDateService } from './formatDate'

interface IStatement {
    consumedAlcohol: boolean
    usingPsychoactiveMedication: boolean
    havingEmotionalIssues: boolean
    date: string
}

export const createStatement = async (
    q1: boolean,
    q2: boolean,
    q3: boolean
) => {
    try {
        const date = new Date()
        const token = localStorage.getItem('user')
        const sentStatement: IStatement = {
            consumedAlcohol: q1,
            usingPsychoactiveMedication: q2,
            havingEmotionalIssues: q3,
            date: formatDateService(date),
        }
        const createdStatement = await axiosInstance.post(
            '/statements/create',
            { token, statement: sentStatement }
        )
        return createdStatement
    } catch (error) {
        console.error('createStatement service error')
    }
}
