import React from 'react'
import resumeSamplesData_ from "../ResumeSamples/SamplesData"

const handleOptionClick = () => {

}


const Samples = () => {
  return (
    <>
    <div className=' sm:flex sm:flex-row sm:flex-wrap flex flex-col w-full sm:justify-center place-items-center sm:-mt-72 -mt-37rem'>
      {
        resumeSamplesData_.map(item => (
          <div 
            key={item.id}
            className=' flex flex-col sm:m-2 m-2 sm:-mt-6 -mt-6 space-y-2'
            onClick={() => handleOptionClick(item.name)}
          >

            {/* Zoom button */}

            <a href="#_" class="relative w-8 px-1 py-3 font-bold text-white rounded-full group sm:top-24 top-24 sm:left-52 left-64">            
              <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#090c13]  ease opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-600 ease opacity-90 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span class="relative rounded-full">{item.icon1}</span>
            </a>

            <div className=' w-28 h-7 bg-gray-100 flex justify-center items-center rounded-xl space-x-2 font-quicksand ml-auto' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
                <span className=' w-4 h-4 rounded-full bg-cyan-400 text-white flex items-center justify-center' style={{ fontSize: "10px"}}>{item.icon2}</span>
                <span className=' font-semibold'>{item.rating}</span>
            </div>
            <div className='  sm:w-64 sm:h-[22rem] w-80 h-[27rem] flex '>{item.img}</div>

          </div>
    

          
        ))
      }

    </div>
    </>
  )
}

export default Samples


