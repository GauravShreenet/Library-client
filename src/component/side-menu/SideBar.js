import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaBook, FaStar } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { useSelector } from 'react-redux';

export const SideBar = () => {
    const { user } = useSelector((state) => state.userInfo);
    return (
        <div className='p-2'>
            <div className="top mt-5">CL-{(user?.role)}</div>
            <hr />
            <div className="bottom">
                <ul className='list-unstyled fw-bold'>
                <li>
                        <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/dashboard">
                            <MdDashboard /> Dashboard
                        </Link>
                    </li>
                    {
                        user?.role === "admin" && (
                            <>
                                <li>
                                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/books">
                                        <FaBook /> Books
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/reviews">
                                        <FaStar /> Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/students">
                                        <PiStudent />Students
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/all-admins">
                                        <PiStudent />All-Admins
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/burrowhistory">
                                        <MdHistory />Burrow History
                                    </Link>
                                </li>
                            </>
                        )
                    }

                    <li>
                        <Link className='text-decoration-none nav-link d-flex align-items-center gap-2 mt-4' to="/mybooks">
                            <MdHistory />My Books
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
