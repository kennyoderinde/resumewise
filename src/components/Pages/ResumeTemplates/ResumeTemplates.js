import React from 'react'

import Switch from './Switch'
import ResumeSamples from "./ResumeSamples/ResumeSamples"
import Background from './Background'
import SwitchMobile from './SwitchMobile'
import CustomersRating from './CustomersRating'
import WhyResumeWise from './WhyResumeWise'
import ExpertReviews from './ExpertReviews'

const ResumeTemplates = () => {
  return (
    <>
    <div className=' z-0 sm:mt-28 sm:ml-20 mt-20 ml-8 space-y-2'>
      <p className=' md:text-4xl text-2xl font-poppins font-bold text-slate-800'>Resume Templates</p>
      <span className=' sm:text-base text-sm font-poppins font-normal text-slate-500'>/ 0 - 5 years of experience</span>
      <div className='w-10 h-61 bg-[#0AC5A8] rounded-xl font'></div>
    </div>

    


    <div className=" flex  h-screen w-full mt-12 lg:px-20 lg:py-10 p-5 ">
      <div className=" z-10 w-full h-72 flex lg:justify-start justify-center bg-stone-200 bg-gradient-to-b from-white via-white to-[#0AC5A8] shadow-xl rounded-2xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
      <Switch />
      <SwitchMobile  className= ''/>
      </div>
    </div>

    <div>
      <Background />
    </div>

    <div>
     <ResumeSamples />

     <CustomersRating />

     {/* <WhyResumeWise  /> */}

    {/* <ExpertReviews /> */}

    </div>
    </>
  )
}

export default ResumeTemplates