import React from 'react'
import icons from '../assets/icons'

function InputTxt() {
  return (
    <div className='inputOuterWrapper'>
        <label htmlFor="" className='smTxt'>Job Role</label>
    <div className='inputWrapper'>
        <div className="inputSvg">
            {<icons.general.copy/>}
        </div>
        <input type="text"  placeholder='Google'/>
    </div>
    </div>
  )
}

export default InputTxt