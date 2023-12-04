import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";

export const SideBar = () => {
  return (
    <div className='p-2'>
        <div className="top mt-5">CL-Admin</div>
        <hr />
        <div className="bottom">
            <ul className='list-unstyled fw-bold'>
                <li>
                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/dashboard">
                    <MdDashboard /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/books">
                        <FaBook /> Books
                    </Link>
                </li>
                <li>
                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/students">
                        <PiStudent />Students
                    </Link>
                </li>
                <li>
                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/burrowhistory">
                        <MdHistory />Burrow History
                    </Link>
                </li>
                <li>
                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/myprofile">
                        <ImProfile />My Profile
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
