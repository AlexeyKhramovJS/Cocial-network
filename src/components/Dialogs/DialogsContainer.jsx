import React from 'react';
import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {dispatch(updateNewMessageTextAC(newText));},
        sendMessage: () => {dispatch(sendMessageAC());}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);