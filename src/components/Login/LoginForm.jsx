import React from "react";
import { Input, CreateFieldWithLabel } from "../common/FormControls/FormControls";
import { required } from "../../utils/validators/validators";
import css from "./Login.module.scss";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ul className={css.login_items}>
                { error && 
                    <li className={css.form_error}>{error}</li>
                }
                
                {CreateFieldWithLabel("Login", "login", Input, [required], {type:  "text"})}
                {CreateFieldWithLabel("Password", "password", Input, [required], {type:  "password"})}
                {CreateFieldWithLabel("Remember me", "rememberMe", Input, undefined, {type: "checkbox"}, "RIGHT")}
                <li>
                    <button className={css.btn} type="submit">Log in</button>
                </li>
            </ul>
        </form>
    )
}
export default LoginForm;