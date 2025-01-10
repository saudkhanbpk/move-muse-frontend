import React from 'react';
import plus1 from '../../img/icons/plusss.png';
import blueplus from '../../img/icons/blueplus.png';
import dropdown from '../../img/icons/dropdown.png'
function ConfirmAttendee() {
  return (
    <div className=' d-flex flex-column align-items-center justify-content-center  p-5' style={{backgroundColor:'#fff7d8'}}>
      {/* Card Wrapper */}
      <div
        className='card bg-transparent shadow p-4 rounded-4 border-3 border-black'
        style={{ maxWidth: '900px' }}
      >
        <h3 className='text-center mb-4 fw-bold'>Confirm attendance:</h3>
        <div className='row g-4'>
          {/* Card 1 */}
          <div className='col-md-6 d-flex flex-column align-items-center'>
            <div
              className='rounded-4 position-relative d-flex flex-column justify-content-end align-items-start p-3 shadow'
              style={{ backgroundColor: '#aa02ff', width: '250px', height: '250px' }}
            >
              {/* Top End Icon */}
              <img
                src={plus1}
                alt='plus icon'
                width={20}
                height={20}
                className='position-absolute top-0 end-0 m-2'
              />
              {/* Bottom Start Text */}
              <h5 className='text-white fw-bold mb-2 ms-2'>
                Learning & Development <br /> Community
              </h5>
            </div>
            <div className='d-flex mt-2'><div className='rounded-circle self-center' style={{width:'20px', height:'20px', backgroundColor: 'black'}}></div><div style={{width:'270px', height:'2px', border:'1px solid black ', alignSelf:'center'}}></div></div>
           <div className='d-flex justify-content-end'>
            <img src={dropdown} alt='dropdown' width={20} />
            </div>
            <ul className='list-unstyled mt-2'>
              <li className='fw-bold fs-5'>• I was there as →</li>
              <li className='fw-bold fs-5'>• I missed this event</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className='col-md-6 d-flex flex-column align-items-center'>
            <div
              className='rounded-4 position-relative d-flex flex-column justify-content-end align-items-start p-3 shadow'
              style={{ backgroundColor: '#e2e2e2', width: '250px', height: '250px' }}
            >
              {/* Top End Icon */}
              <img
                src={blueplus}
                alt='blue plus icon'
                width={20}
                height={20}
                className='position-absolute top-0 end-0 m-2'
              />
              {/* Bottom Start Text */}
              <h5 className='text-dark fw-bold mb-2 ms-2'>Kiz in the 6</h5>
            </div>
            <div className='d-flex mt-2'><div className='rounded-circle self-center' style={{width:'20px', height:'20px', backgroundColor: 'black'}}></div><div style={{width:'270px', height:'2px', border:'1px solid black ', alignSelf:'center'}}></div></div>
            <img src={dropdown} alt='dropdown' width={20}/>
            <ul className='list-unstyled mt-2'>
              <li className='fw-bold fs-5'>• I was there as →</li>
              <li className='fw-bold fs-5'>• attendee</li>
              <li className='fw-bold fs-5'>• organizer</li>
              <li className='fw-bold fs-5'>• volunteer</li>
              <li className='fw-bold fs-5'>• artist</li>
              <li className='fw-bold fs-5'>• invited guest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAttendee;
