import React from 'react'
import Button from './Button'
import '../styles/PageHeader.css'

function PageHeader(props) {
    const {pageTitle, pageAction} = props;
  return (
    <div className='pageHeader'>
        <h1 className='lgTxt'>{pageTitle}</h1>
        <Button />
    </div>
  )
}

export default PageHeader