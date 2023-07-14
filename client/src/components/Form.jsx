import { Formik } from 'formik'
import React, { useState } from 'react'
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
    const [loading,setLoading] = useState(false)
    const [pageType, setPageType] = useState("login")
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
        role: yup.string().required('Role is a required field'),
        email: yup.string().required('Email is a required field'),
        password: yup.string().required('Password is a required field'),
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('Username is a required field'),
        password: yup.string().required('Password is a required field'),
    })

    // const register = async (values, onSubmitProps) => {
    //     try {
    //         const registered = await axios.post(`${endpoint}/auth/register`, values)
    //         if (registered.data.success) {
    //             setPageType('login')
    //             onSubmitProps.resetForm()
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.status === 400) {
    //             return  setErrorMessage(error.response.data.message);
    //           } else {
    //             console.error('Error logging in:', error.message);
    //           }
    //     }
    // }

    const register = async (values, onSubmitProps) => {
        try {
            const registered = await axios.post(`${endpoint}/auth/register`, values);
            if (registered.data.success) {
                setPageType('login');
                onSubmitProps.resetForm();
                setUserError('');
                setEmailError('');
            }
        } catch (error) {
            if (error.response.data.message.userError) {
                setUserError(error.response.data.message.userError);
                setEmailError('');
            } else if (error.response.data.message.emailError) {
                setEmailError(error.response.data.message.emailError);
                setUserError('');
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
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }


    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps)
        if (isRegister) await register(values, onSubmitProps)
    }

    return (
        <div className='h-full'>
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
                                   { touched.username && isRegister && <span className='text-red-600 italic text-sm'>{userError}</span>}
                                </div>

                                {isRegister && (
                                    <>


                                        <div
                                            className='flex w-full flex-col gap-2'
                                        >
                                            <label htmlFor="type" className='text-lg  text-light-primary'>Role<span className="text-red-500">*</span></label>
                                            <select className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                                                value={values.role}
                                                name='role'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option value="" disabled >Role</option>
                                                <option value="employer">Employer</option>
                                                <option value="jobSeeker">Job Seeker</option>
                                            </select>
                                            {touched.role && errors.role ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.role} </div>) : null}
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
                                <button type="submit" className='w-full text-lg '><Button content={isLogin ? "Login" : "Register"} /></button>
                                <div
                                    onClick={() => {
                                        setPageType(isLogin ? 'register' : 'login')
                                        resetForm()
                                        setUserError('');
                                        setEmailError('');
                                    }}
                                    className='text-sm underline cursor-pointer text-light-primary'
                                >
                                    {isLogin ? "Don't have an account ? Sign Up" : "Have an account ? Login"}
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