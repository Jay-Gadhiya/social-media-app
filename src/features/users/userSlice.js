import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { followService, unFollowService } from "../../services/followUnfollowService";
import { editUserService, getAllUsersService, getUserService } from "../../services/userProfileService";

const initialState = {
    token : JSON.parse(localStorage.getItem('user'))?.token || "",
    user : JSON.parse(localStorage.getItem('user'))?.user || "",
    allUsers : [],
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

export const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", async () => {
    try {
        const response = await getAllUsersService();
        if(response.status === 200){
            return response.data;
        }
    } catch (error){
       return error;
    }
})

export const fetchGetUser = createAsyncThunk("user/fetchGetUser", async (userId) => {
    try {
        const response = await getUserService(userId);
        if(response.status === 200){
            return response.data;
        }
    } catch (error){
       return error;
    }
})

export const fetchEditUser = createAsyncThunk("user/fetchEditUser", async ({userData, token}) => {
    try {
        const response = await editUserService(token, userData);
        if(response.status === 201){
            return response.data;
        }
    } catch (error){
       console.log(error);
    }
})

export const fetchFollowUser = createAsyncThunk("user/fetchFollowUser", async ({token, userId}) => {
    try {
        const response = await followService(userId, token);
        if(response.status === 200){
            console.log(response.data);
            return response.data;
        }
    } catch (error){
       console.log(error);
    }
})

export const fetchUnfollowUser = createAsyncThunk("user/fetchUnfollowUser", async ({token, userId}) => {
    try {
        const response = await unFollowService(userId, token);
        if(response.status === 200){
            return response.data;
        }
    } catch (error){
       console.log(error);
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
        },
    },

    extraReducers : (builder) => {
        builder.addCase(fetchLoginUserData.pending, state => {
            state.token = ''
        })

        builder.addCase(fetchLoginUserData.fulfilled, (state, action) => {
            state.token = action.payload.encodedToken
            state.user = action.payload.foundUser
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
            state.user = action.payload.createdUser
            localStorage.setItem("user", JSON.stringify({token : action.payload.encodedToken, user : action.payload.createdUser}));
        })

        builder.addCase(fetchSignupUserData.rejected, (state, action) => {
            state.error = action.payload
        })


        builder.addCase(fetchAllUsers.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload.users;
        })

        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.error = action.payload;
        })


        builder.addCase(fetchGetUser.pending, state => {
            state.user = "";
        })

        builder.addCase(fetchGetUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })

        builder.addCase(fetchGetUser.rejected, (state, action) => {
            state.error = action.payload;
        })


        builder.addCase(fetchEditUser.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchEditUser.fulfilled, (state, action) => {
            state.user = action.payload?.user;
        })

        builder.addCase(fetchEditUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        // follow 
        builder.addCase(fetchFollowUser.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchFollowUser.fulfilled, (state, { payload : {user, followUser} }) => {
            state.allUsers = state.allUsers.map(existUser => existUser._id === user._id ? user : existUser);

            state.allUsers = state.allUsers.map(existUser => existUser._id === followUser._id ? followUser : existUser);

        })

        builder.addCase(fetchFollowUser.rejected, (state, action) => {
            state.error = action.payload;
        })

        // unfollow 
        builder.addCase(fetchUnfollowUser.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchUnfollowUser.fulfilled, (state, { payload : {user, followUser} } ) => {
            state.allUsers = state.allUsers.map(existUser => existUser._id === user._id ? user : existUser);

            state.allUsers = state.allUsers.map(existUser => existUser._id === followUser._id ? followUser : existUser);
        })

        builder.addCase(fetchUnfollowUser.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
}
)

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;