import React from 'react'
import { NavLink } from 'react-router-dom'

function NavButton(props){
  return (
    <NavLink to={props.to} className='button_primary'>
        {<props.svg/>} {props.label}
    </NavLink>
  )
}

export default NavButton