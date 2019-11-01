import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let startState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null  // is null captcha not required
};

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
      case SET_CAPTCHA_URL:
        return {
          ...state,
          captchaUrl: action.captchaUrl
        };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id: userId, email, login, isAuth}});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

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
export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if(response.data.resultCode === 10){
        dispatch(getCaptchUrl());
      }
      dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
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

// Получаем саптчу.
export const getCaptchUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
  }
};

export default authReducer;
