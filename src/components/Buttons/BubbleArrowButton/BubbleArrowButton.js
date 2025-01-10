import React from 'react';
import './BubbleArrowButton.css';
// import nextBubbleArrow from '../img/icons/arrow next prpl.png'; // Adjust the path as necessary
// import prevBubbleArrow from '../img/icons/arrow previous prpl.png'; // Adjust the path as necessary


const BubbleArrowButton = ({ direction, onClick }) => {
    // const backgroundImageUrl = direction === 'next' ? nextBubbleArrow : prevBubbleArrow;
    return (
        <button
          className="arrow-button"
          // onClick={onClick}
          // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    />
  );
};

export default BubbleArrowButton;
