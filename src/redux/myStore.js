import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Это не баг, это фича', likesCount: 58},
                {id: 2, message: 'Скорей бы утро и снова на работу!', likesCount: 3},
                {id: 3, message: 'Сделал Демо – гуляй смело', likesCount: 20},
                {id: 4, message: 'Моя бага с краю', likesCount: 47},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;