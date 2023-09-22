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
    },
})

export const { setCurrentDelivery } = currentDeliverySlice.actions

export default currentDeliverySlice.reducer
