import LoginForm from "./components/auth/LoginForm.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import PersonalInfoForm from "./components/infoAccount/PersonalInfoForm.jsx";
import AtmLinked from "./components/atm_linked/AtmLinked.jsx";
import AddInfoAtm from "./components/add_atm_linked/AddInfoAtm.jsx";
import Topup from "./components/topup/Topup.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="text-amber-50">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<PersonalInfoForm />} />
              <Route path="/atm/link" element={<AtmLinked/>}/>
            <Route path="/topup" element={<Topup />} />
              <Route path="/AddInfoAtm" element={<AddInfoAtm/>}/>
              <Route path="/footer" element={<Footer/>}/>
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
