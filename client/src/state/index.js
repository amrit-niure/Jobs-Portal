import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    jobs: []
}

// export const getMyJobs = createAsyncThunk(
//     'user/getMyJobs',
//     async (_, { rejectWithValue }) => {
//       try {
//         const response = await axios.get('http://192.168.0.8:5000/alljobs')
//         return response.data;
//       } catch (err) {
//         if (!err.response) {
//           throw err;
//         }
//         const errorData = err.response.data;
//         return rejectWithValue({ error: errorData });
//       }
//     }
//   );

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
        },
    },
    // extraReducers :{
    //     [getMyJobs.pending ] : (state) => {
    //         state.loading = true
    //   },
    //     [getMyJobs.fulfilled ] : (state,action) => {
    //         state.jobs = action.payload.allJobs
    //         state.loading = false
    //   },
    //   [getMyJobs.rejected ] : (state) => {
    //     state.loading = false
    // },
// }
    
})
export const { setLogin, setLogout, setJobs,deleteJobs } = authSlice.actions
export default authSlice.reducer