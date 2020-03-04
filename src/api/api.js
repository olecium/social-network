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
    },
    getStatus (userId = null) {    
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus (status = null) {    
        return instance.put(`profile/status`, {status}).then(response => response.data);
    },
    updateProfileData (profile) { 
        return instance.put(`profile`, profile).then(response => response.data);
    },
    updatePhoto (photoFile) { 
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`);
    },
    authLogin (email = null, password = null, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    authLogout () {
        return instance.delete(`auth/login`);
    }
    
}

export const securityAPI = {
    getCaptcha () {
        return instance.get(`security/get-captcha-url`).then(response => response.data);
    }
}