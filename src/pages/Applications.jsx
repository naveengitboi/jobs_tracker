import React from 'react'
import PageHeader from '../components/PageHeader'
import icons from '../assets/icons'
import '../styles/pages/Applications.css'
import ApplicationData from '../components/ApplicationData'
function Applications() {
  return (
    <div className='pageContainer'>
      <PageHeader pageTitle="Applications" isBtn={false} actions={{to:'/', svg: icons.general.add, label:'Application'}}  />
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
          <p className="atCell smTxt">Company</p>
          <p className="atCell smTxt">Company</p>
          <p className="atCell smTxt">Company</p>
          <p className="atCell smTxt">Company</p>
          <p className="atCell smTxt">Company</p>
        </div>
        <div className="atRow atJobRow">
          <p className='atCell regularTxt'>Google</p>
          <p className='atCell regularTxt'>Google</p>
          <p className='atCell regularTxt'>Google</p>
          <p className='atCell regularTxt'>Google</p>
          <p className='atCell regularTxt'>Google</p>
          <p className='atCell regularTxt'>Google</p>
          <div className="applicationDetails">
            <ApplicationData/>
          </div>
        </div>
      </div>
    </div>
  )
};
 
export default Applications 