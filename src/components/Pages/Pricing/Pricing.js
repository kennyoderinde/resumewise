import React, { useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

const CustomersRating = () => {
  const [responses, setResponses] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userComment, setUserComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    setIsSubmitDisabled(false);
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmission = () => {
    const currentDate = new Date().toLocaleString();
    setResponses([
      ...responses,
      { name: userName, rating: rating, comment: userComment, date: currentDate },
    ]);
    setUserComment('');
    setUserName('');
    setRating(null);
    setIsSubmitDisabled(true);
  };

  return (
    <div className='flex mt-40'>
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
              size={60}
              className={
                ratingValue <= (hover || rating)
                  ? 'text-yellow-500'
                  : ' text-gray-300'
              }
              onClick={() => handleRatingClick(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Rating: {rating}</p>
      <div>
        <input
          type='text'
          placeholder='Your name'
          value={userName}
          onChange={handleNameChange}
        />
        <input
          type='text'
          placeholder='Add a comment...'
          value={userComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleSubmission} disabled={isSubmitDisabled}>
          Submit
        </button>
      </div>
      <div>
        <h2>Responses:</h2>
        <ul>
          {responses.map((response, index) => (
            <li key={index}>
              User: {response.name}, Rating: {response.rating}, Comment: {response.comment}, Date: {response.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomersRating;
