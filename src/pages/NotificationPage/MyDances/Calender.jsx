import React from 'react'
import calender from '../../../img/icons/calender1.png'
function Calender() {
  return (
    <div className='p-5' style={{backgroundColor:'#f6d46b'}}>
        <h2 className='fw-bold'>My Event Calendar</h2>
        <div>
            <img src={calender} alt='img' width={500}/>
        </div>
        
    </div>
  )
}

export default Calender