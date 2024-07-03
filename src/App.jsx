import LoginForm from "./components/auth/LoginForm.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import PersonalInfoForm from "./components/infoAccount/PersonalInfoForm.jsx";
import TopUp from "./components/topup/Topup.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="text-amber-50">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<PersonalInfoForm />} />
            <Route path="/atm/link" element={<Footer />} />
            <Route path="/topup" element={<TopUp />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
