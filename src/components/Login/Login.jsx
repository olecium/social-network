import React from "react";
import css from "./Login.module.scss";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";

let Login = (props) => {
    
    const onSubmit = (formData) => {
        props.authoriseLogin(formData.login, formData.password, formData.rememberMe);
        console.log(formData);
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