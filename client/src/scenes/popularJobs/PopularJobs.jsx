import React from 'react'
import JobCard from '../../components/JobCard'

const PopularJobs = () => {
  return (
    <div 
    className='flex flex-col items-center justify-center  pb-[2rem] gap-8'
    >
    <div>
    <h1
    className='text-light-primary font-semibold text-xl'
    >Popular Jobs</h1>
    </div>
<div className='w-full flex flex-col gap-8'>
 <JobCard />
 <JobCard />
 <JobCard />
</div>
    </div>
  )
}

export default PopularJobs