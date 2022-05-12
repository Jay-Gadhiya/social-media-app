import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
1
const initialState = {
    token : '',
    error : ''
}


export const fetchLoginUserData = createAsyncThunk('user/fetchLoginUserData', async (userData) => {
    const response = await axios.post("/api/auth/login", userData)
    try {
        if(response.status === 200){
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.foundUser));
            return response.data;
        }
    } catch (error){
        return error;
    }
    
})

export const fetchSignupUserData = createAsyncThunk('user/fetchSignupUserData', async (userData) => {
    const response = await axios.post("/api/auth/signup", userData)
    try {
        if(response.status === 201){
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.createdUser));
            console.log(response);
            return response.data;
        }
    } catch (error){
        console.log(response);
        return error;
    }
    
})

const userSlice = createSlice({
    name : 'user',
    initialState,

    extraReducers : (builder) => {
        builder.addCase(fetchLoginUserData.pending, state => {
            state.token = ''
        })

        builder.addCase(fetchLoginUserData.fulfilled, (state, action) => {
            state.token = action.payload.encodedToken
        })

        builder.addCase(fetchLoginUserData.rejected, (state, action) => {
            state.error = action.payload
        })

        builder.addCase(fetchSignupUserData.pending, state => {
            state.token = ''
        })

        builder.addCase(fetchSignupUserData.fulfilled, (state, action) => {
            state.token = action.payload.encodedToken
        })

        builder.addCase(fetchSignupUserData.rejected, (state, action) => {
            state.error = action.payload
        })
    }
}
)

export default userSlice.reducer;