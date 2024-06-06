import "./register.css";
import { RiAccountPinBoxLine, RiLockPasswordLine } from "react-icons/ri";
import { FormInput } from "../../components/FormInput";
import { ChangeEventHandler, useState } from "react";
import useAuth from "../../hooks/useAuth.tsx";
interface formDataTypes {
  username: string;
  password: string;
  rep_password: string;
}

export const Register = () => {
  const [formData, setFormData] = useState<formDataTypes>({
    username: "",
    password: "",
    rep_password: "",
  });

  const { register } = useAuth();

  const handleChange: ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password, rep_password } = formData;

    if (rep_password !== password) {
      return;
    }
    await register(username, password);

  };

  return (
    <div className="page">
      <div className="container">
        <div className="boxtop">
          <p>create an account</p>
        </div>

        <div className="formdiv">
          <form method="POST" onSubmit={onSubmit}>
            <div className="segment">
              <FormInput
                name="username"
                type="text"
                placeholder="username"
                icon={<RiAccountPinBoxLine size={"2rem"} />}
                onChange={handleChange}
              />
            </div>
            <div className="segment">
              <FormInput
                name="password"
                type="password"
                placeholder="password"
                icon={<RiLockPasswordLine size={"2rem"} />}
                onChange={handleChange}
              />
            </div>
            <div className="segment">
              <FormInput
                name="rep_password"
                type="password"
                placeholder="repeat password"
                icon={<RiLockPasswordLine size={"2rem"} />}
                onChange={handleChange}
              />
            </div>
            <div className="segment">
              <input type="submit" className="submit" value={"register!!!!"} />
            </div>
          </form>
        </div>
        <div className="footer">
          <p>hello bro</p>
        </div>
      </div>
    </div>
  );
};
