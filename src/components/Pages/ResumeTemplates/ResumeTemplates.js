import React from 'react'

import Switch from './Switch'
import ResumeSamples from "./ResumeSamples/ResumeSamples"

const ResumeTemplates = () => {
  return (
    <>
    <div className=' z-0 sm:mt-28 sm:ml-20 mt-20 ml-8 space-y-2'>
      <p className=' sm:text-4xl text-2xl font-poppins font-bold text-gray-700'>Resume Templates</p>
      <span className=' sm:text-base text-sm font-poppins font-normal text-gray-500'>/ 0 - 5 years of experience</span>
      <div className='w-10 h-61 bg-[#0AC5A8] rounded-xl'></div>
    </div>



    <div className=" flex justify-center  h-screen mt-12">
      <div className=" z-10 sm:w-12/12 sm:h-72 w-11/12 h-72 flex justify-start bg-stone-200 bg-gradient-to-b from-white via-white to-[#0AC5A8] shadow-xl rounded-2xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
      <Switch />
      </div>
    </div>


    <div className=' hidden sm:flex sm:flex-col sm:-mt-35rem'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1340 320"           
        style={{ transform: 'rotate(180deg)' }}
        >
        <path 
          fill="#00C8AA" 
          fill-opacity="1" 
          d="M0,64L80,69.3C160,75,320,85,480,112C640,139,800,181,960,165.3C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
      </svg>
  
    </div>
    <div className='hidden sm:flex sm:flex-col'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1152 256"
        >
        <path 
          fill="#00C8AA" 
          fill-opacity="1" 
          d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,101.3C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>
      </div>

      <ResumeSamples />
    </>
  )
}

export default ResumeTemplates