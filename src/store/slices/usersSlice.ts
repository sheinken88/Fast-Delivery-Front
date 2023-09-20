import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { User } from '../../../fake-data/users'

export interface User {
    _id: string
    email: string
    username: string
    phone_number: string
    profile_pic: string
    status: boolean
}

export interface UserState {
    users: User[]
    currentUser: User | null
}

const initialState: UserState = {
    users: [],
    currentUser: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload
        },
        logoutUser: (state) => {
            state.currentUser = null
        },
    },
})

export const { setUsers, setCurrentUser, logoutUser } = usersSlice.actions
export default usersSlice.reducer
