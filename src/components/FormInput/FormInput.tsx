import { ReactNode } from "react";
import "./forminput.css";

interface InputProps {
  name: string,
  type: string,
  placeholder: string,
  icon: ReactNode
};

export const FormInput = ({name, type, placeholder, icon}:InputProps) => {
  return (
    <div className="inputcontainer">
      <div className="icon">{icon}</div>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
