import React from 'react'

const CvTemplates = () => {
  return (
    <>
    <div className=' flex space-x-8 mt-20 '>
      <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span class="relative text-white">Button Text</span>
      </a>
   

    <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
      <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span class="relative">Button Text</span>
    </a>

    <a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">            
      <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#0eae96]  ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#090c13] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span class="relative">Button Text</span>
          </a>
    </div>
    
</>
  )
}

export default CvTemplates