import { ChangeEventHandler, ReactNode } from "react";
import "./forminput.css";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
  onChange: ChangeEventHandler;
}

export const FormInput = ({
  name,
  type,
  placeholder,
  icon,
  onChange,
}: InputProps) => {
  return (
    <div className="inputcontainer">
      <div className="icon">{icon}</div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
