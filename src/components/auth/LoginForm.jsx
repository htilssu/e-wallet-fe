// cach tao ra: rafce
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './LoginRegister.css'  //add css
import LoginComponent from './LoginComponent';
import RegisterComponent from "./RegisterComponent";

const LoginForm = () => {

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

export default LoginForm