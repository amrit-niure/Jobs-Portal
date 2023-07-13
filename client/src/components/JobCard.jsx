import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
const JobCard = ({job}) => {
  const navigate = useNavigate()
  
  return (

    <div className='flex flex-col md:flex-row w-full justify-between items-center border-2 px-[2rem] py-[2rem] md:py-[0.5rem] shadow-md rounded-md gap-4 '>
        <div className='flex gap-4 items-center flex-col md:flex-row'>
        <div
        className='flex  items-center justify-center w-[100px] h-[100px] border-2 rounded-full text-white bg-light-primary'
        >
          <h1 className='text-6xl font-bold '>L</h1>
        </div>
        <div
        className='text-light-primary flex flex-col'
        >
           <h2>{job.company}</h2>
           <h1 className='text-xl font-bold'>{`${job.title} (${job.experience})`}</h1>
           <div
           className='flex flex-col md:flex-row md:gap-4'
           >
            <span>Location : {job.location}</span>
            <span>{job.type}</span>
            <span>Salary : {job.salary}</span>
            </div>
        </div>
        </div>
           <div onClick={()=> navigate(`../details/${job._id}`)}>
            <Button content={"View Details"} />
        </div>
    </div>
  )
}

export default JobCard