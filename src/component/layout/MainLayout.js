import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout = ({children}) => {
  return (
    <div>
        {/* header */}
        <Header />
        {/* main area */}
        <main className='main'>{children}</main>
        {/* footer */}
        <Footer />

    </div>
  )
}
