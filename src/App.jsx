<<<<<<< HEAD
import './App.css'
import './index.css'


import LoginForm from "./components/auth/LoginForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import UnAuthHeader from './components/header/UnAuthHeader.jsx';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<UnAuthHeader />} /> {/* Route mặc định */}
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/header" element={<UnAuthHeader />} />
                    <Route path="/home" element={<Footer />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App
=======
import LoginForm from './components/auth/LoginForm.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
      <BrowserRouter>
        <div className="text-amber-50">
          <Routes>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/home" element={<Footer/>}/>
            <Route path="/atm/link" element={<Footer/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/" element={<LoginForm/>}/> {/* Route mặc định */}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
>>>>>>> 07e90c071c838ac1e1993cd3ed1eddeae8d898b1
