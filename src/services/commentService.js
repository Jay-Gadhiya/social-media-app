import axios from "axios";

export const getCommentsOfPostService = (postId) => {
    return axios.get(`/api/comments/${postId}`);
};


export const addCommentService = (token, postId, commentData) => {
    return axios.post(`/api/comments/add/${postId}`,
      { commentData },
      {
        headers: {
          authorization: token,
        },
      }
    );
};
 
export const editCommentService = (token, postId, commentId, commentData) => {
    return axios.post(`/api/comments/edit/${postId}/${commentId}`,
      { commentData },
      {
        headers: {
          authorization: token,
        },
      }
    );
};

export const deleteCommentService = (token, postId, commentId) => {
    return axios.post(`/api/comments/delete/${postId}/${commentId}`,{},
      {
        headers: {
          authorization: token,
        },
      }
    );
};