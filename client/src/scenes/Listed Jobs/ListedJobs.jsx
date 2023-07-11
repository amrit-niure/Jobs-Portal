import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import { FiEye, FiEdit2 } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ListedJobs = () => {
  const navigate = useNavigate()
  const [row, setRow] = useState([])
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = '64aa1e7fe484184213d14610'
        const response = await axios.get(`http://192.168.0.8:5000/listedjobs/${userID}`)
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

const handelDelete = async (id) => {
 const deleted = await axios.delete(`http://localhost:5000/delete/${id}`)
}


  return (
    <div className="text-light-primary">
      <div className="bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold">
        <h2>Listed Jobs</h2>
      </div>
      <div className="w-full flex items-center justify-center p-[2rem] text-light-primary">
        <table className="w-[70vw] bg-white border border-gray-200 ">
          <thead className="bg-gray-100 border-b text-lg">
            <tr className="border-2">
              <th className="border-r py-[1rem] px-4 text-left">Job Title</th>
              <th className="border-r py-[1rem] px-4 text-left">Company</th>
              <th className="border-r py-[1rem] px-4 text-left">Type</th>
              <th className="border-r py-[1rem] px-4 text-left">Posted Date</th>
              <th className="border-r py-[1rem] px-4 text-left">Deadline</th>
              <th className="border-r py-[1rem] px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {row.map((item) => (
              <tr className="border-2">
                <td className="border-r py-[1rem] px-4">{item.company}</td>
                <td className="border-r py-[1rem] px-4">{item.title}</td>
                <td className="border-r py-[1rem] px-4">{item.type}</td>
                <td className="border-r py-[1rem] px-4">{item.createdAt.substring(0, 10)}</td>
                <td className="border-r py-[1rem] px-4">{item.deadline.substring(0, 10)}</td>
                <td className="border-r py-[1rem] px-4 w-[150px]">
                  <div className='flex items-center gap-4 text-xl  '>
                    <div onClick={() => navigate(`../details/${item._id}`)}>
                      <Tooltip title="View">
                        <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}>
                          <FiEye />
                        </IconButton>
                      </Tooltip>

                    </div>
                    <div>
                    <Tooltip title="View">
                        <IconButton style={{ fontSize: '1.25rem', color: '#861D88' }}> 
                        <FiEdit2 />
                        </IconButton>
                      </Tooltip>
                     
                    </div>
                    <div onClick={() => handelDelete(item._id)}>
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
        {/* <Table  /> */}
      </div>
    </div>
  );
};

export default ListedJobs;
