import axios from "axios";

export const postLikeService = (token, postId) =>
  axios.post(`/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const postDislikeService = (token, postId) =>
  axios.post(`/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );