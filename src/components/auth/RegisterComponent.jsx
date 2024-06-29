// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const RegisterComponent = ({ loginLink }) => {
    return (
        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type='text' required/>
                    <label>Username</label>
                    <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type='email' required/>
                    <label>Email</label>
                    <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' required/>
                    <label>Password</label>
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' required/>
                    <label>Enter the Password</label>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type='checkbox'/>
                        I agree to the terms & conditions
                    </label>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account ?
                        <a href='#' onClick={loginLink}>
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default RegisterComponent;