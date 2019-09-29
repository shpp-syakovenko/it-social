import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profile: {
            postText: '',
            postData: [
                {id: 0, message: 'Hello world!!!', like: 3},
                {id: 1, message: 'First post!', like: 7},
                {id: 2, message: 'Second post', like: 2}
            ]
        },
        dialogs: {
            dialogsData: [
                {id: 0, name: 'Dima'},
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Roma'},
                {id: 3, name: 'Igor'}
            ],
            messageText: '',
            messagesData: [
                {id: 0, message: 'Hello world!!!'},
                {id: 1, message: 'My name is Sergey.'},
                {id: 2, message: 'Do you have time.'},
                {id: 3, message: 'I like Ukraine.'},
            ],
        },
        sideBar: {}

    },
    _callSubscriber(){
        console.log('_callSubscriber');
    },

    getState(){
      return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
