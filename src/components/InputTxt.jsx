import React from 'react'
import icons from '../assets/icons'

function InputTxt(props) {
  return (
    <div className='inputOuterWrapper'>
        <label htmlFor="" className='inputLabel smTxt'>Job Role</label>
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