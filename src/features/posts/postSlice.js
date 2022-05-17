import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPostService, deletePostService, editPostService, getAllPostService, getPostByIdService, getPostByUserNameService } from "../../services/postServices";


const initialState = {
    posts : [],
    post : {},
    error : "",
}


export const fetchAllPost = createAsyncThunk("post/fetchAllPost", async () => {
    try {
        const response = await getAllPostService();
        return response.data;
    } catch (error) {
        return error;
    }
})

export const fetchPostById = createAsyncThunk("post/fetchPostById", async (postId) => {
    try {
        const response = await getPostByIdService(postId);
    } catch (error) {
        return error;
    }
})

export const fetchPostByUsername = createAsyncThunk("post/fetchPostByUsername", async (username) => {
    try {
        const response = await getPostByUserNameService(username);
    } catch (error) {
        return error;
    }
})

export const fetchCreatePost = createAsyncThunk("post/fetchCreatePost", async ({postData, token}) => {
    try {
        const response = await createPostService(token, postData);
        console.log(response);
        return response.data;

    } catch (error) {
        return error;
    }
})

export const fetchDeletePost = createAsyncThunk("post/fetchDeletePost", async (token, postId) => {
    try {
        const response = await deletePostService(token, postId);
    } catch (error) {
        return error;
    }
})

export const fetchEditPost = createAsyncThunk("post/fetchEditPost", async (token, postId, postData) => {
    try {
        const response = await editPostService(token, postId, postData);
    } catch (error) {
        return error;
    }
})

const postSlice = createSlice({
    name : "post",
    initialState,
    
    reducers : {},

    extraReducers : (builder) => {

        // All post
        builder.addCase(fetchAllPost.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchAllPost.fulfilled, (state, action) => {
            state.posts = action.payload?.posts.reverse();
        })

        builder.addCase(fetchAllPost.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  post by id
        builder.addCase(fetchPostById.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.post = action.payload;
        })

        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  post by user name
        builder.addCase(fetchPostByUsername.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchPostByUsername.fulfilled, (state, action) => {
            state.post = action.payload;
        })

        builder.addCase(fetchPostByUsername.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  Create post
        builder.addCase(fetchCreatePost.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchCreatePost.fulfilled, (state, action) => {
            state.posts = action.payload?.posts.reverse();
        })

        builder.addCase(fetchCreatePost.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  Delete post
        builder.addCase(fetchDeletePost.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchDeletePost.fulfilled, (state, action) => {
            state.posts = action.payload;
        })

        builder.addCase(fetchDeletePost.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  Edit post
        builder.addCase(fetchEditPost.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchEditPost.fulfilled, (state, action) => {
            state.posts = action.payload;
        })

        builder.addCase(fetchEditPost.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export default postSlice.reducer;