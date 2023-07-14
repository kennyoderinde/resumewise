import React, { useState } from "react";
import { Link } from 'react-router-dom';

import NavigationDesktop from "./NavigationDesktop";
import resumeWiseLogo from "../../assets/resumewise.PNG";
// import navLinksData from "./data.js";
import * as BiIcon from "react-icons/bi";
import * as HiIcon from "react-icons/hi";
import Avatar from "../Navbar/Avatar";

// opening and closing of Navbar page on mobile
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";


function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      name: "Resume Templates",
      path: '/' 
    },
    {
      name: "CV Templates",
      path: '/cv-templates' ,
      
    },
    {
      name: "Cover Letters",
      path: '/cover-letter' ,
      
    },
    {
      name: <span className="sm:ml-0 -ml-8">Career Blog</span>,
      path: '/career-blog',
      icon: <BiIcon.BiSolidDownArrow />,
      children: [
        {
          name: "All Articles",
          path: '/all-articles' 

        },
        
        {
          name: "Resume & CV Writing",
          path: '/resumes-cv' 

          // children: [
          //   {
          //     name: "deep 3",
          //   },
          //   {
          //     name: "deep 2nd 3",
          //   },
          // ],
        },
        {
          name: "Cover Letter Writing",
          path: '/writing-cover-letter' 

        },

        {
          name: "Examples",
          path: '/examples' 

        },
        {
          name: "Personal Development",
          path: '/personal-development' 

        },
        {
          name: "Inspiring Stories",
          path: '/inspiring-stories' 

        },
        {
          name: "Interviews & Find A Job",
          path: '/interviews' 

        },
      ],

    },
    {
      name: "Pricing",
      path: '/pricing' ,

    },
    {
      name: <span className="sm:-ml-4 -ml-1">EN US</span>,
      path: '/en-us' ,
      icon: <BiIcon.BiSolidDownArrow />,
      icon1: <HiIcon.HiOutlineTranslate />,

      children: [
        {
          name: <span className=" sm:text-base text-lg ">Dansk <span className=" text-gray-400 text-sm hover:text-[#0AC5A8]">BETA</span></span>,

        },
        {
          name: <span className=" sm:text-base text-lg">Deutsch <span className=" text-gray-400 text-sm hover:text-[#0AC5A8]">BETA</span></span>,
        },
        {
          name:  <span className=" sm:text-base text-lg"> English US </span>,
        },
        {
          name: <span className=" sm:text-base text-lg"> English UK </span>,
        },
        {
          name: <span className=" sm:text-base text-lg">Espanol <span className=" text-gray-400 text-sm hover:text-[#0AC5A8]">BETA</span></span>,
        },
      ],
    },
   
  ];


  return (
    <div className=' fixed top-0 w-full'>
      <div className='header-parent bg-[#F5F5F5] sm:flex sm:space-x-24 sm:h-20 h-14 sm:p-1 p-2 shadow-md '>
          <a href='#' className='logo-anchor'>
            <img className='sm:w-44 sm:h-12 w-36 h-12  sm:m-4 ' src={resumeWiseLogo} alt='logo' />  
          </a>
        <header className=' hidden header sm:flex sm:justify-center sm:space-x-20 '>
          
          <NavigationDesktop navLinks={navLinks} className= '' />

          <Link to="/my-document">   
            <button type='button' className=' hidden group w-32 sm:w-36 px-1 py-1 sm:px-2 sm:py-2 sm:ml-40 sm:mt-4 rounded-3xl border bg-[#0AC5A8] 
            sm:flex items-center text-center text-white text-xs sm:text-base font-quicksand font-semibold whitespace-nowrap '> 
              My Documents 
            </button>
          </Link>

          {/* avatar settings modal */}
          <Avatar/>
          
        </header>

        {/* opening amd closing of mobile navbar */}
        <div onClick={() => setNav(!nav) } className=" absolute cursor-pointer pr-8 z-30 sm:hidden flex left-[23rem] top-4">
          {nav ? <FaTimes  size={30} className=" text-[#090c13]"/> : <HiMenu size={30} className="text-[#0AC5A8]"/>}
        </div>


        {nav && (

        <div className=" sm:hidden absolute flex  w-full h-screen top-0 left-0 bg-gray-600 opacity-90">
          <div className=" sm:hidden flex flex-col justify-start items-center  absolute top-0 left-44 w-60 h-screen bg-white shadow-lg text-[#090c13] font-quicksand ">


            {/* My Documents*/}
            <div className="mt-20 flex flex-col space-y-4">

              <Link to="/my-document">              
                <button type='button' className=' group w-52 sm:w-36 px-1 py-1  sm:px-2  sm:py-2 sm:ml-36 sm:mt-2 rounded-3xl border bg-[#0AC5A8] 
                        flex items-center justify-center text-center text-white text-lg sm:text-base font-quicksand font-semibold whitespace-nowrap '> 
                  My Documents 
                </button>
              </Link>

              <Link to="/account-setting">
                <button type='button' className=' group w-52 sm:w-36 px-1 py-1  sm:py-2 sm:ml-36 sm:mt-2 rounded-3xl border bg-stone-200 
                        flex items-center text-center justify-center text-[#0AC5A8] text-lg sm:text-base font-quicksand font-semibold whitespace-nowrap '> 
                  Account Page
                </button>
              </Link>

              {/* underline */}
              <div className=" w-52 h-0 flex justify-center mt-4 border-b border-stone-400"></div>

              <NavigationDesktop navLinks={navLinks} />
                {/* underline */}
              <div className=" w-52 h-0 flex justify-center mt-20 border-b border-stone-400"></div>


              <Link to="/about-us">
                <button type='button' className=' text-[#090c13] text-lg sm:text-base font-quicksand font-semibold whitespace-nowrap '> 
                  About Us
                </button>
              </Link>
              <Link to="/e-book-store">
                <button type='button' className=' text-[#090c13] text-lg sm:text-base font-quicksand font-semibold whitespace-nowrap '> 
                  eBook Store
                </button>
              </Link>
            </div>

            <div className=" w-52 h-0 flex justify-center mt-4 border-b border-stone-400"></div>


            <Link to="/sign-out">
                <button type='button' className=' text-[#090c13] text-lg sm:text-base -ml-[7rem] pl-2 i font-quicksand font-semibold whitespace-nowrap '> 
                  Sign Out
                </button>
              </Link>
            

            {/* <div className="px-4 cursor-pointer py-5 -top-64 ">
            </div> */}
            


          </div> 
        </div>

        )}

        {/* Display of mobile navbar items */}
        
    </div>
    </div>
  );
}

export default Navbar;
