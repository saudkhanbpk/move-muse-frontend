import React from 'react';
import people from '../../../img/icons/reviewLeft.jpg';
import dropdown from '../../../img/icons/dropdown.png';
import draft from '../../../img/icons/dropNew.webp';
import star from '../../../img/icons/star.png';
import arrowright from '../../../img/icons/arrowright.png';


function ReviewLeft() {
  const reviewLeft = [
    {
      title: 'Vancouver Kiz',
      image: draft,
      para: `Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, 
             diversity, the arts including performances and fashion shows by African designers.`,
      heading: `Creme de la creme`,
    },
    {
        title: 'Vancouver Kiz',
        para: `Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, 
               diversity, the arts including performances and fashion shows by African designers.`,
        heading: `Creme de la creme`,
      },
      {
        title: 'Vancouver Kiz',
        para: `Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, 
               diversity, the arts including performances and fashion shows by African designers.`,
        heading: `Creme de la creme`,
      },
      {
        title: 'Vancouver Kiz',
        para: `Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, 
               diversity, the arts including performances and fashion shows by African designers.`,
        heading: `Creme de la creme`,
      },
  ];

  return (
    <div className="p-5" style={{ backgroundColor: '#f5dea8' }}>
      <div className="d-md-flex gap-3">
        <div>
          <div className="d-flex gap-3">
            <h4 className="fw-bold px-4 align-self-end">Kudu Recieved</h4>
            <div>
              <img src={people} alt="img" width={110} />
            </div>
          </div>
          <div className="d-flex mt-2 position-relative right-5">
            <div
              className="rounded-circle self-center"
              style={{ width: '20px', height: '20px', backgroundColor: 'black' }}
            ></div>
            <div
              style={{
                width: '220px',
                height: '2px',
                border: '1px solid black ',
                alignSelf: 'center',
              }}
            ></div>
          </div>
          <div
            className="d-flex justify-content-end mt-1"
            style={{ width: '240px' }}
          >
            <img src={dropdown} alt="dropdown" width={20} />
          </div>
        </div>
      </div>
      {reviewLeft.map((rev, index) => {
        return (
          <div key={index} className='mt-3'>
            <div className="d-flex justify-content-between" style={{ width: '48%' }}>
              <div className="d-flex gap-3">
                <h5 className="fw-bold align-self-end">{rev.title}</h5>
                <img src={rev.image} alt="dropdown" width={60} />
              </div>
              <div className="d-flex align-items-end">
                <img src={star} alt="star" width={20} />
                <img src={star} alt="star" width={20} />
                <img src={star} alt="star" width={20} />
                <img src={star} alt="star" width={20} />
                <img src={star} alt="star" width={20} />
              </div>
            </div>
            <div
              className="rounded-4 p-3 mt-1"
              style={{ width: '50%', border: '3px solid #9bb09d' }}
            >
              <div className="d-flex gap-3 fw-bold">
                <p>
                  Venue <span>5.0</span>
                </p>
                <p>
                  Venue <span>5.0</span>
                </p>
                <p>
                  Venue <span>5.0</span>
                </p>
                <p>
                  Venue <span>5.0</span>
                </p>
                <p>
                  Venue <span>5.0</span>
                </p>
              </div>
              <h4 className="fw-bold underline"><u>{rev.heading}</u></h4>
              <p className="fw-bold">{rev.para}</p>
            </div>
          </div>
        );
      })}
       <div className='self-end d-flex my-5   justify-content-end w-100'>
            <img src={arrowright} alt='arrow' width={50}/>
            </div>
    </div>
  );
}

export default ReviewLeft;
