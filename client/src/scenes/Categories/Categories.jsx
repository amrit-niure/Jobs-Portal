import React from 'react'
import CategoryCard from '../../components/CategoryCard'

const Categories = () => {
  return (
    <div 
    className='w-full flex flex-col items-center justify-center  pb-[2rem] gap-8'
    >
    <div>
    <h1
    className='text-light-primary font-semibold text-xl '
    >Popular Categories</h1>
    </div>
<div>
   <div className='flex flex-wrap gap-4 items-center justify-center'>
   <CategoryCard category={'Information Technonogy'} />
   <CategoryCard category={'Cleaning'} />
   <CategoryCard category={'Retails'} />
   <CategoryCard category={'Manager'} />
   <CategoryCard category={'Developer'} />
   <CategoryCard category={'Hospitality'} />
   <CategoryCard category={'Manager'} />
   <CategoryCard category={'Developer'} />
   <CategoryCard category={'Nurse'} />
   <CategoryCard category={'Hospitality'} />
   </div>
</div>
    </div>
  )
}

export default Categories