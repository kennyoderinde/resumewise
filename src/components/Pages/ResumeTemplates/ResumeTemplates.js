// import React from 'react'

// const ResumeTemplates = () => {
//   return (
//     <>
//     <div className=' flex space-x-8 mt-20 '>
//       <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
//         <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
//         <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//         <span class="relative text-white">Button Text</span>
//       </a>
   

//     <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
//       <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//       <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
//       <span class="relative">Button Text</span>
//     </a>

//     <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">            
//       <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#0eae96]  ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//       <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#090c13] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
//       <span class="relative">Button Text</span>
//           </a>
//     </div>
// </>
//   )
// }

// export default ResumeTemplates

import React from 'react'
import resumeTempImg from '../../assets/group (1).png'
import Switch from './Switch'

const ResumeTemplates = () => {
  return (
    <>
    <div className='z-0 sm:mt-28 sm:ml-20 mt-20 ml-8 space-y-2'>
      <p className=' sm:text-4xl text-2xl font-poppins font-bold text-gray-700'>Resume Templates</p>
      <span className=' sm:text-base text-sm font-poppins font-normal text-gray-500'>/ 0 - 5 years of experience</span>
      <div className='w-14 h-61 bg-[#0AC5A8] rounded-xl'></div>
    </div>



    <div className="  flex justify-center h-screen mt-12">
      <div className="z-10 sm:w-11/12 sm:h-72 flex justify-end bg-stone-200 bg-gradient-to-b from-white via-white to-[#0AC5A8] shadow-xl rounded-2xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}></div>
      
    </div>
    <Switch />

      <img src={resumeTempImg} alt='' className='relative z-20 sm:mr-10 w-5/12 h-96 -top-47rem left-43rem' />

    <div className=" z-0 flex items-center justify-center h-screen">
      <div className="absolute top-23.5rem sm:w-full sm:h-80">
        <svg
          className="wave-pattern"
          viewBox="0 -50 1000 550"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            fill="#0AC5A8"
            fillOpacity="1"
            d="M0,420C0,420,0,320,125,320C250,320,250,420,375,420C500,420,500,320,625,320C750,320,750,420,875,420C1000,420,1000,320,1125,320C1250,320,1250,420,1375,420C1500,420,1500,320,1625,320C1750,320,1750,420,1875,420C2000,420,2000,320,2125,320C2250,320,2250,420,2375,420C2500,420,2500,320,2625,320L2625,420L0,420Z"
          ></path>
        </svg>
      </div>
    </div>

    </>
  )
}

export default ResumeTemplates