import React from 'react'

function AppDetailsCard({ card }) {
  return !card.isLink ? (

    <div className='appDetailsCard dashedBorder'>
      <p className='smTxt'>{card.heading}</p>
      <p className='lgTxt'>{card.content}</p>
    </div>
  ) : (
    <a href={card.url} target='_blank' className='appDetailsCard dashedBorder linkAppDetailsCard'>
      <p className='smTxt'>{card.heading}</p>
      <p className='lgTxt'>{card.content}</p>
    </a>
  )
}

export default AppDetailsCard