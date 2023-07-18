import React from 'react'
import CVImg from '../../assets/cv-group.png'


const Cvs = () => {
  return (
    <>
    <div className=' flex flex-row sm:space-x-36 sm:mt-0 -mt-33rem sm:ml-0 ml-64 z-10 sm:h-52 h-20'>

    {/* <div className='sm:flex sm:flex-row space-x-40'> */}

    <div className='mt-20 sm:w-full w-72 flex flex-col sm:justify-normal sm:p-0 justify-center sm:text-start text-gray-900 sm:font-poppins'>
      <p className='text-start sm:text-2xl text-sm  sm:font-bold font-extrabold leading-loose whitespace-nowrap'>Pick your CV template and get started</p>
      <p className=' text-start text-sm sm:font-normal font-medium leading-normal'>Our CV templates are designed with your success in mind. They are all free (with premium features), ATS-friendly, and easy-to-read! </p>
    </div>
    <img src={CVImg} alt='' className='hidden sm:flex w-11/12 h-96 -mt-44'/>
    </div>
</>
  )
}

export default Cvs

