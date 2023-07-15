import React from 'react'
import { useSelector } from 'react-redux'
import { FiEye, FiEdit2 } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Applied = () => {
  const navigate = useNavigate()

  const { jobs } = useSelector((store) => store.userData)

  return (
    <div className="text-light-primary">
    <div className="bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold">
      <h2>My </h2>
    </div>

    <div className="w-full flex items-center justify-center p-4 lg:p-8 text-light-primary">
      <div className="overflow-x-auto">
        <table className="w-full lg:w-[70vw] bg-white border border-gray-200 text-sm md:text-lg">
          <thead className="bg-gray-100 border-b">
            <tr className="border-2 ">
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Job Title</th>
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Company</th>
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Type</th>
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap ">Applied Date</th>
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Deadline</th>
              <th className="border-r py-2 lg:py-[.5rem] px-4 text-left font-semiBold whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item) => (
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
  )
}

export default Applied