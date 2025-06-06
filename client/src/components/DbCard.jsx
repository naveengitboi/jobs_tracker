import React from 'react'
import '../styles/components/DbCard.css'
import icons from '../assets/icons'
function DbCard(props) {
  return (
    <div className='dbCardItem effect'>
        <p className='regularTxt'>{props.dbcTitle}</p>
        <h1 className='lgTxt'>{props.dbcCount}</h1>
        {<icons.nav.jblogo/>}
    </div>
  )
}

export default DbCard