import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { FaHome, FaRegIdBadge } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

export const Header = () => {
  return (
    <Navbar expand="md" data-bs-theme='dark' className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>CL</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Link className='nav-link' to="/"><FaHome />Home</Link>
            <Link className='nav-link' to="/login"><IoMdLogIn />Login</Link>
            <Link className='nav-link' to="/signup"><FaRegIdBadge />Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


