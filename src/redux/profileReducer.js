import { profileApi } from "../api/api";

const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_PROFILE = 'SET_PROFILE',
    SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Это не баг, это фича', likesCount: 58},
        {id: 2, message: 'Скорей бы утро и снова на работу!', likesCount: 3},
        {id: 3, message: 'Сделал Демо – гуляй смело', likesCount: 20},
        {id: 4, message: 'Моя бага с краю', likesCount: 47},
    ],
    newPostText: '',
    profile: null,
    profilePhoto: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PROFILE_PHOTO: {
            return {
                ...state,
                profilePhoto: action.photoUrl
            }
        }
        default: 
            return state;
    }

}

export const addPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setProfile = profile => ({type: SET_PROFILE, profile})

export const setProfilePhoto = photoUrl => ({type: SET_PROFILE_PHOTO, photoUrl})

export const getUserProfile = userId => {
    
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data));
                dispatch(setProfilePhoto('https://randomuser.me/api/portraits/men/' + userId + '.jpg'));
            })
    }
}

export default profileReducer;