import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "dc0f0ce6-2534-4ef7-b65c-0f65df064163"
    }    
});



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {    
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowUser (userId) {    
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    followUser (userId) {    
        return instance.post(`follow/${userId}`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile (userId = null) {    
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}