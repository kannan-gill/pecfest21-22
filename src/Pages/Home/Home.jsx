import React from 'react';
import './Home.css'

// home will contain a catchy pecfest title with svg, parallax effect. about pecfest where we will show images 
// from previous year events. this will be followed by schedule of day1, day2, day3. 

function Home() {
  return <div>
      <video autoPlay muted loop className='pecfestvid'>
        <source src="../../Images/pecfestvid1.mp4" type="video/mp4"/>
      </video>

      <h1 className='title'>PECFEST 2022</h1>
      <div className='buttons'>
        <div>Events</div>
        <div>schedule</div>
        <div>Campus Tour</div>
        <div>About PEC</div>
        <div>Developers</div>
      </div>

  </div>;
}

export default Home;
