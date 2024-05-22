import { configureStore } from '@reduxjs/toolkit'
import { UsersSlice } from './user-slice'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        user: UsersSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector