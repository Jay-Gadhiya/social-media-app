import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { editUserService, getAllUsersService, getUserService } from "../../services/userProfileService";


const initialState = {
    allUsers : [],
    profileUser : JSON.parse(localStorage.getItem('user'))?.user || "",
    error : "",
}

export const fetchAllUsers = createAsyncThunk("userProfile/fetchAllUsers", async () => {
    try {
        const response = await getAllUsersService();
        if(response.status === 200){
            console.log(response);
            return response.data;
        }
    } catch (error){
       return error;
    }
})

export const fetchGetUser = createAsyncThunk("userProfile/fetchGetUser", async () => {
    try {
        const response = await getUserService();
        if(response.status === 200){
            return response.data;
        }
    } catch (error){
       return error;
    }
})

export const fetchEditUser = createAsyncThunk("userProfile/fetchEditUser", async ({userData, token}) => {
    try {
        const response = await editUserService(token, userData);
        if(response.status === 201){
            return response.data;
        }
    } catch (error){
       console.log(error);
    }
})

const userProfileSlice = createSlice({
    name : "userProfile",
    initialState,

    extraReducers : (builder) => {

        builder.addCase(fetchAllUsers.pending, state => {
            state.allUsers = [];
        })

        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload;
        })

        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.error = action.payload;
        })


        builder.addCase(fetchGetUser.pending, state => {
            state.profileUser = "";
        })

        builder.addCase(fetchGetUser.fulfilled, (state, action) => {
            state.profileUser = action.payload;
        })

        builder.addCase(fetchGetUser.rejected, (state, action) => {
            state.error = action.payload;
        })


        builder.addCase(fetchEditUser.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchEditUser.fulfilled, (state, action) => {
            state.profileUser = action.payload.user;
        })

        builder.addCase(fetchEditUser.rejected, (state, action) => {
            state.error = action.payload;
        })

    }
})

export default userProfileSlice.reducer;