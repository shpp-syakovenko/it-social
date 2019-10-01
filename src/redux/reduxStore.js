import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
