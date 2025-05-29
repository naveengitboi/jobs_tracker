import React from 'react'


function SiteCard(props) {
  return (
    <>
        <h1 className='lgTxt'>{props.getShortWord(props.cardTitle)}</h1>
        <p className="regText">{props.cardTitle}</p>
    </>
  )
}

export default SiteCard