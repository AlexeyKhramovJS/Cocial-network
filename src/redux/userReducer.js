import { userAPI } from "../api/api";

const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
    }
    return state;
}

export const setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = () => {
    return (dispatch) => {
        userAPI.getUsers()
            .then(data => {
                dispatch(setUsers(data))
            })
    }
}

export default userReducer;