import React from "react";
import './styles.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...otherProps }: IProps) => {
    return (
        <button className="button" {...otherProps}>
            {children}
        </button>
    );
};

export default Button;