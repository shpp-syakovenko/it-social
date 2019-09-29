const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-TEXT';

let startState = {
    postText: '',
    postData: [
        {id: 0, message: 'Hello world!!!', like: 3},
        {id: 1, message: 'First post!', like: 7},
        {id: 2, message: 'Second post', like: 2}
    ]
};

const profileReducer = (state = startState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postText: '',
                postData: [
                    ...state.postData,
                    {id: state.postData.length, message: state.postText, like: 10}
                ]
            };
        case UPDATE_POST:
            return {
                ...state,
                postText: action.text
            };
        default:
            return state;
    }
};

export const addPostActionCreate = () => ({ type: ADD_POST });
export const updatePostTextActionCreate = (text) => ({type: UPDATE_POST, text: text});

export default profileReducer;
