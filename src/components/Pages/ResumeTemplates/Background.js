import React from 'react'

const Background = () => {
  return (
    <div>
        {/* Background Display */}
    <div className='  relative flex flex-col sm:-mt-58rem -mt-[37rem]'>
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
    <div className=' relative  sm:flex sm:flex-col'>
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
    </div>
  )
}

export default Background