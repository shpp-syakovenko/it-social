const ADD_MESSAGE = 'ADD-MESSAGE';

let startDialogs = {
    dialogsData: [
        {id: 0, name: 'Dima'},
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Igor'}
    ],
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
                messagesData: [
                    ...state.messagesData,
                    {id: state.messagesData.length, message: action.value}
                ]
            };
        default:
            return state;
    }
};

export const addMessageActionCreate = (value) => ({type: ADD_MESSAGE, value});

export default dialogsReducer;
