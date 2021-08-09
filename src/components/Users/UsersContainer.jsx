import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers } from '../../redux/userReducer';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <Users users={this.props.users} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }  
}

export default connect(mapStateToProps, {
    getUsers
})(UsersAPIComponent);