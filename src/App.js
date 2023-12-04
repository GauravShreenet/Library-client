
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
import { PrivateRouter } from './component/layout/private-route/PrivateRouter';

function App() {
  return (
    <div className="">
      <Routes>
        {/* public pages */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* private pages */}
        <Route path='/admin-signup' element={
        <PrivateRouter>
          <AdminSign />
        </PrivateRouter>
        } />
        <Route path='/dashboard' element={
        <PrivateRouter>
          <Dashboard />
        </PrivateRouter>
        } />
        <Route path='/books' element={
        <PrivateRouter>
          <Books />
        </PrivateRouter>
        } />
        <Route path='/students' element={
        <PrivateRouter>
          <Students />
        </PrivateRouter>
        } />
        <Route path='/burrowhistory' element={
        <PrivateRouter>
          <BurrowHistory />
        </PrivateRouter>
        } />
        <Route path='/myprofile' element={
        <PrivateRouter>
          <MyProfile />
        </PrivateRouter>
        } />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
