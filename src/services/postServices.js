import axios from "axios";

export const getAllPostService = () => {
    return axios.get("/api/posts");
};

export const getPostByIdService = (postId) => {
    return axios.get(`/api/posts/${postId}`);
};

export const getPostByUserNameService = (username) => {
    return axios.get(`/api/posts/user/${username}`);
};


export const createPostService = (token, post) => {
    return axios.post("/api/posts",
      { post },
      {
        headers: {
          authorization: token,
        },
      }
    );
};


export const deletePostService = (token, postId) => {
    return axios.delete(`/api/posts/${postId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
};


export const editPostService = (token, postId, postData) => {
    return axios.post(`/api/posts/edit/${postId}`,
    {
        postData
    },
      {
        headers: {
          authorization: token,
        },
      }
    );
};