import React from 'react'
import lady from '../../assets/lady.png'
import Button from '../../components/Button'
const Hero = () => {
  return (
    <div 
    className='w-full flex items-center justify-center px-[4rem] md:px-[10rem] pb-[2rem]'
    >
    <div
      className='w-[70vw] flex flex-col-reverse md:flex-row  items-center  gap-4  '
    >
      {/* Left Side / Bottom Side(mobile) */}

        <div
          className='w-full   flex flex-col gap-6'
        >
          <div className='flex flex-col gap-4 max-w-[600px]'>
            <h1
              className='text-4xl md:text-5xl xl:text-6xl font-bold'
            >Find A <span className='text-light-primary'>Job</span> that <br /> <span className='text-light-primary'>Matches</span> <br />Your Passion</h1>
            <p
              className='text-light-primary opacity-70'
            >Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
          </div>
          <div
            className='flex gap-4 flex-wrap items-center w-full'
          >
            <input
              type="text"
              name='search'
              placeholder='Search Jobs.....'
              className='px-[1rem] focus:outline-none  py-[1rem] rounded-md text-light-primary '
            />
            <button type='submit' ><Button content={'Search Jobs'} /> </button>
          </div>
        </div>

      {/* Right Side / Top Side(mobile) */}
      <div
        className=''
      >
        <img src={lady} alt="lady" className=' h-[400px] md:min-w-[400px] md:h-[70vh] xl:h-[93vh] xl:min-w-[500px]' />
      </div>
    </div>
    </div>
  )
}

export default Hero