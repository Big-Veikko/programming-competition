import React from "react";
import './styles.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    type: string;
}

const FormInput = ({ handleChange, label, type, ...otherProps }: IProps) => {
    return (
        <div className="formRow">
            {label && <label>{label}</label>}
            
            <input className="formInput" type={type} onChange={handleChange} {...otherProps} />
          
        </div>
      );
};

export default FormInput;