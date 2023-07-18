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

import Switch from './Switch'

const ResumeTemplates = () => {
  return (
    <>
    <div className=' z-0 sm:mt-28 sm:ml-20 mt-20 ml-8 space-y-2'>
      <p className=' sm:text-4xl text-2xl font-poppins font-bold text-gray-700'>Resume Templates</p>
      <span className=' sm:text-base text-sm font-poppins font-normal text-gray-500'>/ 0 - 5 years of experience</span>
      <div className='w-14 h-61 bg-[#0AC5A8] rounded-xl'></div>
    </div>



    <div className=" flex justify-center  h-screen mt-12">
      <div className=" z-10 sm:w-12/12 sm:h-72 w-11/12 h-72 flex justify-end bg-stone-200 bg-gradient-to-b from-white via-white to-[#0AC5A8] shadow-xl rounded-2xl" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
      </div>

    </div>
      
    <div className=" absolute flex justify-center">
      <div className="w-11/12">
        <Switch />
      </div>
    </div>


    {/* <div className=" z-0 flex items-center justify-center h-screen">
      <div className="absolute top-23.5rem sm:w-full sm:h-80">
        <svg
          className="wave-pattern"
          viewBox="0 -50 1000 550"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path fill="#00C8AA" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,149.3C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path>
        </svg>
      </div>
    </div> */}

    <div className=' hidden sm:flex sm:flex-col sm:-mt-45rem'>
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
    </>
  )
}

export default ResumeTemplates