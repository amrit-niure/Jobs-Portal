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
        <div className='w-full flex items-center justify-center px-[4rem] md:px-[10rem]  h-[7vh] py-[2rem]'>
            <nav
                className='max-w-[1200px] w-[70vw] flex justify-between items-center h-full '
            >
                <div
                    className='text-2xl md:text-3xl font-bold text-light-primary cursor-pointer '
                    onClick={() => navigate('/home')}
                >
                    Jobs Portal
                </div>
                {/* Desktop nav */}
                <div
                    className='hidden gap-4 md:flex '
                >
                    <div className='flex items-center gap-2 text-light-primary cursor-pointer'
                    onClick={()=> navigate('/')}
                    >
                        <BiLogInCircle className='text-xl'/>
                        <h4
                        >Login</h4>
                    </div>
                    <div onClick={()=> navigate('../createjob')}>
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
                                     onClick={() => {setMobileMenu(false)
                                        navigate('/')}}
                                >Login</h4>
                            </div>
                            <div
                                onClick={() => {setMobileMenu(false)
                                     navigate('/createjob')}}
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