import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
 
    return (
        <div>
            <ProfileInfo profile={props.profile} profilePhoto={props.profilePhoto}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;