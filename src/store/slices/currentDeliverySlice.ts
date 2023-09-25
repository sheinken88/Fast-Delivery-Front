import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type IPackage from '../../../interfaces/package.interface'

const initialState: IPackage[] = []

const currentDeliverySlice = createSlice({
    name: 'currentDelivery',
    initialState,
    reducers: {
        setCurrentDelivery: (state, action: PayloadAction<IPackage[]>) => {
            return action.payload
        },
        deliverPackage: (state, action: PayloadAction<IPackage[]>) => {
            if (state.length > 0) {
                return state.slice(1)
            }
            return state
        },
    },
})

export const { setCurrentDelivery, deliverPackage } =
    currentDeliverySlice.actions

export default currentDeliverySlice.reducer
