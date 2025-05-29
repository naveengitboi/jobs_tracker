import React from 'react'
import AppDetailsCard from './AppDetailsCard';

function ApplicationData() {
  return (
    <>
      <div className="adCardsHeader">
        <AppDetailsCard />
        <AppDetailsCard />
        <AppDetailsCard />
        <AppDetailsCard />
      </div>
      <div className='adDescriptionContainer'>
        <div className="adDescription">
          <p className='smTxt'>Description</p>
          <p className="regularTxt">
            Create best in class design outputs in line with agency standards. — Create designs such as user interface, design systems, layouts, brand  identity, iconography and assist with presentation narratives. — Create designs such as user interface, design systems, layouts, brand  identity, iconography and assist with presentation narratives.
          </p>
        </div>

          <div className="adLinks">
            <button className='dashedBtn'>Extra Link</button>
            <div className="rightLinks ">
              <button className='dashedBtn'>Extra Link</button>
              <button className='dashedBtn'>Extra Link</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default ApplicationData