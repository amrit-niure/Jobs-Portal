import React from 'react'
import Button from '../../components/Button'

const Details = () => {
    return (
        <div className='text-light-primary'>
            <div
                className='bg-light-lightBackground px-[5rem] md:px-[10rem] text-xl md:text-2xl text-center py-[1rem] font-semiBold '
            >
                <h2 className=''>Larvel Developer <span className='text-sm font-regular'>(Full Time)</span> - Match Developer Limited</h2>
            </div>
            <div className=' flex items-center justify-center border-2'>


                <div className=' w-[100vw] h-full max-w-[1200px] py-[2rem] flex flex-col gap-4 '>
                    <div
                        className='w-full flex items-center justify-center gap-8'
                    >
                        <div>

                            <Button content={"View Company"} outline={true} />
                        </div>
                        <div>

                            <Button content={"Apply"} />
                        </div>
                    </div>
                    <div>
                        <ul className='text-light-primary'>
                            <li><span className='font-bold text-light-primary'>Minimum Qualification : </span> <span>Bachelor</span></li>
                            <li><span className='font-bold text-light-primary'>Exprience Level : </span> <span>Senior</span></li>
                            <li><span className='font-bold text-light-primary'>Experience Length : </span> <span>5 years</span></li>
                            <li><span className='font-bold text-light-primary'>Location  : </span> <span>Sydney, Australia</span></li>
                            <li><span className='font-bold text-light-primary'>Application Deadline  : </span> <span>7 April, 2020</span></li>
                            <li><span className='font-bold text-light-primary'>Annual Salary Range : </span> <span>$150k - 200k</span></li>

                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg'>Job Description</h1>
                        <div className='flex flex-col gap-4'>
                            <p>

                                We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using
                                Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.
                            </p>
                            <p>
                                To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start
                                to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce
                                complete solutions in a short turnaround time.
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Larvel developer - Requirements :</h1>
                            <ul className='list-disc'>
                                <li> A degree in programming, computer science, or a related field.</li>
                                <li>Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
                                <li>A solid understanding of application design using Laravel.</li>
                                <li>Knowledge of database design and querying using SQL.</li>
                                <li>Proficiency in HTML and JavaScript. Experience developing in Vue is considered a plus.</li>
                                <li>Practical experience using the MVC architecture.</li>
                                <li>The ability to work on LAMP development environment</li>
                                <li>Problem-solving skills and critical mindset.</li>
                                <li>Great communication skills.</li>
                                <li>The desire and ability to learn.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold'>Responsibilities:</h1>
                            <ul className='list-disc'>
                                <li>Discussing project aims with the client and development team.</li>
                                <li>Designing and building web applications using Laravel.</li>
                                <li>Troubleshooting issues in the implementation and debug builds.</li>
                                <li>Working with front-end and back-end developers on projects.</li>
                                <li>Testing functionality for users and the backend.</li>
                                <li>Ensuring that integrations run smoothly.</li>
                                <li>Scaling projects based on client feedback.</li>
                                <li>Recording and reporting on work done in Laravel.</li>
                                <li>Maintaining web-based applications..</li>
                                <li>Presenting work in meetings with clients and management.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details