import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import TemplateCard from '../components/TemplateCard'
import icons from '../assets/icons'
import {templates} from "../utils/data"


function Template() {
  const [filterTemplates, setFilterTemplates] = useState(templates);
  return (
    <div className='pageContainer'>
        <PageHeader pageTitle="Templates" isBtn={false} actions={{to:'/new_template', svg: icons.general.add, label:'Template'}}  />
        <div className="templateCards">
            {
              filterTemplates.map((template, index) => {
                return <TemplateCard data={template} key={index} setFilterTemplates={setFilterTemplates} />
              })
            }
        </div>
        <div className="marginLine">
        </div>
    </div>
  )
}


export default Template