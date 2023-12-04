
import './App.css';
import { ToastContainer } from 'react-toastify';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/user_signup/Login';
import SignUp from './pages/user_signup/SignUp';
import AdminSign from './pages/admin_signup/AdminSign';
import Home from './pages/home/Home';
import { Dashboard } from './pages/dashboard/Dashboard';
import {Books} from './component/books/Books';
import {Students} from './component/students/Students';
import {BurrowHistory} from './component/burrowHistory/BurrowHistory';
import { MyProfile } from './component/profile/MyProfile';

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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/books' element={<Books />} />
        <Route path='/students' element={<Students />} />
        <Route path='/burrowhistory' element={<BurrowHistory />} />
        <Route path='/myprofile' element={<MyProfile />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
