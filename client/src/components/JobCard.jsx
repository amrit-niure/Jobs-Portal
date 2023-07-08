import React from 'react'
import Button from '../components/Button'
const JobCard = () => {
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
           <h2 cls>Match Company Limited</h2>
           <h1 className='text-xl font-bold'>Fresher UI/UX Designer (Experience)</h1>
           <div
           className='flex flex-col md:flex-row md:gap-4'
           >
            <span>Location : Sydney, Australia</span>
            <span>Full Time</span>
            <span>Salary : 50,000</span>
            </div>
        </div>
        </div>
           <div>
            <Button content={"View Details"}/>
        </div>
    </div>
  )
}

export default JobCard