import React from 'react'
import icons from '../assets/icons'

function Button() {
  return (
    <button className='button_primary'>
        {<icons.general.add/>} New Application
    </button>
  )
}

export default Button