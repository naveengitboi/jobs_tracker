import React from 'react'
import icons from '../assets/icons'


function Button(props) {
  const { styleName="button_primary", containsSvg = false, label="Dummy Btn"} = props

  return (
    <button className={styleName} onClick={props.clickHandler}>
        {containsSvg ? <props.actions.svg/> : ""}
         {label}
    </button>
  )
}

export default Button