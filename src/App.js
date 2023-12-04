
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
import { AdminPrivateRouter, PrivateRouter } from './component/layout/private-route/PrivateRouter';
import { MyBook } from './component/my-books/MyBook';

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
        <AdminPrivateRouter>
          <Books />
        </AdminPrivateRouter>
        } />
        <Route path='/students' element={
        <AdminPrivateRouter>
          <Students />
        </AdminPrivateRouter>
        } />
        <Route path='/burrowhistory' element={
        <AdminPrivateRouter>
          <BurrowHistory />
        </AdminPrivateRouter>
        } />
        <Route path='/mybooks' element={
        <PrivateRouter>
          <MyBook />
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
