import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MainOutlet = ({isAuth,setIsAuth}) => {
    return (
        <div
           
        >
            <div  className='min-h-[96vh]'>
            <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainOutlet