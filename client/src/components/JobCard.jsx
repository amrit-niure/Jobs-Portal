import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { GoLocation, } from 'react-icons/go'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineDollar } from 'react-icons/ai'


const JobCard = ({ job }) => {
  const navigate = useNavigate()

  return (

    <div className='flex flex-col md:flex-row w-full  justify-between  items-center border-2 px-[2rem] py-[2rem] md:py-[0.5rem] shadow-md rounded-md gap-4 '>
      <div className='flex gap-4 items-center flex-col md:flex-row '>
        <div
          className='flex  items-center justify-center w-[100px] h-[100px] border-2 rounded-full shadow-md'
        >
          <div className='relative text-light-primary'>
            <span className='border-[1px] border-light-primary absolute w-[65px] bottom-1 right-0'></span>
            <span className='font-titleFont text-2xl'>JOB</span>
            <span className='font-titleFont text-xl '>Hunt</span>
          </div>
        </div>
        <div
          className='text-light-primary flex flex-col'
        >
          <h2>{job.company}</h2>
          <h1 className='text-xl font-bold'>{`${job.title} (${job.experience})`}</h1>
          <div
            className='flex flex-col md:flex-row flex-wrap gap-2 text-sm md:gap-4'
          >
            <div className=' w-fit  bg-light-primary bg-opacity-10 px-4 py-2 md:py-1 rounded-full cursor-pointer flex items-center gap-2'>
              <span ><GoLocation  className='text-lg'/></span> Location : {job.location}
            </div>
            <div className=' w-fit bg-light-primary  bg-opacity-10 px-4 py-1 rounded-full cursor-pointer flex items-center gap-2'>
              <span className='text-lg'><MdWorkOutline  className='text-lg' /></span> {job.type}
            </div>
            <div className='w-fit bg-light-primary  bg-opacity-10 px-4 py-1 rounded-full cursor-pointer flex items-center gap-2'>
              <span className='text-lg'><AiOutlineDollar  className='text-lg' /></span> Salary : {job.salary}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => navigate(`../details/${job._id}`)}>
        <Button content={"View Details"} />
      </div>
    </div>
  )
}

export default JobCard