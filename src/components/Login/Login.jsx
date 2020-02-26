import React from "react";
import css from "./Login.module.scss";
import { reduxForm, Field } from "redux-form";

let Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (    
        <section className={css.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul className={css.login_items}>
                <li className={css.login_item}>
                    <label className={css.login_label} htmlFor="login">Login</label>
                    <Field className={css.login_input} name={"login"} component={"input"} />
                </li>
                <li className={css.login_item}>
                    <label className={css.login_label} htmlFor="password">Password</label>
                    <Field className={css.login_input} name={"password"} component={"input"} />
                </li>
                <li className={css.login_item__checkbox}>
                    <Field className={css.login_input__checkbox} name={"rememberme"} component={"input"} type={"checkbox"} />
                    <label className={css.login_label} htmlFor="rememberme">Remember me</label>
                </li>
                <li>
                    <button className={css.btn} type="submit">Log in</button>
                </li>
            </ul>
        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);


export default Login;