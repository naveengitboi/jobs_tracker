import React from 'react'
import icons from '../assets/icons'




function InputTxt(props) {

  const inputHandlerChange = (event) => {
    const {name, value} = event.target
    props.actions.setValue(prev => ({...prev, [name]: value}))
  }

  return (
    <div className='inputOuterWrapper'>
        <label htmlFor="" className='inputLabel smTxt'>{props.actions.label}</label>
    <div className='inputWrapper'>
        <div className="inputSvg">
            {<props.actions.svg/>}
        </div>
        <input type={props.actions.type}  placeholder={props.actions.placeholder} name={props.actions.name} onChange={(e) => inputHandlerChange(e)} />
    </div>
    </div>
  )
}

export default InputTxt