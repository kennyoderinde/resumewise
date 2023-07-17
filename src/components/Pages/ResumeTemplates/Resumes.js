import React from 'react'
import ResumeImg from '../../assets/resume-group.png'

const Resumes = () => {
  return (
    <>
    <div className='flex flex-row space-x-40'>
      <div className='mt-5rem flex flex-col text-start text-gray-800 sm:font-poppins whitespace-nowrap'>
        <p className='text-2xl font-bold leading-loose'>Pick from 8+ [Free] Resume Templates</p>
        <p className='text-sm font-normal leading-loose '>Pick one of our free resume template, fill it out, and land that dream job!</p>
        <p className=' text-sm font-normal '>Create and download your professional resume in lass than 5 minutes. </p>
      </div>
      <img src={ResumeImg} alt='' className='w-10/12 h-96 -mt-40'/>
    </div>
    </>
  )
}

export default Resumes