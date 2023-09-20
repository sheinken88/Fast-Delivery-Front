import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type IPackage from '../../../interfaces/package.interface'
import { type DeliveryPackageState } from './deliveryPackagesSlice'

const initialState: DeliveryPackageState = {
    packages: [],
}

export const selectedPackagesSlice = createSlice({
    name: 'selectedPackagesSlice',
    initialState,
    reducers: {
        setSelectedPackages: (state, action: PayloadAction<IPackage[]>) => {
            state.packages = action.payload
        },
    },
})

export const { setSelectedPackages } = selectedPackagesSlice.actions

export default selectedPackagesSlice.reducer
