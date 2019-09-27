import React from 'react';
import state from './redux/state';
import {render} from 'react-dom';
import App from './components/App';
import {addPost, updatePostText, subscribe} from "./redux/state";


export const renderEntireTree = (state) => {
    render(<App state={state} addPost={addPost} updatePostText={updatePostText} />, document.getElementById('root'));
};

renderEntireTree(state);
subscribe(renderEntireTree);


