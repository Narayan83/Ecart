import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/Home/index';
import About from './pages/About/index';
import LoginPage from './pages/Login/login'; // Import your Login component
import RegistrationPage from './pages/Register/Registration';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/about" element={<About/>}/>
        <Route exact={true} path="/login" element={<LoginPage/>}/>
        <Route exact={true} path="/register" element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
