
import './InforPopup.css'  //add css
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../context/AuthContext.jsx'

const InforPopup = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic để đăng xuất và điều hướng tới trang đăng nhập
        setUser(null);
        navigate('/login');
    };

    const {setUser} = useAuth();

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the home page of our application.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default InforPopup;
