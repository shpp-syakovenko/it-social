import React from 'react';
import store from './redux/state';
import {render} from 'react-dom';
import App from './components/App';



export const renderEntireTree = (state) => {
    render(<App state={state}
                dispatch={store.dispatch.bind(store)}
            />, document.getElementById('root'));
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);


