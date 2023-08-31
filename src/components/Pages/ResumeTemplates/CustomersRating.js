import React, { useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

const CustomersRating = () => {
  const [responses, setResponses] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userComment, setUserComment] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);



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

  

  return (
    <>
    <div className=' hidden md:flex md:flex-col mb-20 w-full h-full mx-auto justify-center bg-stone-200 p-4'>
      <p className='text-center text-3xl font-semibold font-poppins text-slate-700 mb-3'>See what our customers think</p>
      <div className=' w-16 h-1 bg-green-500 flex mx-auto mb-5'></div>
    
      <div className=' hidden md:flex mb-20 w-auto h-auto mx-auto justify-center'>
      {/* <p className=' font-poppins font-medium text-slate-700'>Rate us:</p> */}

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
                size={40}
                className={
                  ratingValue <= (hover || rating)
                    ? 'text-emerald-500'
                    : ' text-white'
                }
                onClick={() => handleRatingClick(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        {/* <p>Rating: {rating}</p> */}

      
        <div className=' flex flex-col space-y-3 ml-20 '>
          <input
            type='text'
            placeholder='Full name...'
            value={userFullName}
            onChange={handleNameChange}
            className=' px-4 text-xs w-40 h-6 outline-none'
          />
          <input
            type='text'
            placeholder='Add a comment...'
            value={userComment}
            onChange={handleCommentChange}
            className=' px-4 text-xs w-40 h-6 outline-none'
          />
          <button 
            onClick={handleSubmission} 
            disabled={isSubmitDisabled}
            className=' text-center text-sm w-20 h-auto bg-emerald-500 font-poppins '
            >
            Submit
          </button>          
        </div>
           
        <div>
          {/* <h2>Responses:</h2> */}
          <ul className=' w-auto h-auto mx-auto flex space-x-20 justify-start ml-20'>
            {responses.map((response, index) => (
              <li 
              key={index}
              className=' flex flex-col text-center mx-auto items-center'
              >
                <div className=' flex flex-col justify-start w-auto h-auto'>
                  <p className='w-16 h-5 text-xs bg-yellow-400 text-start font-semibold '> <span className='font-normal'>Rating: </span>{response.rating} </p>
                  <p className=' text-xs font-medium text-justify'>{response.comment}</p>
                  <p className=' text-xs text-stone-800 text-start'>{response.name}</p>  
                  <p className='text-xs text-stone-500 text-start'>{response.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default CustomersRating;
