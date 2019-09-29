const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let startDialogs = {
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
};

const dialogsReducer = (state = startDialogs, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageText: '',
                messagesData: [
                    ...state.messagesData,
                    {id: state.messagesData.length, message: state.messageText}
                ]
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                messageText: action.text
            };
        default:
            return state;
    }
};

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreate = (text) =>({type: UPDATE_MESSAGE, text: text});

export default dialogsReducer;
