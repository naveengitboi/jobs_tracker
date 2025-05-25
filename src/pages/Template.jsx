import React from 'react'
import PageHeader from '../components/PageHeader'
import TemplateCard from '../components/TemplateCard'
import icons from '../assets/icons'
function Template() {
  return (
    <div className='pageContainer'>
        <PageHeader pageTitle="Templates" isBtn={false} actions={{to:'/new_template', svg: icons.general.add, label:'Template'}}  />
        <div className="templateCards">
            <TemplateCard/>
            <TemplateCard/>
            <TemplateCard/>
            <TemplateCard/>
        </div>
        <div className="marginLine">
        </div>
    </div>
  )
}


export default Template