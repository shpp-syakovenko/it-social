import React from 'react';
import store from './redux/reduxStore';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";


render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);




