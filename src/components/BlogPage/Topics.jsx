import React from 'react';
import plusicon from '../../img/icons/plus-icon.svg';
import LioneIcon from '../../img/icons/line-icon.svg'
import './Topics.css';
import PaginationButtons from './PaginationButtons';

const Topics = () => {
    return (
        <div className='topics mt-5'>
            <p>1. Beginners path Add your topic</p>
            <p>2. Importance of basics </p>
            <p>3. Ethics in a close dance </p>
            <p>4. Intentionality </p>
            <p>5. Knowing yourself</p>
            <p>6. Where di we begin </p>
            <p>7. Beginners path</p>
            <p>8. Importance of basics </p>
            <p>9. Ethics in a close dance </p>
            <p>10. Intentionality </p>
            <p>11. Knowing yourself</p>
            <p>12. Where di we begin </p>
            <p>13. Sex Ed & Social Dance</p>
            <div className="icon-container d-flex align-items-center">
                <img className="plusicon me-2" src={plusicon} alt="Plus Icon" />
                <span className="square-phrase">Add your topic</span>

            </div>
            <div>
                <PaginationButtons />
            </div>
            <div>
                <img src={LioneIcon} alt="line" className="img-fluid mt-4" />
            </div>
        </div>
    );
};

export default Topics;
