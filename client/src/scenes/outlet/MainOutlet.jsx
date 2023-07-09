import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MainOutlet = ({isAuth,setIsAuth}) => {
    return (
        <div
            className=''
        >
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainOutlet