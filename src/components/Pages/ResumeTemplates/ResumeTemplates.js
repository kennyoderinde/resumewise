import React from 'react'

import Switch from './Switch'
import ResumeSamples from "./ResumeSamples/ResumeSamples"
import Background from './Background'
import SwitchMobile from './SwitchMobile'

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
      <SwitchMobile  className= ''/>
      </div>
    </div>

    <div>
      <Background />
    </div>

    <div>
     <ResumeSamples />


    </div>
    </>
  )
}

export default ResumeTemplates