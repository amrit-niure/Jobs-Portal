import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Applications = () => {
    const { user } = useSelector((store) => store.userData)
    const endpoint = import.meta.env.VITE_ENDPOINT;
    const [myapplications, setMyApplications] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchApplications = async (req, res) => {
            try {
                const response = await axios.get(`${endpoint}/myapplications/${user._id}`)
                console.log(response.data.myApplications)
                setMyApplications(response.data.myApplications)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApplications()
    }, [])
    if (loading) {
        return (
            <div>Loading.....</div>
        )
    }
    if (myapplications.length===0) {
        return (
            <div className='w-full h-[78vh] flex items-center justify-center text-light-primary'>No Applications Yet.</div>
        )
    }
    return (
        <div className='text-light-primary flex flex-col gap-4 '>
            <div className='bg-light-lightBackground text-xl md:text-2xl text-center py-[1rem] font-semiBold' >
                <h2>Received Applications</h2>
            </div>
            <div className='w-full  h-full flex flex-col items-center gap-4'>
                <div className='w-[90vw] max-w-[1200px] flex items-center justify-center md:justify-between gap-4 flex-wrap'>
                    {
                        myapplications.map((item, index) => {
                            return (
                                <div className=' w-fit flex flex-col' >
                                    <div>
                                        <span className='font-bold text-lg'> Application : {index + 1}</span>
                                    </div>
                                    <div className='rounded-lg leading-relaxed px-8 py-4 text-left bg-light-tertiary '>
                                        <ol className='list-decimal'>
                                            <li> <span className='font-semiBold'>Name : </span>{item.name}</li>
                                            <li> <span className='font-semiBold'> Email : </span>{item.email}</li>
                                            <li> <span className='font-semiBold'> Qualification : </span>{item.qualification}</li>
                                            <li> <span className='font-semiBold'> Contact : </span>{item.contact}</li>
                                            <li> <span className='font-semiBold'> Address : </span>{item.address}</li>
                                            <li> <span className='font-semiBold'> Cover Letter :  </span>{item.coverLetter}</li>
                                            <li> <span className='font-semiBold'> Resume : </span>{item.resume}</li>
                                        </ol>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Applications