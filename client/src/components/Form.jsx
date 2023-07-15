import { Formik } from 'formik'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as yup from 'yup'
import axios from 'axios'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../state/index.js'
const Form = () => {
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userError, setUserError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false)
    const [isWho, setIsWho] = useState("")
    // const [role, setRole] = useState("employer");
    const [pageType, setPageType] = useState("login")
    const [openModal, setOpenModal] = useState(false)
    const isLogin = pageType === "login"
    const isRegister = pageType === "register"
    const initialRegisterValues = {
        username: '',
        role: '',
        email: '',
        password: '',
    }
    const initialLoginValues = {
        username: '',
        password: '',
    }
    const registerSchema = yup.object().shape({
        username: yup.string().required('Username is a required field'),
        // role: yup.string().required('Role is a required field'),
        email: yup.string().required('Email is a required field'),
        password: yup.string().required('Password is a required field'),
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('Username is a required field'),
        password: yup.string().required('Password is a required field'),
    })


    const register = async (values, onSubmitProps) => {
        console.log(values)
        try {
            const registered = (isWho === 'employer') ? (
                await axios.post(`${endpoint}/auth/employer/register`, values)
            ) : (
                await axios.post(`${endpoint}/auth/jobSeeker/register`, values)
            )
            if (registered.data.success) {
                setPageType('login');
                onSubmitProps.resetForm();
                setUserError('');
                setEmailError('');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 500) {
                    console.log('Internal Server Error:', error.response.data.error);
                } else if (error.response.data.message.userError) {
                    setUserError(error.response.data.message.userError);
                    setEmailError('');
                } else if (error.response.data.message.emailError) {
                    setEmailError(error.response.data.message.emailError);
                    setUserError('');
                }
            } else {
                console.log('Error:', error.message);
            }
        }
    };
    const login = async (values, onSubmitProps) => {
        try {
            const loggedIn = await axios.post(`${endpoint}/auth/login`, values)
            if (loggedIn.data.success) {
                dispatch(setLogin({
                    user: loggedIn.data.user,
                    token: loggedIn.data.token,
                }))
                navigate('/')
                onSubmitProps.resetForm()
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }


    const handleFormSubmit = async (values, onSubmitProps) => {
        console.log("Clicked")
        if (isLogin) await login(values, onSubmitProps)
        if (isRegister) await register({ ...values, role: isWho }, onSubmitProps)
    }
    return (
        <div className='h-full relative'>
            {openModal && (
                <div className='inset-0 fixed w-full h-full flex items-center justify-center bg-light-lightBackground opacity-90 z-10 overflow-hidden border-2 rounded-md'>
                    <div className="w-[300px] h-[50px] bg-white mx-auto rounded shadow-lg z-10 flex justify-around items-center"
                        onClick={() => {
                            setPageType('register')
                            setOpenModal(false)
                        }}>
                        <div className=' h-full w-full flex items-center justify-center hover:bg-light-primary hover:text-white cursor-pointer  rounded-l-md'
                            onClick={() => setIsWho('employer')}
                        >
                            <span>Employer</span>
                        </div>
                        <div className='h-full w-full flex items-center justify-center hover:bg-light-primary hover:text-white cursor-pointer  rounded-r-md'
                            onClick={() => setIsWho('jobSeeker')}
                        >
                            <span>Job Seeker</span>
                        </div>
                    </div>
                </div>

            )}
            <div
                className='bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[2rem] font-semiBold text-light-primary h-[6rem] '
            >
                <h2>{isLogin ? "Login" : "Register"}</h2>
            </div>
            <div className='min-h-[78vh] py-4 flex'>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={isRegister ? initialRegisterValues : initialLoginValues}
                    validationSchema={isRegister ? registerSchema : loginSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        resetForm,
                        handleSubmit
                    }) => (
                        <div className='w-full flex items-center justify-center'>

                            <form
                                className='w-[400px] md:w-[500px] border-2 py-[2rem] px-[1rem] rounded-md flex flex-col gap-8 shadow-lg'
                                onSubmit={handleSubmit}
                            >
                                <div
                                    className='flex flex-col gap-2'
                                >
                                    <label htmlFor="username" className='text-lg  text-light-primary'>Username<span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id='username'
                                        name='username'
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Username'
                                        className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                                    />
                                    {touched.username && errors.username ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.username} </div>) : null}
                                    {touched.username && isRegister && <span className='text-red-600 italic text-sm'>{userError}</span>}
                                </div>

                                {isRegister && (
                                    <>
                                        <div
                                            className='hidden'
                                        >
                                            <input
                                                name='role'
                                                type='hidden'
                                                value={isWho}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />

                                        </div>
                                        <div
                                            className='flex flex-col gap-2'
                                        >
                                            <label htmlFor="email" className='text-lg  text-light-primary'>Email<span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id='email'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder='Email'
                                                className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                                            />
                                            {touched.email && errors.email ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.email} </div>) : null}
                                            <span className='text-red-600 italic text-sm'>{emailError}</span>
                                        </div>

                                    </>
                                )
                                }


                                <div
                                    className='flex flex-col gap-2'
                                >
                                    <label htmlFor="password" className='text-lg  text-light-primary'>Password <span className="text-red-500">*</span></label>
                                    <input
                                        type="password"
                                        id='password'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Password'
                                        className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                                    />
                                    {touched.password && errors.password ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.password} </div>) : null}
                                </div>
                                <button type="submit" className='w-full text-lg'><Button content={isLogin ? "Login" : "Register"} /></button>
                                <div
                                    onClick={() => {

                                        resetForm()
                                        setUserError('');
                                        setEmailError('');
                                    }}
                                    className='text-sm underline cursor-pointer text-light-primary'
                                >
                                    {isLogin ? <span onClick={() => setOpenModal(true)}>Don't have an account ? Sign Up</span> : <span onClick={() => setPageType("login")}>Have an account ? Login</span>}
                                </div>
                            </form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Form