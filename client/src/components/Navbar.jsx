import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiLogInCircle } from 'react-icons/bi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { setLogout } from '../state'
const Navbar = ({ isAuth, setIsAuth }) => {

    const [mobileMenu, setMobileMenu] = React.useState(false)
    // const history = useHistory()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token, user } = useSelector((store) => store.userData)
    const [userType, setUserType] = useState('')
    useEffect(() => {
        if (token) {
            setIsAuth(true)
            setUserType(user.role)

        }
    }, [token])
    const isSeeker = userType === "jobSeeker"
    const isEmployer = userType === "employer"


    return (
        <div className='w-full flex items-center justify-center px-[2rem] md:px-[10rem]  h-[7vh] py-[2rem]'>
            <nav
                className='max-w-[1200px] w-[90vw] flex justify-between items-center h-full '
            >
                <div
                    className='text-2xl md:text-3xl font-bold text-light-primary cursor-pointer '
                    onClick={() => navigate('/')}
                >
                    <div >
                        <span className='font-titleFont text-4xl'>JOB</span>
                        <span className='font-titleFont text-2xl'>Hunt</span>
                    </div>
                </div>
                {/* Desktop nav */}
                <div
                    className='hidden gap-4 md:flex '
                >
                    {token && <div className='hidden gap-4 md:flex'>
                        <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                            navigate('/')
                        }}>
                            <h3>Home</h3>
                        </div>
                        <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                            navigate('/alljobs')
                        }}>
                            <h3>All Jobs</h3>
                        </div>
                        {isEmployer && <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                            navigate(`/listedjobs/${user._id}`)
                        }}>
                            <h3>My Listing</h3>
                        </div>}
                        {isEmployer && <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                            navigate(`/applications/${user._id}`)
                        }}>
                            <h3>Applications</h3>
                        </div>}
                    </div>}
                    {isAuth ? (


                        <div className='flex items-center gap-2 text-light-primary cursor-pointer'
                            onClick={() => {
                                dispatch(setLogout())
                                setIsAuth(false)
                                navigate('/')
                            }
                            }
                        >
                            <BiLogInCircle className='text-xl' />
                            <h4
                            >Logout</h4>
                        </div>) : (

                        <div className='flex items-center gap-2 text-light-primary cursor-pointer border-2 px-2 py-1 rounded-md border-light-primary hover:bg-light-primary hover:text-white'
                            onClick={() => navigate('/')}
                        >
                            <BiLogInCircle className='text-xl' />
                            <h4
                            >Login</h4>
                        </div>

                    )}
                    {token &&
                        <div>
                            {isEmployer && <div onClick={() => navigate('../createjob')}>
                                <Button content={"Post a Job"} />
                            </div>}
                            {isSeeker && <div onClick={() => navigate(`/appliedjobs/${user._id}`)}>
                                <Button content={"Applied Jobs"} />
                            </div>}
                        </div>
                    }
                </div>
                {/* Mobile nav */}
                <div
                    className='cursor-pointer md:hidden '
                    onClick={() => setMobileMenu(prev => !prev)}
                >
                    <HiOutlineMenuAlt1 className='text-3xl ' />
                </div>
                {mobileMenu &&
                    <div
                        className='absolute right-[5rem] top-[50px] bg-light-tertiary p-[1rem] rounded-md z-10'
                    >

                        <div
                            className='flex flex-col gap-4'
                        >
                            {isAuth && <div className='gap-4 flex flex-col'>
                                <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                                    navigate('/alljobs')
                                    setMobileMenu(false)
                                }}>
                                    <h3>All Jobs</h3>
                                </div>
                                {isEmployer && <div className='flex items-center gap-2 text-light-primary cursor-pointer' onClick={() => {
                                    navigate(`/listedjobs/${user._id}`)
                                    setMobileMenu(false)
                                }}>
                                    <h3>My Listing</h3>
                                </div>}
                            </div>}
                            {isAuth ? (

                                <div className='flex items-center gap-2 text-light-primary cursor-pointer'>
                                    <BiLogInCircle className='text-xl' />
                                    <h4
                                        onClick={() => {
                                            setMobileMenu(false)
                                            dispatch(setLogout())
                                            setIsAuth(false)
                                            navigate('/')
                                        }}
                                    >Logout </h4>
                                </div>) : (
                                <div className='flex items-center gap-2 text-light-primary cursor-pointer'>
                                    <BiLogInCircle className='text-xl' />
                                    <h4
                                        onClick={() => {
                                            setMobileMenu(false)
                                            navigate('/')
                                        }}
                                    >Login</h4>
                                </div>
                            )}

                            {isAuth &&
                                <div>
                                    {isEmployer && <div onClick={() => {
                                        navigate('../createjob')
                                        setMobileMenu(false)
                                    }}>
                                        <Button content={"Post a Job"} />
                                    </div>}
                                    {isSeeker && <div onClick={() => {
                                        navigate(`/appliedjobs/${user._id}`)
                                        setMobileMenu(false)
                                    }}>
                                        <Button content={"Applied Jobs"} />
                                    </div>}
                                </div>
                            }
                        </div>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar