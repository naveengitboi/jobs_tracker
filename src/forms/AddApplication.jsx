import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import DashedBtn from '../components/DashedBtn'
import Button from '../components/Button'
import '../styles/forms/AddApplications.css'
import icons from '../assets/icons'


function AddApplication() {
    
    const [applicationData, setApplicationData] = useState({});

    //history or going back home

    const submitHandler = ()=>{
        console.log("Application Data", applicationData);
    }

    const textareaHandler = (e) => {
        const {name, value} = e.target
        setApplicationData(prev => ({
                ...prev,
                [name]:  value
            }))
    }

  return (
    <div className="formContainer">
        <PageHeader pageTitle="Add Application" isBtn={false} actions={{to:'/', svg: icons.general.calender, label:'Go Home'}} />
        <div className="marginLine"></div>
        <div className="addAppWrapper">
            <div className="leftBox quoteContainer"></div>
            <div className="rightBox addAppInputsWrapper">
                <div className="aaic">
                <InputTxt actions={
                    {
                        svg:icons.general.work,
                        label:'Comapany',
                        placeholder:"Google",
                        type:"text",
                        setValue: setApplicationData,
                        applicationState: applicationData,
                        name:"company"
                    }
                }/>
                <InputTxt actions={
                    {
                        svg:icons.general.role,
                        label:'Job Role',
                        placeholder:"SDE 1",
                        type:"text",
                        setValue: setApplicationData,
                        applicationState: applicationData,
                        name:"role"
                    }
                }/>
                <InputTxt actions={
                    {
                        svg:icons.general.money,
                        label:'CTC Mentioned',
                        placeholder:"10LPA",
                        type:"text",
                        setValue: setApplicationData,
                        name:"salary"
                    }
                }/>
                <InputTxt actions={
                    {
                        svg:icons.general.jobType,
                        label:'Job Type',
                        placeholder:"Full Time",
                        type:"text",
                        setValue: setApplicationData,
                        name:"job_type"
                    }
                }/>
                <InputTxt actions={
                    {
                        svg:icons.user.location,
                        label:'Location',
                        placeholder:"Banglore",
                        type:"text",
                        setValue: setApplicationData,
                        name:"location"
                    }
                }/>
                <InputTxt actions={
                    {
                        svg:icons.general.portal,
                        label:'Web Site',
                        placeholder:"Linked In",
                        type:"text",
                        setValue: setApplicationData,
                        name:"portal"
                    }
                }/>
                
                
                <InputTxt actions={
                    {
                        svg:icons.general.weblink,
                        label:'Link',
                        placeholder:"https://linkedin/job.com",
                        type:"text",
                        setValue: setApplicationData,
                        name:"application_link"
                    }
                }/>
                
                
                <InputTxt actions={
                    {
                        svg:icons.general.calender,
                        label:'Applied On',
                        placeholder:"Click Right Icon",
                        type:"date",
                        setValue: setApplicationData,
                        name:"applied_on"
                    }
                }/>
                
                
                
                </div>
                <div className="addAppTextareaWrapper">
                    <textarea  id="" placeholder="Job Description" name="job_description" onChange={(e) => textareaHandler(e)}></textarea>
                </div>

                <div className="templateActions">
                    <div></div>
                    <div className="btnGrp">
                        <Button 
                            label="Submit"
                            containsSvg={false}
                            styleName = {"dashedBtn succeed"}
                            clickHandler = {submitHandler}
                        />
                        <Button 
                            label="Delete"
                            containsSvg={false}
                            styleName = {"dashedBtn danger"}
                            clickHandler = {submitHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddApplication