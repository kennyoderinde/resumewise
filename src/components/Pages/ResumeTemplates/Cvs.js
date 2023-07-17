import React from 'react'
import CVImg from '../../assets/cv-group.png'


const Cvs = () => {
  return (
    <>
        <div className='flex flex-row space-x-40'>

    <div className='mt-20 flex flex-col text-start text-gray-800 sm:font-poppins'>
      <p className='text-2xl font-bold leading-loose whitespace-nowrap'>Pick your CV template and get started</p>
      <p className='text-sm font-normal leading-normal'>Our CV templates are designed with your success in mind. They are all free (with premium features), ATS-friendly, and easy-to-read! </p>
    </div>
    <img src={CVImg} alt='' className='w-11/12 h-96 -mt-40'/>
    </div>
</>
  )
}

export default Cvs

