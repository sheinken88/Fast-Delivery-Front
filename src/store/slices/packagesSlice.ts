import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type IPackage from '../../../interfaces/package.interface'

export interface PackageState {
    packages: IPackage[]
}

const initialState: PackageState = {
    packages: [],
}

export const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {
        setPackages: (state, action: PayloadAction<IPackage[]>) => {
            state.packages = action.payload
        },
    },
})

export const { setPackages } = packagesSlice.actions

export default packagesSlice.reducer
