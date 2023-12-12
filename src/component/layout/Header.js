import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaRegIdBadge } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { MdDashboard } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../pages/user_signup/userAction';

export const Header = () => {
  const {user} = useSelector((state)=> state.userInfo)
  const dispatch = useDispatch();

  return (
    <Navbar expand="md" data-bs-theme='dark' className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>CL</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            {
              user?._id ? (<>
                <Link className='nav-link d-flex align-items-center gap-1' to="/"><FaHome />Home</Link>
                <Link className='nav-link d-flex align-items-center gap-1' to="/dashboard">
                  <MdDashboard /> Dashboard
                </Link>
                <Link 
                onClick={()=>dispatch(logOutAction(user.email))}
                className='nav-link d-flex align-items-center gap-1' to="/"><IoMdLogIn />Log Out</Link>
              </>) :
                (<>
                  <Link className='nav-link d-flex align-items-center gap-1' to="/login"><IoMdLogIn />Login</Link>
                  <Link className='nav-link d-flex align-items-center gap-1' to="/signup"><FaRegIdBadge />Signup</Link>
                </>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


