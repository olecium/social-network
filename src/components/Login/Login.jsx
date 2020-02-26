import React from "react";
import css from "./Login.module.scss";

let Login = () => {
    return (
        <section className={css.login}>
            <form>
                <ul className={css.login_items}>
                    <li className={css.login_item}>
                        <label className={css.login_label} htmlFor="login">Login</label>
                        <input className={css.login_input} type="text" name="login" id="login"/>
                    </li>
                    <li className={css.login_item}>
                        <label className={css.login_label} htmlFor="password">Password</label>
                        <input className={css.login_input} type="password" name="password" id="password"/>
                    </li>
                    <li>
                        <button className={css.btn} type="submit">Log in</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default Login;