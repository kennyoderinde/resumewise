import React, { useState } from 'react';
import { RiStarSFill } from 'react-icons/ri';

const CustomersRating = () => {
  const [responses, setResponses] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [userComment, setUserComment] = useState('');
  const [userName, setUserName] = useState('');
  const [currentCommentIndex, setCurrentCommentIndex] = useState(3);

  const handleRatingClick = (ratingValue) => {
    const currentDate = new Date().toLocaleString();
    setRating(ratingValue);
    setResponses([
      ...responses,
      { name: userName, rating: ratingValue, comment: userComment, date: currentDate },
    ]);
    setUserComment('');
    setUserName('');
    setCurrentCommentIndex(responses.length);
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleNextComment = () => {
    if (currentCommentIndex < responses.length - 1) {
      setCurrentCommentIndex(currentCommentIndex + 1);
    }
  };

  const handlePrevComment = () => {
    if (currentCommentIndex > 0) {
      setCurrentCommentIndex(currentCommentIndex - 1);
    }
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
        <button onClick={() => handleRatingClick(rating)}>Submit</button>
      </div>
      <div>
        <h2>Responses:</h2>
        {responses.length > 0 && (
          <div>
            <button onClick={handlePrevComment}>Previous</button>
            <button onClick={handleNextComment}>Next</button>
            <ul>
              <li>
                User: {responses[currentCommentIndex].name}, Rating: {responses[currentCommentIndex].rating}, Comment: {responses[currentCommentIndex].comment}, Date: {responses[currentCommentIndex].date}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomersRating;
