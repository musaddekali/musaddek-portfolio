import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout