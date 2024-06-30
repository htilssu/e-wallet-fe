import './App.css'
import LoginForm from "./components/auth/LoginForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/home" element={<Footer />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="/" element={<LoginForm />} /> {/* Route mặc định */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App
