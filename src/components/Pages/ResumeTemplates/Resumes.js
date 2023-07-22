import React from 'react'
import ResumeImg from '../../assets/resume-group.png'

const Resumes = () => {
  return (
    <>
    <div className=' flex flex-row sm:space-x-[39rem] sm:mt-0 -mt-0 sm:ml-0 -ml-40 z-10 sm:h-52 h-20 '>
      <div className='sm:mt-20 sm:w-full w-72 flex flex-col sm:justify-normal sm:p-0 justify-start text-start text-gray-900 sm:font-poppins'>
        <p className='sm:font-poppins sm:text-xl text-base sm:font-bold font-bold text-start pr-10 whitespace-nowrap'>Pick from 8+ [Free] Resume Templates</p> 
        <p className=' text-start text-sm font-medium sm:font-normal leading-normal mt-2 text-gray-900'>Pick one of our free resume template, fill it out, and land that dream job! Create and download your professional resume in lass than 5 minutes.</p>
      </div>
      <img src={ResumeImg} alt='' className='hidden absolute sm:flex  w-11/12 h-96 -mt-40 '/>
    </div>
    </>
  )
}

export default Resumes