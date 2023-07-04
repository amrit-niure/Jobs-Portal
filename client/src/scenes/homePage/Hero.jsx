import React from 'react'
import lady from '../../assets/lady.png'
import Button from '../../components/Button'
const Hero = () => {
  return (
    <div
      className='flex justify-between px-[5rem] md:px-[10rem] h-[93vh]'
    >
      <div
        className='flex flex-col h-full mt-[10vh] gap-[10rem]'
      >
        <div className='flex flex-col gap-8 '>
          <h1
            className='text-4xl md:text-6xl font-bold'
          >Find A <span className='text-light-primary'>Job</span> that <br /> <span className='text-light-primary'>Matches</span> <br />Your Passion</h1>
          <p
            className='text-light-primary opacity-70'
          >Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
        </div>
        <div
        className='flex gap-4 items-center '
        >
          <input
            type="text"
            name='search'
            placeholder='Search Jobs.....'
            className='px-[1rem] focus:outline-none  py-[1rem] rounded-md text-light-primary w-[15rem] md:w-[30rem]'
          />
          <button type='submit' ><Button content={'Search Jobs'} /> </button>
        </div>
      </div>
      <div
        className='md:flex  h-[93vh] w-[800px] hidden'
      >
        <img src={lady} alt="lady" />
      </div>
    </div>
  )
}

export default Hero