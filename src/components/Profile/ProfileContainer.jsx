import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        
        return (
            <Profile profile={this.props.profile} profilePhoto={this.props.profilePhoto}/>
         );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    profilePhoto: state.profilePage.profilePhoto
})

export default connect(mapStateToProps, {
    getUserProfile
})(withRouter(ProfileContainer));