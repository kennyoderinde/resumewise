import React from 'react'
import CoverLettImage from '../../assets/cl-group.png'


const CoverLetters = () => {
  return (
    <>
    <div className=' flex flex-row sm:space-x-36 sm:mt-0 -mt-33rem sm:ml-0 ml-64 z-10 sm:h-52 h-20 '>
    <div className='mt-20 sm:w-full w-72 flex flex-col sm:justify-normal sm:p-0 justify-center sm:text-start text-gray-900 sm:font-poppins'>
      <p className='sm:font-poppins sm:text-2xl text-sm font-bold text-start pr-10 whitespace-nowrap'>16+ Convincing Cover Letter Templates </p> 
      <span className=' text-startsm:font-poppins sm:text-2xl text-sm font-bold text-start pr-10 text-gray-900'>[Pick & Download]</span>
      <p className=' text-start text-sm sm:font-normal font-medium leading-normal mt-2 text-gray-900'>Looking to create a cover letter that stands out? Try one of our 12 
      cover letter templates (and land that job)!
      </p>
      </div>
      <img src={CoverLettImage} alt='' className='hidden sm:flex w-10/12 h-96 -mt-44'/>
    </div>
    </>
  )
}

export default CoverLetters