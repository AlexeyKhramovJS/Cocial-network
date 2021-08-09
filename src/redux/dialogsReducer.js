const UPDATE_NEW_MESSEGE_TEXT = 'UPDATE_NEW_MESSEGE_TEXT',
    SEND_MESSAGE = 'SEND_MASSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Чтобы отыскать баг, ты должен мыслить, как баг!'},
        {id: 2, message: 'Какое ТЗ, такое и ХЗ!'},
        {id: 3, message: 'Перемены неизбежны!'},
        {id: 4, message: 'Меньше знаешь — больше гуглишь!'},
      ],
      dialogs: [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Андрей'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Саша'},
        {id: 5, name: 'Виктор'},
        {id: 6, name: 'Валера'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSEGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: text}]
            };
        default:
            return state;
    }
}

export const updateNewMessageTextAC = text => ({type: UPDATE_NEW_MESSEGE_TEXT, newText: text});

export const sendMessageAC = () => ({type: SEND_MESSAGE});

export default dialogsReducer;