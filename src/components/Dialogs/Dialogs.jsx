import React from 'react';
import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const onNewMessageChange = (e) =>  {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }

    const sendMessage = () => {
        props.sendMessage();
    }
    
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id} message={message.message}/>);

    return (
        <div className={style.dialogs}>

            <div className={style.dialogItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                <div className={style.messagesHeader}>
                    <button onClick={sendMessage}>Отправить</button>
                    <input type="text" value={props.dialogsPage.newMessageText} onChange={onNewMessageChange} placeholder='Сообщение...' />
                </div>         
                <div className={style.messagesBody}>
                    {messagesElements.reverse()}
                </div>       
            </div>

        </div>
    );
}

export default Dialogs;