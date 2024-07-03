import LoginForm from "./components/auth/LoginForm.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import PersonalInfoForm from "./components/infoAccount/PersonalInfoForm.jsx";
import Topup from "./components/topup/Topup.jsx";
import { PageNotFound } from "./modules/core/system-component/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<PersonalInfoForm />} />
            <Route path="/topup" element={<Topup />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
