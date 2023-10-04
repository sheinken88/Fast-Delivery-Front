import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type IPackage from '../../../interfaces/package.interface'

interface CurrentOrder {
    _id: string
    packages: IPackage[]
}

const initialState: CurrentOrder = {
    _id: '',
    packages: [],
}

const currentDeliverySlice = createSlice({
    name: 'currentDelivery',
    initialState,
    reducers: {
        setCurrentDelivery: (state, action: PayloadAction<IPackage[]>) => {
            state.packages = action.payload
        },
        setDeliveryId: (state, action: PayloadAction<string>) => {
            state._id = action.payload
        },
        deliverPackage: (state, action: PayloadAction<IPackage[]>) => {
            if (state.packages.length > 0) {
                state.packages = state.packages.slice(1)
            }
        },
        removePackage: (state, action: PayloadAction<string>) => {
            const idToRemove = action.payload
            state.packages = state.packages.filter((p) => p._id !== idToRemove)
        },
    },
})

export const {
    setCurrentDelivery,
    setDeliveryId,
    deliverPackage,
    removePackage,
} = currentDeliverySlice.actions

export default currentDeliverySlice.reducer
