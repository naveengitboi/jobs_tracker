import React from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'

function AddTemplate() {
  return (
    <div className='formContainer'>
        <PageHeader pageTitle="Add Template" />
        <div className="marginLine"></div>
        <div className="addTemplateWrapper">
            <div className="dragAndDropContainer"></div>
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
            </div>
        </div>
    </div>
  )
}

export default AddTemplate