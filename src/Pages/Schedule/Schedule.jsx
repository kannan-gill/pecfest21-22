import React from 'react'
import ComingSoon from 'Components/ComingSoon/ComingSoon';
import Navbar from 'Components/Navbar';

function Schedule() {
  return (
    <div className='vh-100' style={{background:"#fb6d62"}}>
      <Navbar/>
      <ComingSoon/>
    </div>
  )
}

export default Schedule