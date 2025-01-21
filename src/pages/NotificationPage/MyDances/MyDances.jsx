import React from 'react'
import edit from '../../../img/icons/edit.png'
import eliza from '../../../img/icons/eliza.png'
import dance from '../../../img/icons/dance.png'
import bachata from '../../../img/icons/bachata.png'
import kizomba from '../../../img/icons/kizomba.png'
import brazilian from '../../../img/icons/brazilian.png'
import dropdown from '../../../img/icons/dropdown.png'
import year from '../../../img/icons/year.png'
import follow from '../../../img/icons/follow.png'
import lead from '../../../img/icons/lead.png'
import bg from '../../../img/icons/magic_stream_upwards.png'
import MyFPevents from './MyFPevents'
import KuduRecieved from './KuduRecieved'
import ReviewLeft from './ReviewLeft'
import KuduShared from './KuduShared'
import Calender from './Calender'
import '../MyDances/mydances.css'

function MyDances() {
    return (
        <>
            <div className='p-5' style={{ backgroundColor: '#f6d46b' }}>
                <div className='d-md-flex justify-content-between'>
                    <div>
                        <div><img src={edit} alt='edit' width={30} height={30} /></div>
                        <div> <img src={eliza} alt='eliza' className='imgmain'/></div>
                    </div>
                    <div>
                        <h2 className='text-center fw-bold'>My Dance Profile</h2>
                        <div>
                            <div className='d-flex align-items-center flex-column justify-content-end '>
                                <div className='d-flex mt-2  position-relative right-5'><div style={{ width: '320px', height: '2px', border: '1px solid black ', alignSelf: 'center' }}></div><div className='rounded-circle self-center' style={{ width: '20px', height: '20px', backgroundColor: 'black' }}></div></div>
                                <div className='d-flex align-items-start'>
                                    <img src={dropdown} alt='dropdown' width={20} />
                                </div>
                            </div>
                        </div>
                        <div className='d-md-flex  bg-transparent mt-2'>
                            <img src={dance} alt='img' width={100} height={50} style={{ alignSelf: 'center' }} />
                            <img src={bachata} alt='img' width={120} height={60} />
                            <img src={kizomba} alt='img' width={120} height={60} />
                            <img src={brazilian} alt='img' width={120} height={60} />
                        </div>
                        <div className='d-md-flex gap-2 bg-transparent mt-4'>
                            <img src={year} alt='img' width={100} height={50} />
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h5 className='fw-bold'>5</h5></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h5 className='fw-bold'>7</h5></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h5 className='fw-bold'>5</h5></div>
                        </div>
                        <div className='d-md-flex gap-2 bg-transparent mt-4' >
                            <img src={follow} alt='img' width={100} height={50} />
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6 className='fw-bold'>Advanced</h6></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6 className='fw-bold'>Advanced</h6></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6 className='fw-bold'>Advanced</h6></div>
                        </div>
                        <div className='d-md-flex gap-2 bg-transparent mt-4'>
                            <img src={lead} alt='img' width={100} height={50} />
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6 className='fw-bold'>Intermediate</h6></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6></h6></div>
                            <div style={{ width: '120px', alignSelf: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}><h6 className='fw-bold'>Intermediate</h6></div>
                        </div>
                    </div>
                </div>
                <div className='d-md-flex justify-content-between'>
                    <div className='mt-3 px-5'>
                        <div className='d-flex gap-5 fw-bold textdiv'><h4 className='fw-bold'>UserName:</h4> <h4 className='fw-bold'> HugsOfFire</h4></div>
                        <div className='d-flex gap-5 fw-bold textdiv'><h4 className='fw-bold' >Email:</h4> <h4>voila@gmail.com</h4></div>
                        <div className='d-flex gap-5 fw-bold textdiv'><h4 className='fw-bold' >Name:</h4> <h4> Eliza</h4></div>
                        <div className='d-flex gap-5 fw-bold textdiv'><h4 className='fw-bold' >Dance alias:</h4> <h4> Hugs Of Fire</h4></div>
                        <div className='d-flex gap-5 fw-bold textdiv'><h4 className='fw-bold' >City:</h4> <h4> MTL</h4></div>
                        <div className='d-flex gap-5 fw-bold'><h4 className='fw-bold' style={{ width: '165px' }}>I Move&Muse:</h4> <h4> With all my being</h4></div>
                    </div>
                    <div>
                        <img src={bg} alt='img' height={300} />
                    </div>
                </div>
            </div>
            {/* <MyFPevents /> */}
            <KuduRecieved/>
            <ReviewLeft/>
            <KuduShared/>
            <Calender/>

        </>

    )
}

export default MyDances