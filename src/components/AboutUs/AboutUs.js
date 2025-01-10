import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutus from '../../img/icons/aboutus.svg'
const MyComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{marginTop: '30px'}}>
          <div className="p-3" >
            <img src={aboutus} alt='' />
          </div>
        </div>
        <div className="col-9">
        <div>
          <img />
        </div>
          <div style={{marginTop: '100px'}}>
            <div className="p-3">
              <h2 className="text-center fs-1 bold">About Us</h2>
              <p className='fs-5'>Move & Muse was born from a simple yet profound realization: while the growing number of dance festivals bring us together, our shared experiences and insights are what truly allows us to create that safe and caring space when entering a dance room. The way we see it, feedback, love, and kindness are what help weave the rich tapestry of our community. As we seek more depth and density in movement, we couldn’t find a platform dedicated to sharing our experiences, so we created one!
                Welcome to the place where every dancer, from beginners to professionals, can share feedback, learn from others, and help dance organizers create more inclusive and engaging experiences for everyone!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
