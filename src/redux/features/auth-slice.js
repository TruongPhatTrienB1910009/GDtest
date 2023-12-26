import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.login = true;
        },
        logout: (state) => {
            state.login = false;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer