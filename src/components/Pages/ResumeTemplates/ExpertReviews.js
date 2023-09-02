import React, { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiQuoteRight, BiQuoteLeft } from 'react-icons/bi';



import img1 from '../../assets/Brandon.jpg';
import img2 from '../../assets/Linn.jpg';
import img3 from '../../assets/Hicham.jpg';
import img4 from '../../assets/Shylean.jpg';
import img5 from '../../assets/Yuki.jpg';
import img6 from '../../assets/kennypsprt.PNG';



import { TbPlayerTrackPrev, TbPlayerTrackNext } from 'react-icons/tb';

const ExpertReviews = () => {
  const ExpertData = [
    {
      id: '1',
      img: img1,
      details: {
        name: 'Kehinde Oderinde',
        role: 'Software Developer, Coach & Trainer',
        linkedin: 'https://www.linkedin.com/',
      },
      text: [
        "For over 10 years now, I've been on both sides of the fence, career counseling, and recruitment, and let me tell you, the writer's block hits hard when it comes to drafting your resume.",
        'Novorésumé not only offers you a smart and modern template for you to fill in, but their team has also crafted a winning combo of aesthetics and functionality that will inspire you to apply for the job you thought was out of your league. Give it a try!',
      ],
    },

    {
      id: '2',
      img: img2, // Corrected: Removed JSX element
      details: {
        name: 'Biron Clark',
        role: 'Former Executive Recruiter',
        linkedin: 'https://www.linkedin.com/',
      },
    //   icon1: <BiQuoteRight.BiSolidQuoteAltRight />,
    //   icon2: <BiQuoteLeft.BiSolidQuoteAltLeft />,
      text: [
        'Novorésumé is one of the few resume builders that I recommend online. Their resume templates are modern and eye-catching, and will grab an employer\'s attention. As a former Recruiter, if a candidate sent me a resume built with one of these templates, I would take notice and be impressed.',
        'The software also makes it easy to enter your info and handles all of the formatting for you, so you can get your resume ready to send out as quickly as possible. I recommend these templates whether you\'re a recent graduate or experienced candidate.',
      ],
    },

    {
      id: '3',
      img: img3,
      details: {
        name: 'Gabriela Tardea',
        role: 'Career Strategist, Coach & Trainer',
        linkedin: 'https://www.linkedin.com/',
      },
    //   icon1: <BiQuoteRight.BiSolidQuoteAltRight />,
    //   icon2: <BiQuoteLeft.BiSolidQuoteAltLeft />,
      text: [
        'When I consult people on resume writing, the most common question that I am asked it is about the content and what components to add or avoid, when they have less than 5 years of work experience.',
        'On this platform, you not only have access to many options, but you get guidance on what to choose and why. When the work experience is less than 5 years, the other components such as languages, projects, volunteering experiences, hobbies etc, make a huge difference.',
      ],
    },

    {
        id: '4',
        img: img4,
        details: {
          name: 'Gabriela Tardea',
          role: 'Career Strategist, Coach & Trainer',
          linkedin: 'https://www.linkedin.com/',
        },
      //   icon1: <BiQuoteRight.BiSolidQuoteAltRight />,
      //   icon2: <BiQuoteLeft.BiSolidQuoteAltLeft />,
        text: [
          'When I consult people on resume writing, the most common question that I am asked it is about the content and what components to add or avoid, when they have less than 5 years of work experience.',
          'On this platform, you not only have access to many options, but you get guidance on what to choose and why. When the work experience is less than 5 years, the other components such as languages, projects, volunteering experiences, hobbies etc, make a huge difference.',
        ],
      },

      {
        id: '5',
        img: img5,
        details: {
          name: 'Gabriela Tardea',
          role: 'Career Strategist, Coach & Trainer',
          linkedin: 'https://www.linkedin.com/',
        },
      //   icon1: <BiQuoteRight.BiSolidQuoteAltRight />,
      //   icon2: <BiQuoteLeft.BiSolidQuoteAltLeft />,
        text: [
          'When I consult people on resume writing, the most common question that I am asked it is about the content and what components to add or avoid, when they have less than 5 years of work experience.',
          'On this platform, you not only have access to many options, but you get guidance on what to choose and why. When the work experience is less than 5 years, the other components such as languages, projects, volunteering experiences, hobbies etc, make a huge difference.',
        ],
      },

      {
        id: '6',
        img: img6,
        details: {
          name: 'Oana Vintila',
          role: 'Career Counsellor',
          linkedin: 'https://www.linkedin.com/',
        },
      //   icon1: <BiQuoteRight.BiSolidQuoteAltRight />,
      //   icon2: <BiQuoteLeft.BiSolidQuoteAltLeft />,
        text: [
          'When I consult people on resume writing, the most common question that I am asked it is about the content and what components to add or avoid, when they have less than 5 years of work experience.',
          'On this platform, you not only have access to many options, but you get guidance on what to choose and why. When the work experience is less than 5 years, the other components such as languages, projects, volunteering experiences, hobbies etc, make a huge difference.',
        ],
      },

    // Add other ExpertData items here...
  ];

  const itemsPerPage = 2; // Display 3 items per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(ExpertData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='md:p-20 md:mt-20 p-5'>
      <div className="flex w-full h-full mx-auto flex-col justify-center md:p-10 bg-[#0AC5A8] rounded-lg md:-mt-10 -mt-12 mb-20">
        <p className="text-center md:text-4xl text-2xl font-bold font-poppins text-slate-700 mb-3 px-4">
          Expert Reviews
        </p>
        <div className="w-16 h-[5px] bg-white flex mx-auto mb-5 rounded-md"></div>

        <div className='flex mx-auto md:justify-between md:space-y-0 space-x-40 justify-center  w-full '>
            <button onClick={handlePrevPage} disabled={currentPage === 0} className=" w-10 h-10 bg-white rounded-full p-2">
            <TbPlayerTrackPrev className=' w-6 h-6 flex mx-auto' />
            </button>

            <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className=" w-10 h-10 bg-white rounded-full p-2"
            >
            <TbPlayerTrackNext className=' w-6 h-6 flex mx-auto' />
            </button>
        </div>

        {/* <ul className="flex w-full h-full md:p-32 gap-16 md:-mt-24"> */}

        <div className="flex justify-center items-center font-poppins">
            <ul className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 md:p-20 p-5 mx-auto w-full h-full" >
                {ExpertData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => (
                <li key={item.id}>
                    <div className=" w-full h-full bg-white md:p-16 p-6 rounded-lg shadow-lg md:-mt-20 ">
                        <div className='flex md:flex-row flex-col md:space-x-12 space-y-4'>
                            <div className="w-full h-auto mx-auto">
                                <img src={item.img} alt="" className="w-32 h-32 rounded-lg mx-auto" />
                            </div>
                            <div className=' w-full md:text-start text-center'>
                                <p className="md:text-3xl text-2xl font-semibold whitespace-nowrap">{item.details.name}</p>
                                <p className="text-base text-gray-500 ">{item.details.role}</p>
                            </div>

                            <button className=' w-10 h-10 bg-gray-700 rounded-full mx-auto flex border p-4 justify-center items-center'>
                                <a href={item.details.linkedin} target="_blank" rel="noopener noreferrer" className='flex mx-auto'>
                                    <FaLinkedinIn className=' text-white ' />
                                </a>
                            </button> 

                        </div>
                        <div className="mt-4 text-center flex flex-col">
    
                        {item.text.map((paragraph, index) => (
                            <p key={index} className="md:text-base text-sm text-gray-600 mb-2 w-full h-full">
                            {paragraph}
                            </p>
                        ))}
                    </div>
                    </div>
                </li>
                ))}
            </ul>
            </div>


        
      </div>
    </div>
  );
};

export default ExpertReviews;
