import React from 'react'
import { useSelector } from 'react-redux'
import JobCard from '../../components/JobCard'
const MyJobList = () => {
    const { jobs } = useSelector((store) => store.userData)
    return (
        <div className='text-light-primary '>
            <div className='bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
                <h2>All Jobs</h2>
            </div>
            <div className='w-full h-full  flex flex-col gap-4 items-center justify-center'>
                <div className='w-full max-w-[1200px]  py-[2rem] px-[4rem] xl:px-0 flex flex-col gap-4 items-center justify-center'>
                    {jobs.map((job) => (
                            <JobCard job={job} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default MyJobList