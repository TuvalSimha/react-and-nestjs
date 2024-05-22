import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    username: string
    phoneNumber: string
}

interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push({
                username: action.payload.username,
                phoneNumber: action.payload.phoneNumber
            })
        }
    }
})

export default UsersSlice.reducer
export const { addUser } = UsersSlice.actions



