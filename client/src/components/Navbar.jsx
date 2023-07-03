import React from 'react'
import { Outlet } from 'react-router-dom'
import {BiLogInCircle} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav
            className='flex justify-between py-[1rem] '
        >
            <div
            className='text-2xl md:text-3xl font-bold text-light-primary cursor-pointer '
            onClick={() => navigate('/')}
            >
                Jobs Portal
            </div>
            <div
                className='hidden gap-4 md:flex '
            >
                <div className='flex items-center gap-2 text-light-primary cursor-pointer'>
                   <BiLogInCircle className='text-xl'/> 
                   <h4>Login</h4>
                </div>
                <div>
                 <Button content={"Post a Job"} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar