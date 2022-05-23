import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addToBookmarkService, removesFromBookmark } from "../../services/bookmarkService";
import { addCommentService, deleteCommentService, editCommentService, getCommentsOfPostService } from "../../services/commentService";
import { postDislikeService, postLikeService } from "../../services/likeDislikeService";
import { createPostService, deletePostService, editPostService, getAllPostService, getPostByIdService, getPostByUserNameService } from "../../services/postServices";


const initialState = {
    posts : [], 
    post : {},
    bookmarks : [],
    error : "",
    loading : false,
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
        toast.success('Post Uploded!');
        return response.data;

    } catch (error) {
        return error;
    }
})

export const fetchDeletePost = createAsyncThunk("post/fetchDeletePost", async ({token, postId}) => {
    try {
        const response = await deletePostService(token, postId);
        toast.success('Post Deleted!');
        return response.data;
    } catch (error) {
        return error;
    }
})

export const fetchEditPost = createAsyncThunk("post/fetchEditPost", async ({token, postId, postData}) => {
    try {
        const response = await editPostService(token, postId, postData);
        toast.success('Post Updated!');
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
        toast.success('Comment Updated!');
        return { comments, postId };

    } catch (error) {
        return error;
    }
})

export const fetchDeleteComment = createAsyncThunk("post/fetchDeleteComment", async ({token, postId, commentId}) => {
    try {
        const {data : { comments }} = await deleteCommentService(token, postId, commentId);
        toast.success('Comment Deleted!');
        return { comments, postId };

    } catch (error) {
        console.error(error);
    }
})

export const fetchLikePost = createAsyncThunk("post/fetchLikePost", async ({token, postId}) => {
    try {
        const response = await postLikeService(token, postId);
        return response.data;

    } catch (error) {
        console.error(error);

    }
})

export const fetchDislikePost = createAsyncThunk("post/fetchDislikePost", async ({token, postId}) => {
    try {
        const response = await postDislikeService(token, postId);
        return response.data;

    } catch (error) {
        console.error(error);

    }
})

export const fetchBookmarkPost = createAsyncThunk("post/fetchBookmarkPost", async ({token, postId}) => {
    try {
        const response = await addToBookmarkService(token, postId);
        toast.success('Successfully Bookmarked!');
        return response.data;

    } catch (error) {
        console.error(error);

    }
})

export const fetchRemoveBookmark = createAsyncThunk("post/fetchRemoveBookmark", async ({token, postId}) => {
    try {
        const response = await removesFromBookmark(token, postId);
        toast.success('Removed from Bookmarked!');
        return response.data;

    } catch (error) {
        console.error(error);

    }
})



 
const postSlice = createSlice({
    name : "post",
    initialState,
    
    reducers : {
        sortByTrending: (state) => {
            state.posts = state.posts.sort(
                (a, b) => b.likes.likeCount - a.likes.likeCount
            );
        },

        sortByLatest: (state) => {
        state.posts = state.posts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        },

        sortByOldest: (state) => {
        state.posts = state.posts.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        },
    },

    extraReducers : (builder) => {

        // All post
        builder.addCase(fetchAllPost.pending, state => {
            state.loading = true;
        })

        builder.addCase(fetchAllPost.fulfilled, (state, action) => {
            state.posts = action.payload?.posts.reverse();
            state.loading = false;
        })

        builder.addCase(fetchAllPost.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
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

        // like 
        builder.addCase(fetchLikePost .pending, (state, action) => {
            state.error = ""
        })

        builder.addCase(fetchLikePost.fulfilled, (state, { payload }) => {
            state.posts = payload.posts.reverse();
        })

        builder.addCase(fetchLikePost.rejected, (state, action) => {
            state.error = action.payload;
        })

        // dislike 
        builder.addCase(fetchDislikePost .pending, (state, action) => {
            state.error = "";
        })

        builder.addCase(fetchDislikePost.fulfilled, (state, { payload }) => {
            state.posts = payload.posts.reverse();
        })

        builder.addCase(fetchDislikePost.rejected, (state, action) => {
            state.error = action.payload;
        })

        // Add Bookmark 
        builder.addCase(fetchBookmarkPost .pending, (state, action) => {
            state.error = "";
        })

        builder.addCase(fetchBookmarkPost.fulfilled, (state, { payload }) => {
            state.bookmarks = payload.bookmarks;
        })

        builder.addCase(fetchBookmarkPost.rejected, (state, action) => {
            state.error = action.payload;
        })

        // Remove Bookmark 
        builder.addCase(fetchRemoveBookmark .pending, (state, action) => {
            state.error = "";
        })

        builder.addCase(fetchRemoveBookmark.fulfilled, (state, { payload }) => {
            state.bookmarks = payload.bookmarks;
        })

        builder.addCase(fetchRemoveBookmark.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export default postSlice.reducer;
export const  { sortByLatest, sortByOldest, sortByTrending } = postSlice.actions;