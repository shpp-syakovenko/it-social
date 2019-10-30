import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let startState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id: userId, email, login, isAuth}});

// Проверяеи зарегистрирован ли пользователь. Если информация в куках
export const getAuthUserData = () => {
  return async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };

};

// Логинемся и заносим информацию в куки
export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(stopSubmit("login", {_error: "Вы ввели неверный пароль или email"}));
    }

  }
};

// Удаляем куку про авторизацию.
export const logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }

  }
};

export default authReducer;
