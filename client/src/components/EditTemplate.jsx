import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import InputTxt from '../components/InputTxt'
import '../styles/forms/AddTemplate.css'
import icons from '../assets/icons'
import Button from '../components/Button'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

function EditTemplate(props) {
    const navigate = useNavigate();

    
    const { isUpdate = false } = props
    const [template, setTemplate] = useState(props.template);
    const [copyToClipboard, isCopied] = useCopyToClipboard();
    const [replaceWord, setReplaceWord] = useState({});


    const addTemplateHandler = () => {
        console.log("Template", template);
    }

    const cancelHandler = () => {
        navigate('/templates')
    }

    const updateHandler = () => {
        console.log("Update function")
    }


    const onChangeHandler = (e, setter) => {
        const { name, value } = e.target;
        setter(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const replaceHandler = () => {
        const word = replaceWord.before;
        const replaceWith = replaceWord["replace_with"];
        console.log(word, replaceWith)
        if (word && replaceWith) {
            const regex = new RegExp(word, 'g');
            const beforeTxt = template["content"];
            const afterTxt = beforeTxt.replace(regex, replaceWith);
            setTemplate(prev => ({
                ...prev,
                "content": afterTxt
            }))
            console.log(template);
        }
    }
    const handleCopyClick = async () => {
        await copyToClipboard(template.content);
    }
    return (
        <>
            <div className="templateHeader">
                <InputTxt
                    actions={
                        {
                            svg: icons.general.role,
                            label: "Role",
                            placeholder: "Software Developer",
                            type: "text",
                            setValue: setTemplate,
                            getValue: template.title,
                            name: "title"
                        }
                    }
                />

                <div className="replacerInputsWrapper">

                    <InputTxt
                        actions={
                            {
                                hasSvg: false,
                                label: "",
                                placeholder: "Replace Word",
                                type: "text",
                                setValue: setReplaceWord,
                                getValue: replaceWord["before"],
                                name: "before"
                            }
                        }
                    />

                    <InputTxt
                        actions={
                            {
                                hasSvg: false,
                                label: "",
                                placeholder: "With",
                                type: "text",
                                setValue: setReplaceWord,
                                getValue: replaceWord["replace_with"],
                                name: "replace_with"
                            }
                        }
                    />

                    <Button label="Replace" containsSvg={false} clickHandler={replaceHandler} />
                </div>

            </div>

            <div className="templateBox">
                <div className="tbHeader smTxt">
                    <p>Write Template</p>
                    <p onClick={handleCopyClick}>{isCopied ? "Copied" : "Copy"}</p>
                </div>

                <div className="inputTextBox">
                    <textarea name="content" id=""
                        value={template.content}
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
                            getValue: template.type,
                            name: "type"
                        }
                    }
                />

                <div className="btnGrp">
                    {
                        isUpdate ? (

                            <Button
                                label="Update"
                                containsSvg={false}
                                styleName={"dashedBtn succeed"}
                                clickHandler={updateHandler}
                            />) : (
                            <Button
                                label="Add"
                                containsSvg={false}
                                styleName={"dashedBtn succeed"}
                                clickHandler={addTemplateHandler}
                            />
                        )
                    }

                    <Button
                        label="Cancel"
                        containsSvg={false}
                        styleName={"dashedBtn danger"}
                        clickHandler={cancelHandler}
                    />
                </div>
            </div>

        </>
    )
}

export default EditTemplate