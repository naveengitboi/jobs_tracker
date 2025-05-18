import React from 'react'
import icons from '../assets/icons'

function Button() {
  return (
    <button className='button_primary'>
        {<icons.add/>} New Application
    </button>
  )
}

export default Button