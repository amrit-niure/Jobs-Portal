import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const CreateJob = () => {

  const initialJobValue = {
    jobCreator: 'dfsfsdfs4r43653345dfge',
    company: '',
    website: '',
    title: '',
    category: '',
    type: '',
    location: '',
    salary: '',
    experience: '',
    qualification: '',
    deadline: '',
    applicationLink: '',
    description: '',
  }
  const jobSchema = yup.object().shape({

    company: yup.string().required("Required"),
    website: yup.string().required("Required"),
    title: yup.string().required("Required"),
    category: yup.string().required("Required"),
    type: yup.string().required("Required"),
    location: yup.string().required("Required"),
    salary: yup.string().required("Required"),
    experience: yup.string().required("Required"),
    qualification: yup.string().required("Required"),
    deadline: yup.string().required("Required"),
    applicationLink: yup.string().required("Required"),
    description: yup.string().required("Required"),
  })
  const handleFormSubmit = async (values, onSubmitProps) => {
 try {
    const create = await axios.post('http://192.168.0.8:5000/createjob',values)
    if(create.data.success){
      alert("Job Posted Sucessfully.")
      onSubmitProps.resetForm()
  }
 } catch (error) {
  console.log(error)
 }
  }
  return (
    <div className='text-light-primary'>
      <div
        className='bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[1rem] font-semiBold '
      >
        <h2 className=''>Create a Job</h2>
      </div>
      <div className='w-full'>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialJobValue}
          validationSchema={jobSchema}
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
            <div className='w-full flex items-center justify-center p-[2rem] '>

              <form
                onSubmit={handleSubmit}
                className=' border-2 max-w-[1000px] w-[70vw] py-[2rem] px-[1rem] rounded-md flex flex-col gap-8'
              >
                 <div
                    className='flex w-full flex-col gap-2'
                  >
                 
                    <input
                      type="hidden"
                      id='jobCreator'
                      name='jobCreator'
                      value={values.jobCreator}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                <div
                  className='flex gap-4 flex-col md:flex-row md:gap-8'
                >
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="company" className='text-lg  text-light-primary'>Company Name<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='company'
                      name='company'
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Name'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.company && errors.company ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.company} </div>) : null}

                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Company Website<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='website'
                      name='website'
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Website Link'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.website && errors.website ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.website} </div>) : null}
                  </div>
                </div>


                <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg  text-light-primary'>Job Title<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id='title'
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Title'
                    className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                  />
                  {touched.title && errors.title ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.title} </div>) : null}
                </div>

                <div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Job Category<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='category'
                      name='category'
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Category'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.category && errors.category ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.category} </div>) : null}
                  </div>

                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Job Type<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='type'
                      name='type'
                      value={values.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Category'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.type && errors.type ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.type} </div>) : null}
                  </div>
                </div>
                <div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Job Location<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='location'
                      name='location'
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Location'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.location && errors.location ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.location} </div>) : null}
                  </div>

                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Salary<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='salary'
                      name='salary'
                      value={values.salary}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Category'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.salary && errors.salary ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.salary} </div>) : null}
                  </div>
                </div>
                <div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Experience <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='experience'
                      name='experience'
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Experience'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.experience && errors.experience ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.experience} </div>) : null}
                  </div>

                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Qualification<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='qualification'
                      name='qualification'
                      value={values.qualification}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Qualification'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.qualification && errors.qualification ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.qualification} </div>) : null}
                  </div>
                </div>
                <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Application Deadline<span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      id='deadline'
                      name='deadline'
                      value={values.deadline}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Application Deadline'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.deadline && errors.deadline ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.deadline} </div>) : null}
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Application Link<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='applicationLink'
                      name='applicationLink'
                      value={values.applicationLink}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Application Link'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.applicationLink && errors.applicationLink ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.applicationLink} </div>) : null}
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Job Description<span className="text-red-500">*</span></label>
                    <textarea
                      type="text"
                      id='description'
                      name='description'
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Job Description'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary h-32 max-h-[1000px]'
                    />
                    {touched.description && errors.description ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.description} </div>) : null}
                  </div>
                  <button type='submit' className='w-[100px] self-end'>
                    <Button content={"Post"} />
                  </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CreateJob