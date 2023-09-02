import React from 'react'
import resumeSamplesData_ from "../ResumeSamples/SamplesData"
import './ResumeSamples.css'

const handleOptionClick = () => {

}


const Samples = () => {
  return (
    <>

    {/* RESUME SAMPLES DISPLAY   */}
    <div className=' sm:grid sm:grid-cols-4  flex flex-col md:w-11/12 w-full md:mx-auto md:justify-center place-items-center sm:-mt-[19rem] -mt-[7rem]'>
      {
        resumeSamplesData_.map(item => (
          <div 
            key={item.id}
            className=' flex flex-col sm:m-2 m-2 sm:-mt-6 -mt-6 space-y-2'
            onClick={() => handleOptionClick(item.name)}
          >

            {/* Zoom button */}
            

            <a href="#_" class="relative z-20 w-8 px-1 py-3 font-bold text-white rounded-full group sm:top-32 top-32 sm:left-64 left-64 ">            
              <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#090c13]  ease opacity-90 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-orange-500 ease opacity-90 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
              <span class="relative rounded-full flex justify-center">{item.icon1}</span>
            </a>


            {/* ratings */}
           {
            item.rating !==null && 
            <div className=''>
              <div className='z-30 absolute w-28 h-8 bg-white flex justify-center items-center rounded-xl space-x-2 font-quicksand ml-56 -mt-6' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
                <span className=' w-4 h-4 rounded-full bg-cyan-400 text-white flex items-center justify-center' style={{ fontSize: "10px"}}>{item.icon2}</span>
                <span className=' font-semibold'>{item.rating}</span>
              </div>
             </div>
           }

           <div className=' p-5 w-full'>
            <div
              className=' hover sm:w-auto sm:h-auto md:p-10 p-2 w-80 h-[27rem] flex transform transition-transform hover:scale-105'
              style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.44)' }}
              
            > 
              <div
                className='w-full h-full bg-cover bg-center'
                style={{
                  backgroundImage: `url(${item.img})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.3s',
                }}
              />{item.img}
            </div> 
          </div>  
          </div>        
        ))
      }

    </div>
    </>
  )
}

export default Samples


