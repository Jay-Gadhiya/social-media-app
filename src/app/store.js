import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import userProfileReducer from "../features/userProfile/userProfileSlice";


export const store = configureStore({
    reducer : {
        user : userReducer,
        userProfile : userProfileReducer
    }
})