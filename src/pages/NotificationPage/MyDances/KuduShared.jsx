import React from 'react'
import dropdown from '../../../img/icons/dropdown.png';
import man from '../../../img/icons/man.png';
import profile from '../../../img/icons/heleriCopy.png';
import arrowright from '../../../img/icons/arrowright.png';
import magic_stream_left from '../../../img/icons/img12.png';
function KuduShared() {
    const Kudu = [
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
        {
            image: profile,
            text: 'Safe Space & Connection',
            heading: 'Richard, Kizolove 2022',
            para: 'The highest excellence of following and commitment to a shared journey'
        },
    ]
    return (
        <div className='p-5' style={{ backgroundColor: '#f5dea8' }}>
            <div className="d-md-flex gap-3">
                <div>
                    <div className="d-flex gap-3">
                        <h4 className="fw-bold px-4 align-self-end">Kudu Recieved</h4>
                        <div>
                            <img src={man} alt="img" width={100} />
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
            <div className='mt-4 d-flex flex-wrap justify-content-center justify-content-md-between px-5'>
                {Kudu.map((item, index) => {
                    return(

                    <div key={index} className='d-flex  justify-content-center align-items-center gap-5 mt-5 ' style={{ width: '40%' }}>
                        <div>
                            <div className='d-flex justify-content-center flex-column '>
                                <img src={item.image} alt='img' width={120} />
                            </div>
                            <h5 className='fw-bold text-center mt-2'>{item.text}</h5>
                        </div>
                        <div>
                            <h4 className='fw-bold'>{item.heading}</h4>
                            <p className='fw-semibold'>{item.para}</p>
                        </div>


                    </div>)
})}

            </div>
            <div className='self-end d-flex my-5   justify-content-end w-100'>
            <img src={arrowright} alt='arrow' width={50}/>
            </div>

            <div className='d-flex justify-content-center'>
                <img src={magic_stream_left} alt='magic_stream_left' width={250} />
                <div className='d-flex align-items-end'>
                <h3 className='fw-bold'>Thank you for being part of the Movement.<br/>
                And for making Movement part of you. </h3>
                </div>
            </div>
        </div>
    )
}

export default KuduShared