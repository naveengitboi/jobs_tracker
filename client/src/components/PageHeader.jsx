import React from 'react'
import Button from './Button'
import '../styles/components/PageHeader.css'
import NavButton from './NavButton';

function PageHeader(props) {
  return (
    <div className='pageHeader'>
        <h1 className='mdTxt'>{props.pageTitle}</h1>
        {
          props.isBtn ? <Button/> : <NavButton {...props.actions}/>
        }
    </div>
  )
}

export default PageHeader