import React, { useEffect, useState } from 'react'
import JobCard from '../../components/JobCard'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setJobs } from '../../state'
import axios from 'axios'
import { IconButton, Tooltip } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const MyJobList = () => {
  const navigate = useNavigate()
  const endpoint = import.meta.env.VITE_ENDPOINT;
  const dispatch = useDispatch()
  const { jobs } = useSelector((store) => store.userData)
  // to extract query params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  console.log(title);
  // to identify if user is looking for alljobs or specific jobs 
  const isSearch = Boolean(title);
  console.log(isSearch);
  // to store the searched results and loading state
  const [searchedJobsList, setSearchedJobList] = useState([])
  const [loading, setLoading] = useState(false)
  const [search,setSearch] = useState('')


  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const response = await axios.get(`${endpoint}/alljobs`);
      if (response.data.success) {
        dispatch(setJobs({ allJobs: response.data.allJobs }));
      }
      setLoading(false);
    };
  
    fetchJobs();
  }, []);
  
  useEffect(() => {
    const filterJobs = () => {
      const searchedJobs = jobs.filter(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
  
      setSearchedJobList(searchedJobs);
    };
  
    if (isSearch) {
      setLoading(true);
      filterJobs();
      setLoading(false);
    }
  }, [title, jobs, isSearch]);
  

  console.log(loading)

  if (isSearch && loading) {
    return (
      <div>Loading</div>
    )
  }

  if (!isSearch) {
    return (
      <div className='text-light-primary flex flex-col gap-4'>
        <div className='bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
          <h2>All Jobs </h2>
        </div>
        <div className='w-full h-full  flex flex-col items-center justify-center'>
          {/* search functionality */}
        <form
            className='flex gap-2 flex-wrap items-center w-full max-w-[1200px] justify-center md:justify-end '
            onSubmit={(event) => {
              event.preventDefault();
              navigate(`/alljobs?title=${search}`);
              setSearch('');
            }}
          >
            <input
              type="text"
              name='search'
              value={search}
              placeholder='Search Jobs.....'
              className='px-[1rem] focus:outline-none  py-[.5rem] rounded-md text-light-primary bg-light-tertiary min-w-[200px]'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'><Button content={'Search Jobs'} /> </button>
          </form>
        </div>
        <div className='w-full h-full  flex flex-col gap-4 items-center justify-center'>
          <div className='w-full max-w-[1200px] px-[4rem] xl:px-0 flex flex-col gap-4 items-center justify-center'>
            {jobs.map((job) => (
              <JobCard job={job} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='text-light-primary flex flex-col gap-4 '>
        <div className='bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
          <h2>Search Results</h2>
        </div>
        <div className='w-full h-full  flex flex-col items-center justify-center'>
          {/* search functionality */}
        <form
            className='flex gap-2 flex-wrap items-center w-full max-w-[1200px] justify-center md:justify-end '
            onSubmit={(event) => {
              event.preventDefault();
              navigate(`/alljobs?title=${search}`);
              setSearch('');
            }}
          >
            <input
              type="text"
              name='search'
              value={search}
              placeholder='Search Jobs.....'
              className='px-[1rem] focus:outline-none  py-[.5rem] rounded-md text-light-primary bg-light-tertiary min-w-[200px]'
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'><Button content={'Search Jobs'} /> </button>
          </form>
        </div>
        {searchedJobsList !== null && searchedJobsList.length !== 0 ?
          (<div className='w-full flex flex-col items-center justify-center'>
            <div className='text-center md:text-left w-full max-w-[1200px]'>
            <span> Jobs for <span className='underline italic'>{title} </span> </span>
            </div>
            <div className='w-full h-full  flex flex-col gap-4 items-center justify-center'>
              <div className='w-full max-w-[1200px]  py-[1rem] px-[4rem] xl:px-0 flex flex-col gap-4 items-center justify-center'>
                {searchedJobsList.map((job) => (
                  <JobCard job={job} />
                ))}
              </div>
            </div>
          </div>
          ) : (
            <div className='w-full h-[81vh]  flex gap-1 items-center justify-center'>
              <div className='w-full h-full border-2 flex gap-1 items-center justify-center'>

              Sorry, no Jobs Found for <span className='underline italic'>{title} </span>.
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default MyJobList