import LoginForm from './components/auth/LoginForm.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import UnAuthHeader from './components/header/UnAuthHeader.jsx';

function App() {
  return (
      <BrowserRouter>
        <div className="text-amber-50">
          <Routes>
          <Route path="/" element={<LoginForm/>}/> {/* Route mặc định */}
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/home" element={<Footer/>}/>
            <Route path="/atm/link" element={<Footer/>}/>
            <Route path="header" element={<UnAuthHeader/>}/>
            <Route path="/footer" element={<Footer/>}/>   
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

