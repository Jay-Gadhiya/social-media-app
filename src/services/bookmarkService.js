import axios from "axios";

export const addToBookmarkService = (token, postId) =>
  axios.post(`/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removesFromBookmark = (token, postId) =>
  axios.post(`/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );