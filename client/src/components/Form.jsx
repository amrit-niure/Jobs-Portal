import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../state/index.js'
const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [pageType, setPageType] = useState("login")
    const isLogin = pageType === "login"
    const isRegister = pageType === "register"
    const initialRegisterValues = {
        username: '',
        password: '',
    }
    const registerSchema = yup.object().shape({
        username: yup.string().required('Username is a required field'),
        password: yup.string().required('Password is a required field'),
    })

const register = async (values,onSubmitProps) => {
    try {
        // const registered = await axios.post('http://192.168.0.8:5000/auth/register',values)
        const registered = await axios.post('http://10.35.0.165:5000/auth/register',values)
        if(registered.data.success){
            setPageType('login')
            onSubmitProps.resetForm()
        }
    } catch (error) {
        console.log(error)
    }
}
const login = async (values,onSubmitProps) => {
    try {
        // const loggedIn = await axios.post('http://192.168.0.8:5000/auth/login',values)
        const loggedIn = await axios.post('http://10.35.0.165:5000/auth/login',values)
        if(loggedIn.data.success){
            dispatch(setLogin({
                user : loggedIn.data.user,
                token : loggedIn.data.token,
            }))
        navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
}


    const handleFormSubmit = async (values, onSubmitProps) => {
        if(isLogin) await login(values,onSubmitProps)
        if(isRegister) await register(values,onSubmitProps)
    }
    return (
        <div>
            <div
                className='bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[2rem] font-semiBold text-light-primary'
            >
                <h2>{isLogin ? "Login" : "Register"}</h2>
            </div>
            <div>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialRegisterValues}
                    validationSchema={registerSchema}
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
                        <div className='w-full h-[70vh] flex items-center justify-center'>

                            <form
                                className='w-[300px] md:w-[500px] border-2 py-[2rem] px-[1rem] rounded-md flex flex-col gap-8'
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
                                </div>
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
                                     onClick={()=> {
                                        setPageType(isLogin ? 'register' : 'login')
                                        resetForm()
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