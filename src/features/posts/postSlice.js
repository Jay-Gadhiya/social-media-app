import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCommentService, deleteCommentService, editCommentService, getCommentsOfPostService } from "../../services/commentService";
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
        return response.data;

    } catch (error) {
        return error;
    }
})

export const fetchDeletePost = createAsyncThunk("post/fetchDeletePost", async ({token, postId}) => {
    try {
        const response = await deletePostService(token, postId);
        return response.data;
    } catch (error) {
        return error;
    }
})

export const fetchEditPost = createAsyncThunk("post/fetchEditPost", async ({token, postId, postData}) => {
    try {
        const response = await editPostService(token, postId, postData);
        return response.data
    } catch (error) {
        return error;
    }
})

export const fetchAllComments = createAsyncThunk("post/fetchAllComments", async (postId) => {
    try {
        const response = await getCommentsOfPostService(postId);
        return response.data;
    } catch (error) {
        return error;
    }
})

export const fetchPostComment = createAsyncThunk("post/fetchPostComment", async ({token, postId, commentData}) => {
    try {
        const {data : { comments }} = await addCommentService(token, postId, commentData);
        return { comments, postId };

    } catch (error) {
        return error;
    }
})

export const fetchEditComment = createAsyncThunk("post/fetchEditComment", async ({token, postId, commentId, commentData}) => {
    try {
        const {data : { comments }} = await editCommentService(token, postId, commentId, commentData);
        return { comments, postId };

    } catch (error) {
        return error;
    }
})

export const fetchDeleteComment = createAsyncThunk("post/fetchDeleteComment", async ({token, postId, commentId}) => {
    try {
        const {data : { comments }} = await deleteCommentService(token, postId, commentId);
        return { comments, postId };

    } catch (error) {
        console.log(error);
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
            state.posts = action.payload.posts;
        })

        builder.addCase(fetchDeletePost.rejected, (state, action) => {
            state.error = action.payload;
        })


        //  Edit post
        builder.addCase(fetchEditPost.pending, state => {
            state.error = "";
        })

        builder.addCase(fetchEditPost.fulfilled, (state, action) => {
            state.posts = action.payload?.posts.reverse();
        })

        builder.addCase(fetchEditPost.rejected, (state, action) => {
            state.error = action.payload;
        })


        // all comments
        builder.addCase(fetchAllComments.pending, (state, action) => {
            state.error = ""
        })

        builder.addCase(fetchAllComments.fulfilled, (state, action) => {
            state.posts = action.payload?.comments;
        })

        builder.addCase(fetchAllComments.rejected, (state, action) => {
            state.error = action.payload
        })


        // add comments
        builder.addCase(fetchPostComment .pending, (state, action) => {
            state.error = ""
        })

        builder.addCase(fetchPostComment.fulfilled, (state, { payload }) => {
            const postIndex = state.posts.findIndex(post => post._id === payload.postId);
            state.posts[postIndex].comments = payload.comments;
        })

        builder.addCase(fetchPostComment.rejected, (state, action) => {
            state.error = action.payload
        })

         // edit comments
         builder.addCase(fetchEditComment .pending, (state, action) => {
            state.error = ""
        })

        builder.addCase(fetchEditComment.fulfilled, (state, { payload }) => {
            const postIndex = state.posts.findIndex(post => post._id === payload.postId);
            state.posts[postIndex].comments = payload.comments;
        })

        builder.addCase(fetchEditComment.rejected, (state, action) => {
            state.error = action.payload
        })

         // delete comments
         builder.addCase(fetchDeleteComment .pending, (state, action) => {
            state.error = ""
        })

        builder.addCase(fetchDeleteComment.fulfilled, (state, { payload }) => {
            const postIndex = state.posts.findIndex(post => post._id === payload.postId);
            state.posts[postIndex].comments = payload.comments;
        })

        builder.addCase(fetchDeleteComment.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default postSlice.reducer;