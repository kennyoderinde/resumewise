import React from 'react'
import ResumeImg from '../../assets/resume-group.png'

const Resumes = () => {
  return (
    <>
    <div className=' flex flex-row sm:space-x-36 sm:mt-0 -mt-33rem sm:ml-0 ml-64 z-10 sm:h-52 h-20 '>
      <div className='mt-20 sm:w-full w-72 flex flex-col sm:justify-normal sm:p-0 justify-center sm:text-start text-gray-900 sm:font-poppins'>
        <p className='sm:font-poppins sm:text-2xl text-base sm:font-bold font-bold text-start pr-10 whitespace-nowrap'>Pick from 8+ [Free] Resume Templates</p> 
        <p className=' text-start text-sm font-medium sm:font-normal leading-normal mt-2 text-gray-900'>Pick one of our free resume template, fill it out, and land that dream job! Create and download your professional resume in lass than 5 minutes.</p>
      </div>
      <img src={ResumeImg} alt='' className='hidden sm:flex w-10/12 h-96 -mt-44'/>
    </div>
    </>
  )
}

export default Resumes