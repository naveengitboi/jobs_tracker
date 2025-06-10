import React from 'react'
import { useParams } from 'react-router-dom'
import EditTemplate from '../components/EditTemplate';
import { templates } from '../utils/data';

function TemplateViewer() {
    const {id} = useParams();
    console.log(" Selected id", id)
    let temp = templates.filter((temp, i) => temp.template_id == id);
  return (
    <div className='teamplteViewerContainer'>
        <EditTemplate template={temp[0]} isUpdate={true} />
    </div>
  )
}

export default TemplateViewer