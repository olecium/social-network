import React from "react";
import css from "./Login.module.scss";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

let Login = (props) => {
    
    const onSubmit = (formData) => {
        props.userLogin(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    
    return (    
        <section className={css.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}
export default Login;

let LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);