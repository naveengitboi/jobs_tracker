import React from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import DashedBtn from '../components/DashedBtn'
import '../styles/forms/AddApplications.css'

import {useHistory} from 'react-router-dom'

function AddApplication() {

    //history or going back home
    const navHistory = useHistory();

    const handleHistory = () => {
        navHistory.push('/');
    }

  return (
    <div className="formContainer">
        <PageHeader pageTitle="Add Application" />
        <div className="marginLine"></div>
        <div className="addAppWrapper">
            <div className="leftBox quoteContainer"></div>
            <div className="rightBox addAppInputsWrapper">
                <div className="aaic">
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                <InputTxt/>
                </div>
                <div className="addAppTextareaWrapper">
                    <textarea name="" id="" placeholder="Job Description"></textarea>
                </div>

                <div className="templateActions">
                    <InputTxt />
                    <div className="btnGrp">
                        <DashedBtn/>
                        <DashedBtn/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddApplication