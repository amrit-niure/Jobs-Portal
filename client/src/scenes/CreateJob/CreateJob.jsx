import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setJobs } from '../../state'
import { useParams } from 'react-router-dom';
import JoditEditor, { Jodit } from 'jodit-react'
const CreateJob = () => {

  const { id } = useParams();
  console.log(id)
  const isUpdate = Boolean(id);
  // const isUpdate = false
  
  console.log(isUpdate)
  const { user, jobs } = useSelector((store) => store.userData)
  const updateJob = isUpdate ? jobs.find((item) => item._id === id) : null
  console.log(updateJob)

  const dispatch = useDispatch()

  const config = {
    placeholder: `Write clear Job Description with requirements, qualification and other additional information...`
  }


  const initialValues =!updateJob ? {
    jobCreator: `${user._id}`,
    company: '',
    website: '',
    level: '',
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
  }:{
    jobCreator: `${user._id}`,
    company: `${updateJob.company}`,
    website: `${updateJob.website}`,
    level: `${updateJob.level}`,
    title: `${updateJob.title}`,
    category: `${updateJob.category}`,
    type: `${updateJob.type}`,
    location: `${updateJob.location}`,
    salary: `${updateJob.salary}`,
    experience: `${updateJob.experience}`,
    qualification: `${updateJob.qualification}`,
    deadline: `${updateJob.deadline}`,
    applicationLink: `${updateJob.applicationLink}`,
    description: `${updateJob.description}`,
  }

  const jobSchema = yup.object().shape({
    jobCreator: yup.string().required("Required"),
    company: yup.string().min(3).required("Required"),
    website: yup
      .string()
      .required("Required"),
    level: yup.string().required("Required"),
    title: yup.string().required("Required"),
    category: yup.string().required("Required"),
    type: yup.string().required("Required"),
    location: yup.string().required("Required"),
    salary: yup.string().required("Required"),
    experience: yup.string().required("Required"),
    qualification: yup.string().required("Required"),
    deadline: yup.string().required("Required"),
    applicationLink: yup
      .string()
      .required("Required"),
    description: yup.string().required("Required"),
  })
  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      console.log(values)
      // const create = await axios.post('http://192.168.0.8:5000/createjob', values)
      const create = await axios.post('http://10.35.0.165:5000/createjob', values)
      if (create.data.success) {
        alert("Job Posted Sucessfully.")
        // const response = await axios.get('http://192.168.0.8:5000/alljobs')
        const response = await axios.get('http://10.35.0.165:5000/alljobs')
        if (response.data.success) {
          dispatch(setJobs({ allJobs: response.data.allJobs }))
        }
        onSubmitProps.resetForm()

      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='text-light-primary w-full'>
      <div
        className='bg-light-lightBackground  text-xl md:text-2xl text-center py-[1rem] font-semiBold '
      >
        <h2 className=''>Create a Job</h2>
      </div>
      <div >
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={jobSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            resetForm,
            handleSubmit,
            setFieldValue
          }) => (
            <div className='w-full flex items-center justify-center p-[2rem] '>

              <form
                onSubmit={handleSubmit}
                className=' border-2 max-w-[1000px] w-[90vw] py-[2rem] px-[1rem] rounded-md flex flex-col gap-8'
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
                    placeholder='Job Creator'
                    className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                  />
                  {touched.jobCreator && errors.jobCreator ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.jobCreator} </div>) : null}

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
                      placeholder="Name of Employeer's Organization "
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
                      // pattern="(http://.+)|(https://.+)|(www..+)"
                      id='website'
                      name='website'
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='https://example.com'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.website && errors.website ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.website} </div>) : null}
                  </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>

                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="level" className='text-lg  text-light-primary'>Level<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id='level'
                      name='level'
                      value={values.level}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Junior, Mid, Senior'
                      className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                    />
                    {touched.level && errors.level ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.level} </div>) : null}
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
                </div>


                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="title" className='text-lg  text-light-primary'>Job Category<span className="text-red-500">*</span></label>
                    <select className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                      value={values.category}
                      name='category'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled selected>Category</option>
                      <option value="Information Technology(IT)">Information Technology(IT)</option>
                      <option value="Sales and Marketing">Sales and Marketing</option>
                      <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Healthcare and Medical">Healthcare and Medical</option>
                      <option value="Support Worker">Support Worker</option>
                      <option value="Administrative and Clerical">Administrative and Clerical</option>
                      <option value="Education and Teaching">Education and Teaching</option>
                      <option value="Finance and Accounting">Finance and Accounting</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Manufacturing and Production">Manufacturing and Production</option>
                      <option value="Legal">Legal</option>
                      <option value="Media and Communication">Media and Communication</option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Research and Development">Research and Development</option>
                      <option value="Social Services">Social Services</option>
                      <option value="Others">Others</option>
                    </select>
                    {touched.category && errors.category ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.category} </div>) : null}
                  </div>

                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="type" className='text-lg  text-light-primary'>Job Type<span className="text-red-500">*</span></label>
                    <select className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                      value={values.type}
                      name='type'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled selected>Type</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Freelancing">Freelancing</option>
                      <option value="Contract">Contract</option>
                    </select>
                    {touched.type && errors.type ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.type} </div>) : null}
                  </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
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
                    <select className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                      value={values.experience}
                      name='experience'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled selected>Experience</option>
                      <option value="Fresher/Intern">Fresher/Intern</option>
                      <option value="One Year">One Year</option>
                      <option value="Two Years">Two Years</option>
                      <option value="Three Years">Three Years</option>
                      <option value="Less Than Five Years">Less Than Five Years</option>
                      <option value="Five Years +">Five Years +</option>
                      <option value="A Decade">A Decade</option>
                      <option value="More Than A Decade">More Than A Decade</option>
                    </select>
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
                      placeholder='Diploma,Graduate, Masters, PHD, Research Level,Not Needed'
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
                    // pattern="(http://.+)|(https://.+)|(www..+)"
                    value={values.applicationLink}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='https://example.com/careers'
                    className='px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary'
                  />
                  {touched.applicationLink && errors.applicationLink ? (<div className='text-red-500 py-[0rem] text-sm '>{errors.applicationLink} </div>) : null}
                </div>
                <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg  text-light-primary'>Job Description<span className="text-red-500">*</span></label>

                  {/* <textarea
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
  */}

                  <div>
                    <JoditEditor
                      name="description"
                      config={config}
                      value={values.description}
                      onChange={(value) => setFieldValue('description', value)}
                    />
                  </div>





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