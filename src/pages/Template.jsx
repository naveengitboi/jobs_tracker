import React from 'react'
import PageHeader from '../components/PageHeader'
import TemplateCard from '../components/TemplateCard'
function Template() {
  return (
    <div className='pageContainer'>
        <PageHeader pageTitle="Templates"/>
        <div className="templateCards">
            <TemplateCard/>
            <TemplateCard/>
            <TemplateCard/>
            <TemplateCard/>
        </div>
    </div>
  )
}

export default Template