import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css'
import Table from './Table';
import { FiEye, FiEdit2 } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const ListedJobs = () => {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [row, setRow] = useState([])
  const [loading, setLoading] = useState(true); // Add loading state
  const { user } = useSelector((store) => store.userData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoint}/listedjobs/${user._id}`)
        setRow(response.data.myListing)
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


  if (loading) {
    // Show loading indicator while data is being fetched
    return <div>Loading...</div>;
  }
  console.log(row)
  const handelDelete = async (id) => {
    // const deleted = await axios.delete(`http://192.168.0.8:5000/delete/${id}`)
    //  const deleted = await axios.delete(`http://10.35.0.165:5000/delete/${id}`)
    // const response = await axios.get(`http://localhost:5000/listedjobs/${user._id}`)
     const deleted = await axios.delete(`${endpoint}/delete/${id}`)

  }

  return (
    <div className="text-light-primary">
      <div className="bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold">
        <h2>My Listings</h2>
      </div>

      <div className="w-full flex items-center justify-center p-4 lg:p-8 text-light-primary">
        <div className="overflow-x-auto">
          <table className="w-full lg:w-[70vw] bg-white border border-gray-200">
            <thead className="bg-gray-100 border-b text-lg">
              <tr className="border-2">
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Job Title</th>
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Company</th>
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Type</th>
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Posted Date</th>
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Deadline</th>
                <th className="border-r py-4 lg:py-[1rem] px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {row.map((item) => (
                <tr className="border-2">
                  <td className="border-r py-4 lg:py-[1rem] px-4">{item.company}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{item.title}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{item.type}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{item.createdAt.substring(0, 10)}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4">{item.deadline.substring(0, 10)}</td>
                  <td className="border-r py-4 lg:py-[1rem] px-4 w-[150px]">
                    <div className="flex items-center gap-4 text-xl">
                      <div onClick={() => navigate(`../details/${item._id}`)}>
                        <Tooltip title="View">
                          <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                            <FiEye />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div onClick={() => navigate(`/createjob/${item._id}`)}>
                        <Tooltip title="Edit">
                          <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                            <FiEdit2 />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div onClick={() => {
                        handelDelete(item._id);
                        setRow((prevValue) => prevValue.filter((data) => data._id !== item._id));
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
  );
};

{/* <Table  /> */ }
export default ListedJobs;
