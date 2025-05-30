import React from 'react'
import { getShortWord } from '../utils/helper'

function SiteCard(props) {
  return (
    <>
        <h1 className='lgTxt'>{getShortWord(props.cardTitle)}</h1>
        <p className="regText">{props.cardTitle}</p>
    </>
  )
}

export default SiteCard