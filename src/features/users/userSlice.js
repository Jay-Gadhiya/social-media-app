import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
1
const initialState = {
    token : JSON.parse(localStorage.getItem('user'))?.token || "",
    user : JSON.parse(localStorage.getItem('user'))?.user || "",
    error : ""
}


export const fetchLoginUserData = createAsyncThunk('user/fetchLoginUserData', async (userData) => {

    try {
        const response = await axios.post("/api/auth/login", userData)
        if(response.status === 200){
            return response.data;
        }
    } catch (error){
        return error;
    }
    
})

export const fetchSignupUserData = createAsyncThunk('user/fetchSignupUserData', async (userData) => {
    try {
        const response = await axios.post("/api/auth/signup", userData)
        if(response.status === 201){
            return response.data;
        }
    } catch (error){
        return error;
    }
    
})

const userSlice = createSlice({
    name : 'user',
    initialState,

    reducers : {
        logoutUser: state => {
            localStorage.removeItem("user");
            state.token = "",
            state.user = ""
            console.log("clicked");
        },
    },

    extraReducers : (builder) => {
        builder.addCase(fetchLoginUserData.pending, state => {
            state.token = ''
        })

        builder.addCase(fetchLoginUserData.fulfilled, (state, action) => {
            state.token = action.payload.encodedToken
            localStorage.setItem("user", JSON.stringify({token : action.payload.encodedToken, user : action.payload.foundUser}));
        })

        builder.addCase(fetchLoginUserData.rejected, (state, action) => {
            state.error = action.payload
        })

        builder.addCase(fetchSignupUserData.pending, state => {
            state.token = ''
        })

        builder.addCase(fetchSignupUserData.fulfilled, (state, action) => {
            state.token = action.payload.encodedToken
            localStorage.setItem("user", JSON.stringify({token : action.payload.encodedToken, user : action.payload.createdUser}));
        })

        builder.addCase(fetchSignupUserData.rejected, (state, action) => {
            state.error = action.payload
        })
    }
}
)

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;