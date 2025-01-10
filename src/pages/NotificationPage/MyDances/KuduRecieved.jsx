import React, { useState } from 'react'
import dropdown from '../../../img/icons/dropdown.png'
import Kusos_received from '../../../img/icons/Kusos_received.png'
import profile from '../../../img/icons/heleriCopy.png'
import flag from '../../../img/icons/redflage.png'
import heart from '../../../img/icons/heart.png'
import empty from '../../../img/icons/festival5stars.png'
import FlaggedBg from "../../../img/icons/flagged-bg.svg";
import FlaggedBtn from "../../../img/icons/flagged-btn.svg";
import arrowright from "../../../img/icons/arrowright.png";
import textcard from '../../../img/icons/textcard2.jpg';
function KuduRecieved() {
  const [showMessage, setShowMessage] = useState(false);

  const handleFlagClick = () => {
    setShowMessage(!showMessage);
  };
  const Profile = [
    {
      image: profile,
      text: 'Excellent Technique'
    },
    {
      image: profile,
      text: 'Excellent Technique'
    },
    {
      image: profile,
      text: 'Excellent Technique'
    },
    {
      image: profile,
      text: 'Excellent Technique'
    },
    {
      image: profile,
      text: 'Excellent Technique'
    }
  ]
  const textCard = [
    {
      imag: textcard
    },
    {
      imag: textcard
    },
    {
      imag: textcard
    },
    {
      imag: textcard
    },
    {
      imag: textcard
    },
    {
      imag: textcard
    }
  ]
  const Empty = [
    {
      imag: empty
    },
    {
      imag: empty
    },
    {
      imag: empty
    },
    {
      imag: empty
    },
    {
      imag: empty
    },
    {
      imag: empty
    }
  ]
  return (
    <div className='p-5'
      style={{ backgroundColor: '#f5dea8', }}>
      <div className='d-md-flex gap-3'>
        <div >
          <h4 className='fw-bold px-4' >Kudu Recieved</h4>
          <div className='d-flex mt-2  position-relative right-5'><div className='rounded-circle self-center' style={{ width: '20px', height: '20px', backgroundColor: 'black' }}></div><div style={{ width: '220px', height: '2px', border: '1px solid black ', alignSelf: 'center' }}></div></div>
          <div className='d-flex justify-content-end mt-1' style={{ width: '240px' }}>
            <img src={dropdown} alt='dropdown' width={20} />
          </div>
        </div>
        <div >
          <img src={Kusos_received} alt='img' width={110} />

        </div>
      </div>
      <div>
        <div className='d-md-flex gap-3'>
          <div className='d-flex gap-5'>
            {Profile.map((item, index) => (
              <div>
                <img src={item.image} alt='' width={120} />
                <h5 className='text-center fw-bold' style={{ width: '100px' }}>{item.text}</h5>
              </div>
            ))
            }
          </div>
          <div>
            <div >
              <img src={dropdown} alt='dropdown' width={20} />
            </div>
            <h5>PKC 2023</h5>
            <div className='d-flex gap-2'>
              <h5 className='d-flex align-self-end'>Annoying and clumsy! </h5>
              <img src={flag} alt='flag' width={50} onClick={handleFlagClick} />
            </div>
            {showMessage && (
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{
                  position: 'relative',
                  right: "0",
                  top: '',

                  backgroundImage: `url(${FlaggedBg})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "170px",
                  width: "280px",
                }}
              >
                <div className="w-75 h-75 d-flex flex-column">
                  <textarea
                    name=""
                    id=""
                    className="w-100 h-100 border-0 p-1"
                    placeholder="When flagging content please include message for our admin"
                    style={{ outline: "none" }}
                  ></textarea>
                  <button
                    className="btn position-relative start-50"
                    style={{
                      backgroundImage: `url(${FlaggedBtn})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "110px",
                      height: "50px",
                    }}
                  >
                    Submit
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute end-0"
                  aria-label="Close"
                  style={{ top: 25 }}
                  onClick={() => setShowMessage(false)}
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginTop: '200px' }}>
          <div className='d-flex gap-2'>
            <h4 className='fw-bold pl-4' >Favorite Festivals</h4>
            <img src={heart} alt='img' width={25} height={25} />
          </div>
          <div className='d-flex mt-2  position-relative right-5'><div className='rounded-circle self-center' style={{ width: '20px', height: '20px', backgroundColor: 'black' }}></div><div style={{ width: '220px', height: '2px', border: '1px solid black ', alignSelf: 'center' }}></div></div>
          <div className='d-flex justify-content-end mt-1' style={{ width: '240px' }}>
            <img src={dropdown} alt='dropdown' width={20} />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {
            Empty.map((item, index) => (

              <img src={item.imag} alt='' width={400} height={200} />

            ))
          }

        </div>
        <div className='self-end d-flex my-5   justify-content-end w-100'>
          <img src={arrowright} alt='arrow' width={50} />
        </div>
      </div>

      {/* //Favorite Articles */}
      <div>
        <div style={{ marginTop: '200px' }}>
          <div className='d-flex gap-2'>
            <h4 className='fw-bold pl-4' >Favorite Articles</h4>
            <img src={heart} alt='img' width={25} height={25} />
          </div>
          <div className='d-flex mt-2  position-relative right-5'><div className='rounded-circle self-center' style={{ width: '20px', height: '20px', backgroundColor: 'black' }}></div><div style={{ width: '220px', height: '2px', border: '1px solid black ', alignSelf: 'center' }}></div></div>
          <div className='d-flex justify-content-end mt-1' style={{ width: '240px' }}>
            <img src={dropdown} alt='dropdown' width={20} />
          </div>
        </div>
        <div className=' mt-5 ' style={{width:'80%', gap:'100px' ,display:'flex', flexWrap:'wrap'}}>
          {
            textCard.map((item, index) => (
             
                <img src={item.imag} alt='' width={250} height={250} className='grid-item ' />
            
            ))
          }

        </div>
        <div className='self-end d-flex my-5   justify-content-end w-100'>
          <img src={arrowright} alt='arrow' width={50} />
        </div>
      </div>

    </div>
  )
}

export default KuduRecieved