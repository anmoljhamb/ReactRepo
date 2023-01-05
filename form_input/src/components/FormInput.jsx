import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
    const { label, onChange, ...inputProps } = props;

    return (
        <div className="formInput">
            <label htmlFor="">{label}</label>
            <input
                onChange={onChange}
                placeholder={props.placeholder}
                {...inputProps}
            />
        </div>
    );
};

export default FormInput;
