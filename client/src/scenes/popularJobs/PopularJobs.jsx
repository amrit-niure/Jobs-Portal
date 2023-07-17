import React, { useEffect } from 'react'
import JobCard from '../../components/JobCard'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const PopularJobs = () => {
  const dispatch = useDispatch()
  const {jobs} = useSelector((store)=> store.userData)
  return (
    <div 
    className='flex  flex-col items-center justify-center  pb-[2rem] gap-8'
    >
    <div>
    <h1
    className='text-light-primary font-semibold text-xl'
    >Listed Jobs</h1>
    </div>
<div className='w-[80vw] flex flex-col gap-8'>
{jobs.slice(0, 5).map((job,index)=>(
  <JobCard key={index} job={job}/>
))}

</div>
    </div>
  )
}

export default PopularJobs