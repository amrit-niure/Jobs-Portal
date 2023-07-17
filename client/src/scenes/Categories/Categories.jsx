import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import { useNavigate,useLocation  } from 'react-router-dom'
import Button from '../../components/Button'

const Categories = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const navigate = useNavigate()
  const categories = [
    'Information Technology(IT)',
    'Sales and Marketing',
    'Hospitality and Tourism',
    'Engineering',
    'Healthcare and Medical',
    'Support',
    'Administrative and Clerical',
    'Education and Teaching',
    'Finance and Accounting',
    'Customer Service',
    'Manufacturing and Production',
    'Legal',
    'Media and Communication',
    'Human Resources',
    'Research and Development',
    'Social Services',
    'Others'
  ]
  return (
    <div
      className='w-full h-full bg-light-lightBackground flex flex-col items-center justify-center  pb-[2rem] gap-8'
    >
      <div className='text-light-primary text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
        <h2>All Categories </h2>
      </div>
      <div>
        <div className='flex flex-wrap gap-4 items-center justify-center max-w-[1200px]'>
          { isHomePage ? categories.slice(0,8).map((item) => (
            <div onClick={() =>
              navigate(`/categories/${item}`)
            }>
              <CategoryCard category={item} />
            </div>

          )) : 
          categories.map((item) => (
            <div onClick={() =>
              navigate(`/categories/${item}`)
            }>
              <CategoryCard category={item} />
            </div>
          ))
          }
        </div>
      </div>
      {isHomePage && (
        <div onClick={() => {
          setTimeout(() => {
            navigate('/categories');
          }, 300);
        }}>
          <Button content={"View All Categories"} outline={true} />
        </div>
      )}
    </div>
  )
}

export default Categories