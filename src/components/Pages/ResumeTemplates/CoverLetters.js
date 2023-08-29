import React from 'react'
import CoverLettImage from '../../assets/cl-group.png'


const CoverLetters = () => {
  return (
    <>
    <div className=' flex sm:flex-row sm:space-x-[51rem] sm:mt-0 sm:ml-0 -ml-40 z-10 sm:h-52 h-20 '>
    <div className='sm:mt-20 sm:ml-0 sm:w-10/12 w-72 flex flex-col sm:justify-normal sm:p-0 justify-start sm:text-start text-gray-900 sm:font-poppins'>
      <p className='sm:font-poppins sm:text-xl text-base font-bold text-start pr-10 whitespace-nowrap'>16+ Convincing Cover Letter Templates </p> 
      <span className=' sm:font-poppins sm:text-xl text-base font-bold text-start pr-10 text-gray-900'>[Pick & Download]</span>
      <p className=' text-start text-sm sm:font-normal font-medium leading-normal mt-2 text-gray-900'>Looking to create a cover letter that stands out? Try one of our 12 
        cover letter templates (and land that job)!
      </p>
    </div>
    
      <img src={CoverLettImage} alt='' className='hidden sm:flex absolute w-10/12 h-96 -mt-48'/>
    </div>
    </>
  )
}

export default CoverLetters