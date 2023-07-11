import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    jobs: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },

        setLogout: (state) => {
            state.user = null
            state.token = null
            state.jobs = []

        },
        setJobs: (state, action) => {
            state.jobs = action.payload.allJobs
        }

    }
})

export const { setLogin, setLogout, setJobs } = authSlice.actions
export default authSlice.reducer