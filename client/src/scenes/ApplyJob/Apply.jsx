import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import Button from "../../components/Button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

const Apply = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get('action');
  const isUpdate = action === 'update';
  const { jobs, user } = useSelector((store) => store.userData);
  if (!jobs || !user) {
    // Render a loading state or some other fallback component if the data is not available
    return <div>Loading...</div>;
  }
  const thisJob = jobs.find((item) => item._id === id);
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true)
  const [allApplications,setAllApplications] = useState([])
// useEffect(()=> {
// const fetchApplications = async () => {
//   try {
//     const response = await axios.get(`${endpoint}/applications`)
//     if(response.data.success){
//       setAllApplications(response.data.allApplications)
//       setLoading(false)
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }
// },[])
  const initialValues = !isUpdate ? {
    applicant: `${user._id}`,
    creator: `${thisJob.jobCreator}`,
    jobId: `${thisJob._id}`,
    name: "",
    email: "",
    address: "",
    contact: "",
    qualification: "",
    links: "",
    coverLetter: "",
    resume: "",
  } : {
    applicant: `${user._id}`,
    creator: `${thisJob.jobCreator}`,
    jobId: `${thisJob._id}`,
    name: "",
    email: "",
    address: "",
    contact: "",
    qualification: "",
    links: "",
    coverLetter: "",
    resume: "",
  }
  const validationSchema = yup.object().shape({
    applicant: yup.string().required("Required"),
    creator: yup.string().required("Required"),
    jobId: yup.string().required("Required"),
    name: yup.string().required("Required"),
    address: yup.string().required("Required"),
    contact: yup.string().required("Required"),
    qualification: yup.string().required("Required"),
    // links: yup.string().required('Username is a required field'),
    // coverLetter: yup.string().required('Username is a required field'),
    // resume: yup.string().required('Username is a required field'),
  });

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      const response = await axios.post(`${endpoint}/apply/1`, values);
      if (response.data.success) {
        alert("Application submitted Sucessfully.");
        onSubmitProps.resetForm();
        navigate(`/appliedjobs/${user._id}`)
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log("Internal Server Error:", error.response.data.error);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div className="text-light-primary w-full">
      <div className="bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[2rem] font-semiBold text-light-primary h-[6rem]">
        <h2>
          Apply on <span className="underline">{thisJob.company} </span>as a{" "}
          <span className="italic">{thisJob.title} </span>
        </h2>
      </div>
      <div className="min-h-[78vh] py-4 flex">
        <div className="w-full flex items-center justify-center  p-[2rem]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              handleSubmit,
            }) => (
              <form
                className=" w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-[800px] border-2 py-[2rem] px-[1rem] rounded-md flex flex-col gap-8 shadow-lg"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  id="applicant"
                  name="applicant"
                  value={values.applicant}
                  Q
                />
                <input
                  type="hidden"
                  id="creator"
                  name="creator"
                  value={values.creator}
                />
                <input
                  type="hidden"
                  id="jobId"
                  name="jobId"
                  value={values.jobId}
                />

                <div className="flex gap-4 flex-col md:flex-row md:gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="name"
                      className="text-lg  text-light-primary"
                    >
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="name"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.name && errors.name ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.name}{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="email"
                      className="text-lg  text-light-primary"
                    >
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="email"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.email && errors.email ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.email}{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row md:gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="address"
                      className="text-lg  text-light-primary"
                    >
                      address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="address"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.address && errors.address ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.address}{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="contact"
                      className="text-lg  text-light-primary"
                    >
                      contact<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="contact"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.contact && errors.contact ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.contact}{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row md:gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="qualification"
                      className="text-lg  text-light-primary"
                    >
                      qualification<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={values.qualification}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="qualification"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.qualification && errors.qualification ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.qualification}{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="links"
                      className="text-lg  text-light-primary"
                    >
                      links<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      id="links"
                      name="links"
                      value={values.links}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="links"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.links && errors.links ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.links}{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row md:gap-8">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="coverLetter"
                      className="text-lg  text-light-primary"
                    >
                      coverLetter<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="coverLetter"
                      name="coverLetter"
                      value={values.coverLetter}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="coverLetter"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.coverLetter && errors.coverLetter ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.coverLetter}{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      htmlFor="resume"
                      className="text-lg  text-light-primary"
                    >
                      resume<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="resume"
                      name="resume"
                      value={values.resume}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="resume"
                      className="px-[1rem] focus:outline-none border-2 py-[0.5rem] rounded-md text-light-primary"
                    />
                    {touched.resume && errors.resume ? (
                      <div className="text-red-500 py-[0rem] text-sm ">
                        {errors.resume}{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
                <button type="submit" className="w-full text-lg">
                  {isUpdate ? <Button content={"Update"} /> : <Button content={"Apply"} />}

                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Apply;
