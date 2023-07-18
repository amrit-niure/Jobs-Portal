import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css'
import Table from './Table';
import { FiEye, FiEdit2 } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const ListedJobs = () => {
  const {userId} = useParams()
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [row, setRow] = useState([])
  const [loading, setLoading] = useState(true); // Add loading state
  const { token,user } = useSelector((store) => store.userData)
  const [userType,setuserType] = useState('')
  useEffect(() => {
    if(token){
      if (user.role === 'employer') {
        setuserType('employer')
      }
    else if (user.role === 'jobSeeker') {
        setuserType('jobSeeker')
      }

    }
  }, [token])
  const isEmployer = userType === 'employer'
  const isSeeker = userType === 'jobSeeker'

  const handelDelete = async (id) => {
    try {
      isEmployer ? await axios.delete(`${endpoint}/delete/${id}`) : await axios.delete(`${endpoint}/delete/application/${id}`) 
    } catch (err) {
      console.log(err)
    }
    
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = isEmployer ? (
          await axios.get(`${endpoint}/listedjobs/${user._id}`)
        ) : (
          await axios.get(`${endpoint}/appliedjobs/${user._id}`)
        )
       isEmployer ? setRow(response.data.myListing) : setRow(response.data.appliedJobs)
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [loading])

console.log(loading)
if (loading) {
  return <div>Loading...</div>
}

console.log(row)

  if (row.length === 0) {
    return (
      <div className='w-full min-h-[78vh] flex items-center justify-center'>
        {isEmployer ? "You have not posted any jobs." : "No applied jobs."}
        { isEmployer && <span className='text-4xl text-light-primary cursor-pointer hover:text-blue-900' onClick={() => navigate('/createjob')}>
          <Tooltip title="Post">
            <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
              <IoMdAdd />
            </IconButton>
          </Tooltip>
        </span>}
      </div>
    );
  }
  return (
    <div className="text-light-primary">
      <div className="bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold">
       {isEmployer ? <h2>My Listings</h2> : <h2>Applied Jobs</h2>  }
      </div>

      <div className="w-full flex items-center justify-center p-4 lg:p-8 text-light-primary">
        <div className="overflow-x-auto">
          <table className="w-full lg:w-[70vw] bg-white border border-gray-200 text-sm md:text-lg">
            <thead className="bg-gray-100 border-b">
              <tr className="border-2 ">
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Job </th>
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Company</th>
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Type</th>
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap ">Posted Date</th>
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">{isEmployer ? "Deadline" : 'Applied Date'}</th>
                <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.map((item) => (
                <tr className="border-2">
                  <td className="border-r py-4 lg:py-[1rem] px-4">{ isEmployer ? item.title : item.jobId?.title ?? 'Sorry'}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{ isEmployer ? item.company : item.jobId?.company  ?? "This job was"}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{ isEmployer ? item.type : item.jobId?.type ?? "Deleted"}</td>
                  {/* <td className="border-r py-4 lg:py-[1rem] px-4">{ isEmployer ? item.createdAt?.substring(0, 10) : item.jobId.company   }</td> */}
                  <td className="border-r py-4 lg:py-[1rem] px-4">{ isEmployer ? item.createdAt.substring(0, 10) :item.jobId?.createdAt.substring(0, 10) ?? "Try Another One" }</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{  item.createdAt.substring(0, 10)  }</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4 w-[150px]">
                    <div className="flex items-center gap-4 text-xl">
                      <div onClick={() => {
                       isEmployer ? navigate(`../details/${item._id}`) : navigate(`../details/${item.jobId?._id}`) 
                        }}>
                        <Tooltip title="View">
                          <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                            <FiEye />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div onClick={() => {
                       isEmployer ? navigate(`/createjob/${item._id}`) : navigate(`/applyjob/${item.jobId?._id}/?action=update`)
                        }}>
                        <Tooltip title="Edit">
                          <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                            <FiEdit2 />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div onClick={() => {
                      handelDelete(item._id)
                        setRow((prevValue) => prevValue.filter((data) => isEmployer ? data._id !== item._id : data._id !== item._id));
                      }}>
                        <Tooltip title="Delete">
                          <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                            <MdOutlineDeleteOutline />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

{/* <Table  /> */ }
export default ListedJobs;
