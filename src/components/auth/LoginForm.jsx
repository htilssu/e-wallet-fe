

import './LoginRegister.css'  //add css
import LoginComponent from './LoginComponent';
import RegisterComponent from "./RegisterComponent";
import {useState} from "react";

const LoginRegister = () => {

    const [action, setAction] = useState('');  //khai báo một biến action và một hàm setAction để cập nhật giá trị của biến này.

    const registerLink = () => {
        setAction(' active');
    };
    const loginLink = () => {
        setAction('');
    };

    return (
        <div className="bodyLogin">
            <div className={`wrapper${action}`}>
                <LoginComponent registerLink={registerLink}></LoginComponent>
                <RegisterComponent loginLink={loginLink}></RegisterComponent>
            </div>
        </div>
    )
}

export default LoginRegister
