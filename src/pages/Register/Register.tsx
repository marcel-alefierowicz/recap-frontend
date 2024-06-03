import "./register.css";
import { RiAccountPinBoxLine, RiLockPasswordLine } from "react-icons/ri";
import { FormInput } from "../../components/FormInput";
// import axios from "axios";
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
    // event handler for changing forms
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const onSubmit = async (formData: formDataTypes) => {
  //   const { username, password, rep_password } = formData;
  //   if (rep_password === password) {
  //     try {
  //       await axios({
  //         url: "localhost:3000/create-user",
  //         method: "POST",
  //         data: { username, password },
  //       });
  //     } catch (err) {
  //       console.error("an error has occured while sending request: ", err);
  //     }
  //   }
  // };

  return (
    <div className="page">
      <div className="container">
        <div className="boxtop">
          <p>create an account</p>
        </div>
        <div className="formdiv">
          <form method="POST">
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
