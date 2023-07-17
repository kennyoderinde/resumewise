import React from 'react'
import CoverLettImage from '../../assets/cl-group.png'


const CoverLetters = () => {
  return (
    <>
    <div className='flex flex-row space-x-36'>
      <div className='mt-20 flex flex-col text-start text-gray-800 sm:font-poppins'>
      <p className='sm:font-poppins text-2xl font-bold text-start pr-10 whitespace-nowrap'>16+ Convincing Cover Letter Templates </p> 
      <span className='sm:font-poppins text-2xl font-bold text-start pr-10'>[Pick & Download]</span>
      <p className=' text-start text-sm font-normal leading-normal mt-2'>Looking to create a cover letter that stands out? Try one of our 12 
      cover letter templates (and land that job)!
      </p>
      </div>
      <img src={CoverLettImage} alt='' className='w-10/12 h-96 -mt-40'/>
    </div>
    </>
  )
}

export default CoverLetters