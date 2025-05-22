import React from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'
import DashedBtn from '../components/DashedBtn'
import icons from '../assets/icons'
import Button from '../components/Button'
function AddTemplate() {
  return (
    <div className='formContainer'>
        <PageHeader pageTitle="Add Template" />
        <div className="marginLine"></div>
        <div className="addTemplateWrapper">
            <div className="dragAndDropContainer">
                <div className="dadLogoContainer">
                    {<icons.general.copy/>}
                </div>
                <p className='mdTxt'>Drag And Drop</p>
                <p className='nanoTxt or'>or</p>
                <input type="file" />
                <p className='nanoTxt dim'>We won’t use any of your content at any place. We assure of your privacy and we here to protect it.</p>
            </div>
            <div className="writeTemplateContainer">
                <div className="templateHeader">
                    <InputTxt/>
                    <InputTxt/>
                </div>

                <div className="templateBox">
                    <div className="tbHeader smTxt">
                        <p>Write Template</p>
                        <p>Copy</p>
                    </div>

                    <div className="inputTextBox">
                        <textarea name="" id="" ></textarea>
                    </div>
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

export default AddTemplate