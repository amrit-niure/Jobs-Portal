import React from 'react'
import Hero from './Hero'
import PopularJobs from '../popularJobs/PopularJobs'
import Categories from '../Categories/Categories'
import Button from '../../components/Button'

const Homepage = () => {
  return (
    <div
    className='bg-light-tertiary flex flex-col items-center justify-center'
    >
      <div
      className ='w-full h-full max-w-[1200px] '
      > 

<Hero />
<Categories />
<PopularJobs />
<div className='w-full flex items-center justify-center pb-[2rem]'>
  <div className='w-[150px]'>

  <Button content={"View All Jobs"} outline={true}/>
  </div>
</div>
      </div>

    </div>
  )
}

export default Homepage