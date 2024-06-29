// eslint-disable-next-line no-unused-vars
import React from 'react';
import './InforPopup.css'  //add css
import {useNavigate} from "react-router-dom";

const InforPopup = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic để đăng xuất và điều hướng tới trang đăng nhập
        navigate('/login');
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the home page of our application.</p>
            <button onClick={handleLogout}>Logout</button>
            <p>Tuan dep trai</p>
        </div>
    );
};

export default InforPopup;
