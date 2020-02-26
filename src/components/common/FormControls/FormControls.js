import React from "react";
import css from "./FormControls.module.scss";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={`${css.form_control} ${hasError && css.error}`}>
            <textarea {...input} {...props}/>
            { hasError && <p>{meta.error}</p> }
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={`${css.form_control} ${hasError && css.error}`}>
            <input {...input} {...props}/>
            { hasError && <p>{meta.error}</p> }
        </div>
    )
}