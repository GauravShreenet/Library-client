import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { SideBar } from '../side-menu/SideBar'

export const UserLayout = ({ children, title }) => {
    return (
        <div>
            <div className='d-flex'>
                    <div className='side-menu bg-dark text-light'>
                        <SideBar />
                    </div>
                    <div className='right-content w-100'>
                        {/* header */}
                        <Header />
                        <div className='p-2'>
                            <h3>{title}</h3>
                            <hr />
                        </div>
                        {/* main area */}
                        <main className='main'>{children}</main>
                        {/* footer */}
                        <Footer />
                    </div>
                </div>
        </div>
    )
}
