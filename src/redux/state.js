const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

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
        }

    },
    _renderEntireTree(){
        console.log('_renderEntireTree');
    },

    getState(){
      return this._state
    },
    subscribe(observer){
        this._renderEntireTree = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profile.postData.length,
                message: this._state.profile.postText,
                like: 10
            };
            this._state.profile.postData.push(newPost);
            this._state.profile.postText = '';
            this._renderEntireTree(this._state);
        }else if(action.type === UPDATE_POST){
            this._state.profile.postText = action.text;
            this._renderEntireTree(this._state);
        }else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: this._state.dialogs.messagesData.length,
                message: this._state.dialogs.messageText
            };
            this._state.dialogs.messagesData.push(newMessage);
            this._state.dialogs.messageText = '';
            this._renderEntireTree(this._state);
        }else if(action.type === UPDATE_MESSAGE){
            this._state.dialogs.messageText = action.text;
            this._renderEntireTree(this._state);
        }
    }
};

export const addPostActionCreate = () => ({ type: ADD_POST });
export const updatePostTextActionCreate = (text) => ({type: UPDATE_POST, text: text});

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreate = (text) =>({type: UPDATE_MESSAGE, text: text});

export default store;
