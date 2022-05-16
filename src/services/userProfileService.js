import axios from "axios";

export const getAllUsersService = () => {
    return axios.get("/api/users");
};

export const getUserService = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

export const editUserService = (token, userData) => {
    return axios.post("/api/users/edit",
      { userData },
      {
        headers: {
          authorization: token,
        },
      }
    );
};
  

