import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6e2da73b-5e08-47b2-87ee-59fed946b855"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userID) {
        return instance.post(`follow/${userID}`, {}, {
        })
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`);

    },
    authMe() {
        return instance.get(`auth/me`);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }


};
