import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { User } from '../../../fake-data/users'

export interface User {
    id: string
    email: string
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
    },
})

export const { setUsers, setCurrentUser } = usersSlice.actions
export default usersSlice.reducer
