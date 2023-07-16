import React, { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import parse from 'html-react-parser';
const Details = () => {
    const { user, jobs, token } = useSelector((store) => store.userData)

    const { id } = useParams();
    const navigate = useNavigate()
    const [userType, setUserType] = useState('')
    const [isCreator, setIsCreator] = useState(false)
    const thisJob = jobs.find((found) => found._id === id)
    // parsing content of Jodit editor i.e. description  
    const formatContent = (content) => {
        const parsedContent = parse(content);
        return parsedContent;
    };

    useEffect(() => {
        if (token) {
            setUserType(user.role)
        }
        if (thisJob.jobCreator === user._id) {
            setIsCreator(true)
        }
    }, [token])
    const isSeeker = userType === "jobSeeker"
    const isEmployer = userType === "employer"

    return (
        <div className='text-light-primary'>
            <div
                className='bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[1rem] font-semiBold '
            >
                <h2 className=''>{thisJob.title}<span className='text-sm font-regular'>({thisJob.type})</span> - {thisJob.company}</h2>
            </div>
            <div className=' flex items-center justify-center border-2'>
                <div className=' w-[100vw] h-full max-w-[1200px] py-[2rem] flex flex-col gap-4 '>
                    <div
                        className='w-full flex items-center justify-center gap-8'
                    >
                        <div>
                            <a href={`${thisJob.website}`} target="_blank" rel="noopener noreferrer">
                                <Button content={"View Company"} outline={true} />
                            </a>
                        </div>
                        {isSeeker && <div onClick={() => navigate(`/applyjob/${thisJob._id}`)}>
                            <Button content={"Apply"} />
                        </div>}
                        {isCreator && <div onClick={() => navigate(`/createjob/${thisJob._id}`)}>
                            <Button content={"Edit"} />
                        </div>}
                    </div>
                    <div>
                        <ul className='text-light-primary'>
                            <li><span className='font-bold text-light-primary'>Minimum Qualification : </span> <span>{thisJob.qualification}</span></li>
                            <li><span className='font-bold text-light-primary'>Level : </span> <span>{thisJob.level}</span></li>
                            <li><span className='font-bold text-light-primary'>Experience : </span> <span>{thisJob.experience}</span></li>
                            <li><span className='font-bold text-light-primary'>Location  : </span> <span>{thisJob.location}</span></li>
                            <li><span className='font-bold text-light-primary'>Application Deadline  : </span> <span>{thisJob.deadline.split('T')[0]}</span></li>
                            <li><span className='font-bold text-light-primary'>Annual Salary Range : </span> <span>{thisJob.salary}</span></li>

                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg'>Job Description</h1>
                        <div className='flex flex-col gap-4'>
                            <div>
                                {formatContent(thisJob.description)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details