import React from 'react'
import Button from './Button'
import '../styles/components/PageHeader.css'

function PageHeader(props) {
    const {pageTitle, pageAction} = props;
  return (
    <div className='pageHeader'>
        <h1 className='mdTxt'>{pageTitle}</h1>
        <Button />
    </div>
  )
}

export default PageHeader