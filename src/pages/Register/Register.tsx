import "./register.css";
import { RiAccountPinBoxLine, RiLockPasswordLine } from "react-icons/ri";
import { FormInput } from "../../components/FormInput";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";

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

  const handleChange: ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rep_password === formData.password) {
      try {
        await axios({
          url: "http://localhost:3000/create-account",
          method: "POST",
          data: {
            username: formData.username,
            password: formData.password,
          },
        }).then((response) => {
          console.log(response);
        });
      } catch (err) {
        console.error("an error has occured while sending request: ", err);
      }
    }
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
