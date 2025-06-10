import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import icons from '../assets/icons'
import '../styles/pages/Applications.css'
import ApplicationData from '../components/ApplicationData'
import { applications } from '../utils/data'


function ApplicationListItem({application}) {
  const [viewDetails, setViewDetials] = useState(false);
  return (
    <div className="atRowOuter">
    <div className="atRow atJobRow" onClick={() => setViewDetials(prev => prev=!prev)}>

      <p className='atCell regularTxt'>{application.company}</p>
      <p className='atCell regularTxt'>{application.role}</p>
      <p className='atCell regularTxt'>{application.job_type}</p>
      <p className='atCell regularTxt'>{application.ctc_mentioned}</p>
      <p className='atCell regularTxt'>{application.status}</p>
      <a href={application.job_link} target='_blank' className='atCell regularTxt'>View Application</a>
    </div>

      <div className={`applicationDetails ${viewDetails && "openAnimate"}`}>
        <ApplicationData />
      </div>

    </div>
  )

}


function Applications() {
  return (
    <div className='pageContainer'>
      <PageHeader pageTitle="Applications" isBtn={false} actions={{ to: '/new_application', svg: icons.general.add, label: 'Application' }} />
      <div className="appHeader">
        <div className=""></div>
        <div className="appActions">
          <div className="appActionsIcon">
            {<icons.general.search />}
            {<icons.general.filter />}
            {<icons.general.calender />}
          </div>
        </div>
      </div>
      <div className="marginLine"></div>
      <div className="appTable">
        <div className="atRow appTableHeader">
          <p className="atCell smTxt">Company</p>
          <p className="atCell smTxt">Role</p>
          <p className="atCell smTxt">Job Type</p>
          <p className="atCell smTxt">CTC</p>
          <p className="atCell smTxt">Status</p>
          <p className="atCell smTxt">Link</p>
        </div>
        {
          applications.map((application, idx) => {
            return (
              <ApplicationListItem application={application}/>
            )
          })
        }
      </div>
    </div>
  )
};

export default Applications 