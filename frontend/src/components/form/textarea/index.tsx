import React from "react";
import './styles.scss';

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
    rows: number;
    cols: number;
}

const FormTextArea = ({ handleChange, label, rows, cols, ...otherProps }: IProps) => {
    return (
        <div className="formRow">
            {label && <label>{label}</label>}
            
            <textarea className="formInput" rows={rows} cols={cols} onChange={handleChange} {...otherProps} />
          
        </div>
      );
};

export default FormTextArea;