import React from 'react'
import icons from '../assets/icons'
import '../styles/pages/Template.css'
import { Link } from 'react-router-dom';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

function TemplateCard(props) {

    const [copyToClipboard, isCopied] = useCopyToClipboard();

    const data = props.data;
    const deleteHandler = (e, target_id) => {
        console.log(target_id);
        props.setFilterTemplates(prev => prev.filter((template, i) => {
            return template.template_id != target_id;
        }))
    }

    const handleCopyClick = async () => {
        await copyToClipboard(data.content);
    }

    return (
        <div className='templateCard smTxt effect'>
            <div className="templateHeading">
                <div className="templateInfo">
                    <p className="regTxt">{data.title}</p>
                    <p className="smTxt">{data.type}</p>
                </div>
                <div className="templateLogo copy" onClick={handleCopyClick}>
                    {
                        isCopied? (<icons.general.copied />): (<icons.general.copy/>)
                    }
                </div>
            </div>
            <div className="templateUpdateDetails">
                <p>updated {data.get_date()}</p>
                <div className="templateLogo">
                    <div>
                        <Link to={`/templates/${data.template_id}`} >
                            {<icons.general.edit />}
                        </Link>
                    </div>
                    <div onClick={(e) => deleteHandler(e, data.template_id)}>
                        {<icons.general.delete />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateCard