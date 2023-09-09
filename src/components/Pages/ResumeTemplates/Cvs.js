import React from 'react'
import CVImg from '../../assets/cv-group.png'


const Cvs = () => {
  return (
    <>
      <div className=' flex flex-row lg:space-x-[51rem] sm:mt-0 -mt-0 sm:ml-0 -ml-40 z-10 sm:h-52 h-20'>

      <div className='sm:mt-20 mt-8 sm:ml-0  sm:w-full w-72 flex flex-col sm:justify-normal sm:p-0 justify-center sm:text-start text-gray-900 sm:font-poppins'>
        <p className='text-start sm:text-xl text-base sm:font-bold font-extrabold leading-loose whitespace-nowrap'>Pick your CV template and get started</p>
        <p className=' text-start text-sm sm:font-normal font-medium leading-normal sm:mt-3 mt-2'>Our CV templates are designed with your success in mind. They are all free (with premium features), ATS-friendly, and easy-to-read! </p>
      </div>
      <img src={CVImg} alt='' className='hidden absolute md:flex  w-auto h-96 -mt-40 '/>
      </div>
    </>
  )
}

export default Cvs

