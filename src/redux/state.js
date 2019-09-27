let renderEntireTree = () => {

};

const state = {
    profile: {
        postText: 'Enter text...',
        postData:[
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
        messagesData: [
            {id: 0, message: 'Hello world!!!'},
            {id: 1, message: 'My name is Sergey.'},
            {id: 2, message: 'Do you have time.'},
            {id: 3, message: 'I like Ukraine.'},
        ],
    }

};

export const updatePostText = (text) => {
  state.profile.postText = text;
  renderEntireTree(state);
};

export const addPost = () => {
  let newPost = {
      id: state.profile.postData.length,
      message: state.profile.postText,
      like: 10
  };
  state.profile.postData.push(newPost);
  state.profile.postText = '';
  renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state;
