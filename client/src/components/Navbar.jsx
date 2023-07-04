import React from 'react'
import { Outlet } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
const Navbar = () => {

    const [mobileMenu, setMobileMenu] = React.useState(false)

    const navigate = useNavigate()
    return (
        <div className='h-[7vh]'>
            <nav
                className='flex justify-between items-center h-full px-[2rem] md:px-[10rem]'
            >
                <div
                    className='text-2xl md:text-3xl font-bold text-light-primary cursor-pointer '
                    onClick={() => navigate('/')}
                >
                    Jobs Portal
                </div>
                {/* Desktop nav */}
                <div
                    className='hidden gap-4 md:flex '
                >
                    <div className='flex items-center gap-2 text-light-primary cursor-pointer'>
                        <BiLogInCircle className='text-xl' />
                        <h4

                        >Login</h4>
                    </div>
                    <div>
                        <Button content={"Post a Job"} />
                    </div>
                </div>
                {/* Mobile nav */}
                <div
                    className='cursor-pointer md:hidden'
                    onClick={() => setMobileMenu(prev => !prev)}
                >
                    <HiOutlineMenuAlt1 className='text-3xl ' />
                </div>
                {mobileMenu &&
                    <div
                        className='absolute right-[5rem] top-[50px] bg-light-tertiary p-[1rem] rounded-md'
                    >
                        <div
                            className='flex flex-col gap-4'
                        >
                            <div className='flex items-center gap-2 text-light-primary cursor-pointer'>
                                <BiLogInCircle className='text-xl' />
                                <h4
                                    onClick={() => setMobileMenu(false)}
                                >Login</h4>
                            </div>
                            <div
                                onClick={() => setMobileMenu(false)}
                            >
                                <Button content={"Post a Job"} />
                            </div>
                        </div>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar