import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const MainOutlet = () => {
    return (
        <div 
        className='px-[5rem] md:px-[10rem]'
        >
            <Navbar />
            <div>
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default MainOutlet