import './App.css'
import LoginForm from "./components/auth/LoginForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InforPopup from "./components/topup/InforPopup.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/home" element={<InforPopup />} />
                    <Route path="/" element={<LoginForm />} /> {/* Route mặc định */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;