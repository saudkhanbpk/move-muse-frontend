import React, { useState } from 'react';
import circleimg from '../../img/icons/upload1.png';
import Dropdown from '../../components/custom-dropdown/Dropdown';

const InitialSignInInfo = () => {
    const [dances, setDances] = useState([
        {
            style: "Bachata",
            years: "5 years",
            follow: "advanced",
            lead: "beginner",
        },
        {
            style: "Kizomba",
            years: "2 years",
            follow: "intermediate",
            lead: "intermediate",
        },
    ]);

    const addDance = () => {
        // Default blank dance entry
        const newDance = {
            style: "New Style",
            years: "0 years",
            follow: "beginner",
            lead: "beginner",
        };
        setDances([...dances, newDance]);
    };
    const handleStyle = (e) => {};
    const styleOptions =['Male', 'Female', 'Others'];
    return (
        <div className='d-flex flex-column align-items-center justify-content-center  p-5' style={{backgroundColor:'#fff7d8'}}>
            <div className='d-flex gap-5'>
                <div>
                    <img src={circleimg} alt='img' />
                </div>
                <div className='d-flex justify-content-center align-items-center' style={{
                    width: '230px',
                    height: '230px',
                    backgroundColor: '#99c4b8',
                    borderRadius: '120px'
                }}>
                    <h5 className='text-white fw-bold'>Initial sign in info</h5>
                </div>
            </div>
            <div className=" my-5">
                <div className="card bg-transparent shadow p-5 rounded-4 border-3 border-black">
                    {/* Top Form Fields */}
                    <div>
                        <div className="  mt-5">
                            <div className="d-flex col-md-6">
                                <label className="form-label fw-bold   d-flex " style={{ width: '180px' }}>Username:</label>
                                <input type="text" className="form-control border-0 border-bottom border-black " />
                            </div>
                            <div className="col-md-6 d-flex">
                                <label className="form-label fw-bold  self-end d-flex" style={{ width: '180px' }}>Name:</label>
                                <input type="text" className="form-control border-0 border-bottom border-black" />
                            </div>
                        </div>

                        <div className=" ">
                            <div className="col-md-6 d-flex">
                                <label className="form-label fw-bold self-end d-flex" style={{ width: '180px' }}>Dance Alias:</label>
                                <input type="text" className="form-control border-0 border-bottom border-black" placeholder="“______”" />
                            </div>
                            <div className="col-md-6 d-flex">
                                <label className="form-label fw-bold  self-end d-flex" style={{ width: '180px' }}>City:</label>
                                <input type="text" className="form-control border-0 border-bottom border-black" />
                            </div>
                        </div>

                        <div className=" mb-3">
                            <div className="col-md-6 d-flex">
                                <label className="form-label fw-bold self-end d-flex" style={{ width: '180px' }}>I Move & Muse:</label>
                                <input type="text" className="form-control border-0 border-bottom border-black" />
                            </div>
                        </div>
                    </div>

                    {/* A Little About Me */}
                    <h5 className="text-center  my-4 fw-bold" style={{color:'#480249'}}>A little about me</h5>
                    <div className="row text-center mb-4">
                        <div className="col-md-4">
                               <Dropdown
                                        id="style"
                                        label="Gender"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                        </div>
                        <div className="col-md-4">
                        <Dropdown
                                        id="style"
                                        label="Ethnicity"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                           
                        </div>
                        <div className="col-md-4">
                        <Dropdown
                                        id="style"
                                        label="Birthday"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                        </div>
                    </div>

                    {/* My Dances */}
                    <div className='' >
                        <div className='col-md-6'>
                            <h5 className=" my-4 fw-bold text-center" style={{color:'#480249'}}>My Dances</h5>
                        </div>
                        <div className='d-flex  gap-5 self-center'>
                            <div className=" text-center" style={{width:'300px'}}>
                                <div className='d-flex gap-3 w-full'>
                                    <div className=" mb-3">
                                    <Dropdown
                                        id="style"
                                        label="Style"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                                    </div>
                                    <div className=" mb-3">
                                    <Dropdown
                                        id="style"
                                        label="Since"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className=" mb-3">
                                    <Dropdown
                                        id="style"
                                        label="Follow"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                                    </div>
                                    <div className=" mb-3">
                                    <Dropdown
                                        id="style"
                                        label="Lead"
                                        onChange={handleStyle}
                                        options={styleOptions}
                                      />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-3 d-flex justify-content-center align-items-center">
                                <button className="btn btn-circle " style={{ border:'3px solid #480249' }} onClick={addDance}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Dance List */}
                    <div className="mt-3">
                        {dances.map((dance, index) => (
                            <p key={index} className='fw-bold' style={{color:'#480249'}}>
                                {index + 1}. {dance.style}; {dance.years}; Follow - {dance.follow}; Lead - {dance.lead}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InitialSignInInfo;
