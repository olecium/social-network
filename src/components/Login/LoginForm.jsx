import React from "react";
import { Field } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import css from "./Login.module.scss";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul className={css.login_items}>
                <li className={css.login_item}>
                    <label className={css.login_label} htmlFor="login">Login</label>
                    <Field className={css.login_input} name={"login"} component={Input} validate={[required]} />
                </li>
                <li className={css.login_item}>
                    <label className={css.login_label} htmlFor="password">Password</label>
                    <Field className={css.login_input} name={"password"} component={Input} validate={[required]} />
                </li>
                <li className={css.login_item__checkbox}>
                    <Field className={css.login_input__checkbox} name={"rememberMe"} component={Input} type={"checkbox"} />
                    <label className={css.login_label} htmlFor="rememberMe">Remember me</label>
                </li>
                <li>
                    <button className={css.btn} type="submit">Log in</button>
                </li>
            </ul>
        </form>
    )
}
export default LoginForm;