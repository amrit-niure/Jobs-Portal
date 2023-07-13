import React, { useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero'
import PopularJobs from '../popularJobs/PopularJobs'
import Categories from '../Categories/Categories'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { setJobs } from '../../state'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
const fetchJobs = async() =>{
  const response = await axios.get(`${endpoint}/alljobs`)
  if(response.data.success){
    dispatch(setJobs({allJobs : response.data.allJobs}))
  }
}
fetchJobs()
  },[])
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
  <div className='w-[150px]' onClick={()=> navigate('/alljobs')}>

  <Button content={"View All Jobs"} outline={true}/>
  </div>
</div>
      </div>

    </div>
  )
}

export default Homepage