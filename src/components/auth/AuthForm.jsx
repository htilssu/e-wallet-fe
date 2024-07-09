import LoginForm from "./LoginForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import { useState } from "react";

const LoginRegister = () => {
  const [action, setAction] = useState(""); //khai báo một biến action và một hàm setAction để cập nhật giá trị của biến này.

  const registerLink = () => {
    setAction(" active");
  };
  const loginLink = () => {
    setAction("");
  };

  return (
    <div className="bodyLogin">
      <div className={`wrapper${action}`}>
        <LoginForm registerLink={registerLink}></LoginForm>
        {/*<RegistrationForm loginLink={loginLink}></RegistrationForm>*/}
      </div>
    </div>
  );
};

export default LoginRegister;
