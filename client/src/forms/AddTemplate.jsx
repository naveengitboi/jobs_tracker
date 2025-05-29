import React, {useState} from 'react'
import PageHeader from '../components/PageHeader'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'
import icons from '../assets/icons'
import Button from '../components/Button'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

function AddTemplate() {
    const [template, setTemplate] = useState({
        'template_body':"The quick brown naveen jumps naveen over the lazy naveen."
    });
    const [copyToClipboard, isCopied] = useCopyToClipboard();
    const [replaceWord, setReplaceWord] = useState();
    const addTemplateHandler = () => {
        console.log("Template", template);
    }
    const onChangeHandler = (e, updateState) => {
        const {name, value} = e.target;
        updateState(prev => ({
            ...prev,
            [name]:value
        }))
    }
    const replaceHandler = () => {
        const word = replaceWord.before;
        const replaceWith = replaceWord["replace_with"];
        if(word && replaceWith){
            const regex = new RegExp(word, 'g');
            const beforeTxt = template["template_body"];
            const afterTxt = beforeTxt.replace(regex, replaceWith);
            console.log("After ", afterTxt)
            setTemplate(prev => ({
                ...prev,
                "template_body": afterTxt
            }))
            console.log(template);
        }
    }

    const handleCopyClick = async () => {
        await copyToClipboard(template["template_body"]);
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
                                    label: "Role",
                                    placeholder: "Software Developer",
                                    type: "text",
                                    setValue: setTemplate,
                                    getValue: template,
                                    name: "template_role"
                                }
                            }
                        />

                        <div className="replacerInputsWrapper">
                            <input type='text' placeholder='replace word' name="before" onChange={(e) =>onChangeHandler(e, setReplaceWord)}  />
                            <input type='text' placeholder='with' name="replace_with" onChange={(e) => onChangeHandler(e, setReplaceWord)} />
                            <Button label="Replace" containsSvg={false} clickHandler={replaceHandler} />
                        </div>

                    </div>

                    <div className="templateBox">
                        <div className="tbHeader smTxt">
                            <p>Write Template</p>
                            <p onClick={handleCopyClick}>{isCopied ? "Copied": "Copy"}</p>
                        </div>

                        <div className="inputTextBox">
                            <textarea name="template_body" id="" 
                                onChange={(e) => onChangeHandler(e, setTemplate)} 
                                placeholder='Im an enthusisatic student who wants ......'
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
                                styleName={"dashedBtn succeed"}
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