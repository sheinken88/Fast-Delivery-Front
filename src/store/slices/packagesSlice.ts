import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Package } from '../../../fake-data/packages'

export interface PackageState {
    packages: Package[]
}

const initialState: PackageState = {
    packages: [],
}

export const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        setPackages: (state, action: PayloadAction<Package[]>) => {
            state.packages = action.payload
        },
    },
})

export const { setPackages } = packagesSlice.actions

export default packagesSlice.reducer
