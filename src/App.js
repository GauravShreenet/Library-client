
import './App.css';
import { ToastContainer } from 'react-toastify';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/user_signup/Login';
import SignUp from './pages/user_signup/SignUp';
import AdminSign from './pages/admin_signup/AdminSign';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="">
      <Routes>
        {/* public pages */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* private pages */}
        <Route path='/admin-signup' element={<AdminSign />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
