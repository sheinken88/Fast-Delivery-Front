import { configureStore } from '@reduxjs/toolkit'
import packagesReducer from '../store/slices/packagesSlice'
import deliveryPackagesReducer from '../store/slices/deliveryPackagesSlice'
import usersReducer from '../store/slices/usersSlice'
import selectedPackagesReducer from '../store/slices/selectedPackageSlice'
import currentDeliveryReducer from './slices/currentDeliverySlice'

export const store = configureStore({
    reducer: {
        packages: packagesReducer,
        deliveryPackages: deliveryPackagesReducer,
        selectedPackages: selectedPackagesReducer,
        currentDelivery: currentDeliveryReducer,
        users: usersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
