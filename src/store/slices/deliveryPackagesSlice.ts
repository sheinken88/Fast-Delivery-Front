import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type IPackage from '../../../interfaces/package.interface'

export interface DeliveryPackageState {
    packages: IPackage[]
}

const initialState: DeliveryPackageState = {
    packages: [],
}

export const deliveryPackagesSlice = createSlice({
    name: 'deliveryPackages',
    initialState,
    reducers: {
        setDeliveryPackages: (state, action: PayloadAction<IPackage[]>) => {
            state.packages = action.payload
        },
    },
})

export const { setDeliveryPackages } = deliveryPackagesSlice.actions

export default deliveryPackagesSlice.reducer
