import React from 'react'
import Hero from './Hero'
import PopularJobs from '../popularJobs/PopularJobs'
import Categories from '../Categories/Categories'

const Homepage = () => {
  return (
    <div
    className='bg-light-tertiary w-full h-full'
    >
<Hero />
<Categories />
<PopularJobs />
    </div>
  )
}

export default Homepage