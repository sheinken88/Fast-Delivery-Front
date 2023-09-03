import { configureStore } from '@reduxjs/toolkit'
import packagesReducer from '../store/slices/packagesSlice'
import usersReducer from '../store/slices/usersSlice'

export const store = configureStore({
    reducer: {
        packages: packagesReducer,
        users: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
