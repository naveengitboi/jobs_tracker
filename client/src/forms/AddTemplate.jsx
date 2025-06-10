import React, {useState} from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'
import icons from '../assets/icons'
import Button from '../components/Button'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import EditTemplate from '../components/EditTemplate'
import { templates } from '../utils/data'

function AddTemplate() {
    return (
        <div className='formContainer'>
            <PageHeader pageTitle="Add Template" isBtn={false} actions={{ to: '/', svg: icons.general.back, label: 'Go Home' }} />
            <div className="marginLine"></div>

            <div className="addTemplateWrapper">
                <div className="dragAndDropContainer">
                    <div className="dadLogoContainer">
                        {<icons.general.copy />}
                    </div>
                    <p className='mdTxt'>Drag And Drop</p>
                    <p className='nanoTxt or'>or</p>
                    <input type="file" />
                    <p className='nanoTxt dim'>We won’t use any of your content at any place. We assure of your privacy and we here to protect it.</p>
                </div>


                <div className="writeTemplateContainer">
                    <EditTemplate template={templates[0]} />
                </div>
            </div>
        </div>
    )
}

export default AddTemplate