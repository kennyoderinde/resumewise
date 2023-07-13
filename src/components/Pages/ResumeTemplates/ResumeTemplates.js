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

const ResumeTemplates = () => {
  return (
    <>
    <div className='z-0 sm:mt-28 sm:ml-20 mt-20 ml-8 space-y-2'>
      <p className=' sm:text-4xl text-2xl font-poppins font-bold text-gray-700'>Resume Templates</p>
      <span className=' sm:text-base text-sm font-poppins font-normal text-gray-500'>/ 0 - 5 years of experience</span>
      <div className='w-14 h-61 bg-[#0AC5A8] rounded-xl'></div>
    </div>



    <div className=" relative flex justify-center h-screen mt-12">
      {/* <div class=" absolute top-80 h-[300px] w-full bg-[#0AC5A8] rounded-[50%]"></div> */}
      <div className="z-30 sm:w-11/12 sm:h-80 flex justify-end bg-stone-200 bg-gradient-to-b from-white via-white to-[#0AC5A8] shadow-xl rounded-2xl">
        <img src={resumeTempImg} alt='' className='relative sm:mr-10' />
      </div>
    </div>

    <div className="flex items-center justify-center h-screen">
      <div className="relative -top-30rem sm:w-full sm:h-80">
        <svg
          className="wave-pattern"
          viewBox="180 0 800 320"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            fill="#0AC5A8"
            fillOpacity="1"
            d="M0,64L40,85.3C80,107,160,149,240,154.7C320,160,400,128,480,144C560,160,640,224,720,240C800,256,880,224,960,192C1040,160,1120,128,1200,133.3C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>



  {/* <div class="overflow-x-hidden">
    <div class=" bottom-0 mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] ">
      <div class="mt-5 text-center text-2xl text-white">Footer</div>
    </div>
  </div> */}

    {/* <div className=' sm:w-10/12 sm:h-23rem bg-stone-100'>

    </div> */}
    </>
  )
}

export default ResumeTemplates