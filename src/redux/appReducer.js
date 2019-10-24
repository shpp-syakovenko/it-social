import {getAuthUserData} from "./authReducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

let initializationState = {
  initialization: false
};

const appReducer = (state = initializationState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
              initialization: true
            };
        default:
            return state;
    }
};

export const initializationSuccess = () => ({type: INITIALIZATION_SUCCESS});

// Проверяеи зарегистрирован ли пользователь. Если информация в куках
export const initialize = () => {
    return (dispatch) => {
      let promiseAuth = dispatch(getAuthUserData());

      Promise.all([promiseAuth]).then(() => {
        dispatch(initializationSuccess());
      });



    }
};


export default appReducer;
