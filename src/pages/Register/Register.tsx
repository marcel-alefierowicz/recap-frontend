import "./register.css";
import { RiAccountPinBoxLine, RiLockPasswordLine } from "react-icons/ri";
import { FormInput } from "../../components/FormInput";

export const Register = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="boxtop">
          <p>create an account</p>
        </div>
        <div className="formdiv">
          <form action={""} method="post">
            <div className="segment">
              <FormInput
                name="username"
                type="text"
                placeholder="username"
                icon={<RiAccountPinBoxLine size={"2rem"} />}
              />
            </div>
            <div className="segment">
              <FormInput
                name="password"
                type="password"
                placeholder="password"
                icon={<RiLockPasswordLine size={"2rem"} />}
              />
            </div>
            <div className="segment">
              <FormInput
                name="rep_password"
                type="password"
                placeholder="repeat password"
                icon={<RiLockPasswordLine size={"2rem"} />}
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
