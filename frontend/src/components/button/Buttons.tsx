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

const SubmitBtnSecondary: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button type="submit" className="btn secondary-btn" onClick={onClick}>
      {text}
    </button>
  );
};

const SubmitBtnPrimary: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return (
    <button type="submit" className="btn primary-btn" onClick={onClick}>
      {text}
    </button>
  );
};
export { PrimaryBtn, SecondaryBtn, SubmitBtnSecondary as SubmitBtn, SubmitBtnPrimary };
