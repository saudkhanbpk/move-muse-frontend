import React from 'react'
import plus1 from '../../../img/icons/plusss.png'
import arrowright from '../../../img/icons/arrowright.png'
import blueplus from '../../../img/icons/blueplus.png'
import plus2 from '../../../img/icons/we_want_your_feedback.png'
import '../MyDances/mydances.css'
function MyFPevents() {
    return (
        <div className='p-5 myfuturemain' style={{backgroundColor: '#fff7d8'}}>
            <div className='d-md-flex justify-content-between '>
                <h2 className='text-violet fw-bold'>My Future <br />
                    Events</h2>
                <div className='d-md-flex gap-3'>
                    <div
                        className='rounded-4 position-relative d-flex flex-column justify-content-end  mt-md-0 mt-3 align-items-start p-3 shadow'
                        style={{ backgroundColor: '#72559f', width: '250px', height: '250px' }}
                    >
                        <img
                            src={plus1}
                            alt='plus icon'
                            width={20}
                            height={20}
                            className='position-absolute top-0 end-0 m-2'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-white fw-bold mb-2 ms-2'>
                            Love Kiz
                        </h5>
                    </div>
                    <div
                        className='rounded-4 position-relative d-flex flex-column justify-content-end mt-md-0 mt-3 align-items-start p-3 shadow'
                        style={{ backgroundColor: '#e2e2e2', width: '250px', height: '250px' }}
                    >
                        <img
                            src={blueplus}
                            alt='plus icon'
                            width={20}
                            height={20}
                            className='position-absolute top-0 end-0 m-2'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-white fw-bold mb-2 ms-2'>
                            Swing World
                        </h5>
                    </div>
                    <div
                        className='rounded-4 position-relative d-flex flex-column justify-content-end Salsamania align-items-start p-3 shadow'
                        style={{ backgroundColor: '#ede4da',}}
                    >
                        <img
                            src={plus1}
                            alt='plus icon'
                            width={25}
                            height={25}
                            className='position-absolute top-0 end-0 m-2'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-white fw-bold mb-2 ms-md-2'>
                            Salsamania
                        </h5>
                    </div>
                </div>
            </div>
            <div className='self-end d-flex my-5   justify-content-end w-md-100'>
            <img src={arrowright} alt='arrow' width={50}/>
            </div>
            <div className='d-md-flex justify-content-between '>
                <h2 className='text-violet fw-bold'>My Confirmed<br/> Past Events</h2>
                <div className='d-md-flex gap-3'>
                    <div
                        className='rounded-4 position-relative d-flex flex-column justify-content-end align-items-start p-3 mt-md-0 mt-3 shadow'
                        style={{ backgroundColor: '#e2e2e2', width: '250px', height: '250px' }}
                    >
                        <img
                            src={blueplus}
                            alt='plus icon'
                            width={20}
                            height={20}
                            className='position-absolute top-0 end-0 m-2'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-black fw-bold mb-2 ms-2'>
                        Kiz in the 6
                        </h5>
                    </div>
                    <div
                        className='rounded-4 position-relative d-flex flex-column justify-content-end align-items-start mt-md-0 mt-3 p-3 shadow'
                        style={{ backgroundColor: '#aa02ff', width: '250px', height: '250px' }}
                    >
                        <img
                            src={plus1}
                            alt='plus icon'
                            width={20}
                            height={20}
                            className='position-absolute top-0 end-0 m-2'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-white fw-bold mb-2 ms-2'>
                        Learning & Development Community
                        </h5>
                    </div>
                    <div
                        className='rounded-4 position-relative d-md-flex flex-column justify-content-end bachata align-items-start mt-md-0 mt-3 p-3 shadow'
                        style={{ backgroundColor: '#95b1a9',  }}
                    >
                        <img
                            src={plus2}
                            alt='plus icon'
                            // width={150}
                            
                            className='position-absolute top-0 imgg'
                        />
                        {/* Bottom Start Text */}
                        <h5 className='text-white fw-bold mb-2 ms-2'>
                        Bachata mi gente
                        </h5>
                    </div>
                </div>
            </div>
            <div className='self-end d-flex my-5   justify-content-end w-100'>
            <img src={arrowright} alt='arrow' width={50}/>
            </div>
        </div>
    )
}

export default MyFPevents