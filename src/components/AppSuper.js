import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../redux/reduxStore";
import App from "./App";

const AppSuper = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  )
};

export default AppSuper;
