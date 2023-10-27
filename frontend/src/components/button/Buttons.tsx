import { FunctionComponent, MouseEvent } from "react";
import "./styles.scss";

interface ButtonProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryBtn: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn primary-btn" onClick={onClick}>
      {text}
    </button>
  );
};

const SecondaryBtn: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="btn secondary-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export { PrimaryBtn, SecondaryBtn };
