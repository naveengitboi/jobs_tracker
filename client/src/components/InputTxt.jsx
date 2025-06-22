import React from 'react'
import icons from '../assets/icons'




function InputTxt(props) {
  

  const inputHandlerChange = (event) => {
    const {name, value} = event.target
    props.actions.setValue(prev => ({...prev, [name]: value}))
  }

  const handleSvgClick = () => {
    if(props.svgClickHandler){
      props.svgClickHandler();
    }else{
      return;
    }
  }
  
  const { hasSvg=true, getValue, toRight = false} = props.actions;

  return (
    <div className='inputOuterWrapper'>
        <label htmlFor="" className='inputLabel smTxt'>{props.actions.label}</label>
    <div className='inputWrapper'>
      {
        hasSvg && !toRight ?(
        <div className="inputSvg leftSideSvg" onClick={handleSvgClick}>
            {<props.actions.svg/>}
        </div>
        ): ""
      }
        <input type={props.actions.type}  placeholder={props.actions.placeholder} name={props.actions.name} onChange={(e) => inputHandlerChange(e)} value={getValue} />
      
      {
        hasSvg && toRight ?(
        <div className="inputSvg rightSideSvg" onClick={handleSvgClick}>
            {<props.actions.svg/>}
        </div>
        ): ""
      }
    </div>
    </div>
  )
}

export default InputTxt