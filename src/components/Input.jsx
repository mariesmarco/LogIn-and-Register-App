import React from "react";
export default Input;

function Input(props) {
    return (
        <input
            onChange={props.onChange}
            type={props.type} className="form-input"
            placeholder={props.placeholder}
            value={props.value}
        />)
}
