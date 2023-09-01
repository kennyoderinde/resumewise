import React, { useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

const CustomersRating = () => {
  const [responses, setResponses] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userComment, setUserComment] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);


  const itemsPerPage = 3; // Number of responses to show per page


  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    setIsSubmitDisabled(false);
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserFullName(event.target.value)
  };


  const handleSubmission = () => {
    // setRating(ratingValue);
    const currentDate = new Date().toLocaleString();

    setResponses([
      ...responses, 
      { rating: rating, comment: userComment, name:userFullName, date: currentDate }
    ]);
    setUserComment('');
    setUserFullName('');
    setRating(null);
    setIsSubmitDisabled(true);
  };


  const totalPages = Math.ceil(responses.length / itemsPerPage);

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

  const displayedResponses = responses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  

  return (
    <>
    <div className=' md:p-12 p-2'>
      <div className=' flex flex-col mb-20 w-full h-full mx-auto justify-center bg-stone-100 p-1 rounded-lg' style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.14)' }}>
        <p className='text-center md:text-3xl text-xl font-semibold font-poppins text-slate-700 mb-3 px-14'>See what our customers think</p>
        <div className=' w-16 h-1 bg-[#0AC5A8] flex mx-auto mb-5'></div>
    
        <div className=' border border-gray-300 w-11/12 h flex md:flex-row flex-col mx-auto'>
          <div className=' flex md:flex-row flex-col mb-20 w-auto h-auto  '>
            <div className='flex md:flex-col space-x-3'>
              <p className=' font-poppins font-medium text-slate-800'>Rate us:</p>

              <div className='flex'>
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type='radio'
                      name='rating'
                      className='hidden'
                      value={ratingValue}
                    />

                    <RiStarSFill
                      //{/* size={40} */}
                      className={
                        `md:w-12 w-8  md:h-12 h-8 bg-gray-300  ${
                          ratingValue <= (hover || rating)
                            ? 'text-[#0AC5A8]'
                            : 'text-white'
                        }`
                      }
                      onClick={() => handleRatingClick(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />

                  </label>
                );
              })}
            </div>
          </div>


            {/* <p>Rating: {rating}</p> */}
          
          <div className=' flex flex-col space-y-3 ml-16 md:mt-0 mt-6  '>
            <input
              type='text'
              placeholder='Full name...'
              value={userFullName}
              onChange={handleNameChange}
              className=' px-4 text-sm  md:h-6 w-44 h-8 outline-none'
              style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.04)' }}

            />
            <input
              type='text'
              placeholder='Add a comment...'
              value={userComment}
              onChange={handleCommentChange}
              className=' px-4 text-sm  md:h-6 w-44 h-8 outline-none'
              style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.04)' }}

            />
            <button 
              onClick={handleSubmission} 
              disabled={isSubmitDisabled}
              className=' text-center text-sm w-20 h-auto bg-[#0AC5A8] hover:bg-slate-600 hover:text-white font-poppins '
              style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.14)' }}

              >
              Submit
            </button>          
          </div>
        </div>    

        <div className=' md:w-6/12 h-full w-full flex mx-auto md:mt-0 -mt-12  '>

          {/* <prev /> next btn */}
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            Prev
          </button>
          
          <ul className=' w-auto h-auto mx-auto flex  md:space-x-20 space-x-10 '>
            {displayedResponses.map((response, index) => (
              <li 
              key={index}
              className=' flex flex-col md:text-center text-start mx-auto items-center'
              >
                <div className=' flex flex-col justify-start w-auto h-auto md:mt-0 mt-6'>
                  <p className='w-16 h-5 text-xs bg-yellow-400 text-start font-semibold '> <span className='font-normal'>Rating: </span>{response.rating} </p>
                  <p className=' text-xs font-medium text-justify'>{response.comment}</p>
                  <p className=' text-xs text-stone-800 text-start'>{response.name}</p>  
                  <p className='text-xs text-stone-500 text-start'>{response.date}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomersRating;
