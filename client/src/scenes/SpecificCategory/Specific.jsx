import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux'
import JobCard from '../../components/JobCard';
const Specific = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { jobs } = useSelector((store) => store.userData)

  const jobsByCategory = jobs.filter(
    (item) => item.category === id
  )
  console.log(jobsByCategory)
  if(jobsByCategory.length===0){
    return (
      <div className='w-full h-[78vh] flex flex-col md:flex-row items-center justify-center text-light-primary'>
        No Jobs Found for <span className='underline px-1 italic'> {id}</span> category! <span className='px-1 cursor-pointer' onClick={()=> navigate('/categories')}>Please select another one...</span>
      </div>
    )
  }
  return (
    <div className='text-light-primary flex flex-col gap-4'>
      <div className='bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
        <h2>Category - {id} </h2>
      </div>
      <div className='w-full h-full  flex flex-col gap-4 items-center justify-center'>
        <div className='w-full max-w-[1200px]  py-[1rem] px-[4rem] xl:px-0 flex flex-col gap-4 items-center justify-center'>
          {jobsByCategory.map((job) => (
            <JobCard job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Specific