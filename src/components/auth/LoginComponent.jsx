import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LoginComponent = ({ registerLink }) => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic xác thực người dùng ở đây
        navigate('/home');
    };

    return (
        <div className="form-box login">
            <form onSubmit={handleLogin}>  {/* Sử dụng onSubmit để xử lý khi form được submit */}
                <h1>Login</h1>
                <div className="input-box">
                    <input type='text' required/>
                    <label>Enter your Email</label>
                    <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' required/>
                    <label>Enter your Password</label>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type='checkbox'/>
                        Remember me
                    </label>
                    <a href='#'>Forgot password ?</a>
                </div>
                <button type="submit">
                    Login
                </button>
                <div className="register-link">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Don't have an account ?
                        <a href='#' onClick={registerLink}>
                            Register
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;
