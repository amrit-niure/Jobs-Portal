import React from 'react'
import {MdWork} from 'react-icons/md'
import '../App.css'
const CategoryCard = ({category}) => {
  return (
    <div
    className='flex items-center justify-center flex-col  w-[200px] xl:w-[250px]  h-[150px] xl:w:h-[200px] bg-white rounded-md shadow-md hover:scale-105 transition-all ease-in-out hover:shadow-slate-400 cursor-pointer gap-2'
    >
<div>
    <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full shadow-lg bg-light-primary bg-opacity-10 transition-scale-09'>
<MdWork />
    </div>
</div>
<div>
    <h1 className='text-light-primary font-semibold text-center  '>{category}</h1>
</div>
    </div>
  )
}

export default CategoryCard