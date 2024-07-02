import UnAuthHeader from './components/header/UnAuthHeader.jsx';
import LoginForm from "./components/auth/LoginForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import PersonalInfoForm from "./components/infoAccount/PersonalInfoForm.jsx";

function App() {
  return (
      <BrowserRouter>
        <div className="text-amber-50">
          <Routes>
          <Route path="/" element={<LoginForm/>}/> {/* Route mặc định */}
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/home" element={<PersonalInfoForm/>}/>
            <Route path="/atm/link" element={<Footer/>}/>
            <Route path="header" element={<UnAuthHeader/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/" element={<LoginForm/>}/>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

