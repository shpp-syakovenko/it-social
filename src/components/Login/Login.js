import React from 'react';
import reduxForm from "redux-form/es/immutable/reduxForm";
import Field from "redux-form/es/Field";
import {Input} from "../elements/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import connect from "react-redux/es/connect/connect";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from './login.module.css';

const maxLength = maxLengthCreator(20);

const Login = ({login, isAuth, captchaUrl}) => {

  // Если залогинились делаем Redirect
  if(isAuth){
    return <Redirect to="/profile"/>
  }
  // Функция которыя принимает данные с формы, после события onSubmit
  const onSubmitForm = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
    return (
      <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmitForm} captchaUrl={captchaUrl} />
      </div>
    );
};

const LoginForm = ({handleSubmit, captchaUrl, error}) => {
    return(
      <form onSubmit={handleSubmit}>
          <div>
             <Field component={Input} type={"text"} name={"email"} placeholder={'email'} validate={[required, maxLength]}/>
          </div>
          <div>
            <Field component={Input} type={"text"} name={"password"} placeholder={"Password"} validate={[required, maxLength]}/>
          </div>
          <div>
            <Field component={Input} type={"checkbox"} name={"rememberMe"} /> remember me
          </div>
          <div>
            {
              captchaUrl ? <img src={captchaUrl} alt='captcha'/> : null
            }
          </div>
        <div>
          {
            captchaUrl ? <Field component={Input} type={"text"} name={"captcha"} /> : null
          }
        </div>

            {error ? <div className={style.formError}>
                      {error}
                     </div>
                   : ""}

          <div>
              <button>Send</button>
          </div>
      </form>
    )
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login, logout})(Login);
