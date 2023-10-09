import React from "react";
import './styles.scss';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<{ value: string, name: string }>;
    defaultValue: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
}


const FormSelect = ({ options, defaultValue, handleChange, label, ...otherProps }: IProps) => {
    if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      {label && (
        <label>
          {label}
        </label>
      )}

      <select className="formSelect" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>{name}</option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;