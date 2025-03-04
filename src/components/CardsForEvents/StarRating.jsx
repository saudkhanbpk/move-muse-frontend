import React from 'react';
import './Starrating.css';

const StarRating = ({ rating, onRatingChange }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); 
            onRatingChange(star);
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
