import React from 'react'
import JobCard from '../../components/JobCard'

const PopularJobs = () => {
  return (
    <div 
    className='w-full flex flex-col items-center justify-center px-[4rem] md:px-[10rem] pb-[2rem] gap-8'
    >
    <div>
    <h1
    className='text-light-primary font-semibold text-xl'
    >Popular Categories</h1>
    </div>
<div className='w-full'>
 <JobCard />
</div>
    </div>
  )
}

export default PopularJobs