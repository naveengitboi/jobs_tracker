import React from 'react'
import icons from '../assets/icons'




function InputTxt(props) {
  

  const inputHandlerChange = (event) => {
    const {name, value} = event.target
    props.actions.setValue(prev => ({...prev, [name]: value}))
  }
  const { hasSvg=true, getValue} = props.actions

  return (
    <div className='inputOuterWrapper'>
        <label htmlFor="" className='inputLabel smTxt'>{props.actions.label}</label>
    <div className='inputWrapper'>
      {
        hasSvg ?(
        <div className="inputSvg">
            {<props.actions.svg/>}
        </div>
        ): ""
      }
        <input type={props.actions.type}  placeholder={props.actions.placeholder} name={props.actions.name} onChange={(e) => inputHandlerChange(e)} value={getValue} />
    </div>
    </div>
  )
}

export default InputTxt