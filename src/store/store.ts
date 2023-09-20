import { configureStore } from '@reduxjs/toolkit'
import packagesReducer from '../store/slices/packagesSlice'
import deliveryPackagesReducer from '../store/slices/deliveryPackagesSlice'
import usersReducer from '../store/slices/usersSlice'
import selectedPackagesReducer from '../store/slices/selectedPackageSlice'

export const store = configureStore({
    reducer: {
        packages: packagesReducer,
        deliveryPackages: deliveryPackagesReducer,
        selectedPackages: selectedPackagesReducer,
        users: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
