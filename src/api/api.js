import * as axios from 'axios';

export const userAPI = {
 
    getUsers() {
        return (
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data)
        )
    }
}

export const profileApi = {
    
    getProfile(userId) {
        
        return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }
}