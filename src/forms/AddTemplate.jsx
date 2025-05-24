import React, {useState} from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'
import icons from '../assets/icons'
import Button from '../components/Button'
function AddTemplate() {
    const [template, setTemplate] = useState({});
    const addTemplateHandler = () => {
        console.log("Template", template);
    }
    const textareaHandler = (e) => {
        const {name, value} = e.target;
        setTemplate(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const replaceHandler = () => {
        console.log("Replaced");
    }

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
                    <div className="templateHeader">
                        <InputTxt
                            actions={
                                {
                                    svg: icons.general.role,
                                    label: 'CTC Mentioned',
                                    placeholder: "10LPA",
                                    type: "text",
                                    setValue: setTemplate,
                                    getValue: template,
                                    name: "salary"
                                }
                            }
                        />

                        <div className="replacerInputs">
                            <input type='text' placeholder='replace word'/>
                            <input type='text' placeholder='with'/>
                            <Button label="Replace" containsSvg={false} clickHandler={replaceHandler} />
                        </div>

                    </div>

                    <div className="templateBox">
                        <div className="tbHeader smTxt">
                            <p>Write Template</p>
                            <p>Copy</p>
                        </div>

                        <div className="inputTextBox">
                            <textarea name="template_body" id="" 
                                onChange={textareaHandler} 
                            ></textarea>
                        </div>
                    </div>
                    <div className="templateActions">
                        <InputTxt
                            actions={
                                {
                                    svg: icons.general.edit,
                                    label: "",
                                    placeholder: "Resume",
                                    type: "text",
                                    setValue: setTemplate,
                                    getValue: template,
                                    name: "template_type"
                                }
                            }
                        />

                        <div className="btnGrp">

                            <Button
                                label="Add"
                                containsSvg={false}
                                styleName={"dashedBtn danger"}
                                clickHandler={addTemplateHandler}
                            />
                            <Button
                                label="Cancel"
                                containsSvg={false}
                                styleName={"dashedBtn danger"}
                                clickHandler={addTemplateHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTemplate